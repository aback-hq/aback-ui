"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { cn } from "../lib/utils";
import { Button, type ButtonProps } from "./button";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const DEFAULT_STORAGE_KEY = "theme";
const CHANGE_EVENT = "aback-ui:themechange";
/** Set on `<html>` by ThemeScript when the page starts in light or dark rather than following the system. */
const DEFAULT_ATTRIBUTE = "data-default-theme";

function isPreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

/** The page's choice for a visitor who has not picked one. */
function defaultPreference(): ThemePreference {
  const value = document.documentElement.getAttribute(DEFAULT_ATTRIBUTE);
  return isPreference(value) ? value : "system";
}

function readPreference(storageKey: string): ThemePreference {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (isPreference(stored)) return stored;
  } catch {
    // Storage throws in some privacy modes and sandboxed frames.
  }
  return defaultPreference();
}

function systemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolve(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? systemTheme() : preference;
}

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function subscribe(storageKey: string, onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function onSystemChange() {
    if (readPreference(storageKey) !== "system") return;
    applyTheme(systemTheme());
    onChange();
  }

  function onStorage(event: StorageEvent) {
    if (event.key !== storageKey) return;
    applyTheme(resolve(readPreference(storageKey)));
    onChange();
  }

  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export interface UseThemeResult {
  /**
   * What the visitor chose, including "system". Before they choose, it is the
   * page's default: "system", or ThemeScript's `defaultTheme`.
   */
  theme: ThemePreference;
  /** What is on screen. "light" during the server render. */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
}

/**
 * Reads and writes the colour theme. The contract is the one the Aback theme
 * CSS expects: a `dark` class on `<html>`, with the choice stored under
 * `storageKey`. Every component using the hook stays in sync, and so do
 * other tabs.
 */
function useTheme(storageKey: string = DEFAULT_STORAGE_KEY): UseThemeResult {
  const subscribeToTheme = React.useCallback(
    (onChange: () => void) => subscribe(storageKey, onChange),
    [storageKey],
  );
  // A string snapshot keeps the value primitive, so React can compare it.
  const snapshot = React.useSyncExternalStore(
    subscribeToTheme,
    () => {
      const preference = readPreference(storageKey);
      return `${preference}:${document.documentElement.classList.contains("dark") ? "dark" : "light"}`;
    },
    () => "system:light",
  );
  const [theme, resolvedTheme] = snapshot.split(":") as [ThemePreference, ResolvedTheme];

  const setTheme = React.useCallback(
    (next: ThemePreference) => {
      try {
        window.localStorage.setItem(storageKey, next);
      } catch {
        // Not persisted, but the theme still changes for this page view.
      }
      applyTheme(resolve(next));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    [storageKey],
  );

  return { theme, resolvedTheme, setTheme };
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

const REVEAL_DURATION = 500;

/**
 * Runs `update` inside a view transition and grows the new theme from a circle
 * at `origin`. Both snapshots are held opaque with normal blending, so only
 * the circle moves. Without the View Transitions API, or under reduced
 * motion, `update` runs at once.
 */
function revealThemeChange(update: () => void, origin: { x: number; y: number }) {
  const doc = document as ViewTransitionDocument;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!doc.startViewTransition || reduceMotion) {
    update();
    return;
  }
  const { x, y } = origin;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  // flushSync, so the toggle's own label is already updated in the new snapshot.
  const transition = doc.startViewTransition(() => flushSync(update));
  transition.ready
    .then(() => {
      const root = document.documentElement;
      const timing = { duration: REVEAL_DURATION, easing: "cubic-bezier(0.4, 0, 0.2, 1)" };
      const hold = { opacity: [1, 1], mixBlendMode: ["normal", "normal"] };
      root.animate(hold, { ...timing, pseudoElement: "::view-transition-old(root)" });
      root.animate(
        { ...hold, clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { ...timing, pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {
      // A skipped transition still applied the theme; there is nothing to animate.
    });
}

export interface ThemeToggleProps
  extends Omit<ButtonProps, "onClick" | "children" | "asChild"> {
  storageKey?: string;
  /**
   * `reveal` grows the new theme from the button in a circle, in browsers with
   * the View Transitions API. It switches at once under reduced motion and in
   * other browsers.
   */
  transition?: "none" | "reveal";
  /** Accessible name while the light theme is showing. */
  toDarkLabel?: string;
  /** Accessible name while the dark theme is showing. */
  toLightLabel?: string;
}

/**
 * A light and dark switch. The icon follows the `dark` class through CSS, so
 * it is right before hydration; the accessible name follows the state. Set
 * `transition="reveal"` for a circular reveal from the button.
 */
function ThemeToggle({
  storageKey,
  transition = "none",
  toDarkLabel = "Switch to dark theme",
  toLightLabel = "Switch to light theme",
  variant = "ghost",
  size = "icon",
  className,
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme(storageKey);
  const label = resolvedTheme === "dark" ? toLightLabel : toDarkLabel;

  return (
    <Button
      type="button"
      data-slot="theme-toggle"
      variant={variant}
      size={size}
      aria-label={label}
      title={label}
      onClick={(event) => {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        if (transition !== "reveal") {
          setTheme(next);
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        revealThemeChange(() => setTheme(next), {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }}
      className={cn(className)}
      {...props}
    >
      <IconMoon aria-hidden="true" className="dark:hidden" />
      <IconSun aria-hidden="true" className="hidden dark:block" />
    </Button>
  );
}

export interface ThemeScriptProps {
  storageKey?: string;
  /**
   * The theme for a visitor who has not chosen one. "system" follows the
   * operating system. "light" or "dark" starts there whatever the system
   * says; ThemeToggle and useTheme on the same page read it, so set it here
   * only.
   */
  defaultTheme?: ThemePreference;
  /** Content Security Policy nonce for the inline script. */
  nonce?: string;
}

const PREFERS_DARK = 'window.matchMedia("(prefers-color-scheme: dark)").matches';

/**
 * Applies the stored theme before the first paint, so a dark-mode visitor
 * never sees a white flash. Render it in `<head>`, or first in `<body>`, and
 * add `suppressHydrationWarning` to `<html>` because the class changes early.
 */
function ThemeScript({
  storageKey = DEFAULT_STORAGE_KEY,
  defaultTheme = "system",
  nonce,
}: ThemeScriptProps) {
  // JSON.stringify quotes the key, and the escape keeps it inside the script.
  const key = JSON.stringify(storageKey).replace(/</g, "\\u003c");
  const fallback = isPreference(defaultTheme) ? defaultTheme : "system";
  const code =
    fallback === "system"
      ? `(function(){try{var t=localStorage.getItem(${key});var d=t==="dark"||((!t||t==="system")&&${PREFERS_DARK});document.documentElement.classList.toggle("dark",d);}catch(e){}})();`
      : // The attribute goes on first, so the toggle knows the default even when storage throws.
        `(function(){var r=document.documentElement;r.setAttribute("${DEFAULT_ATTRIBUTE}","${fallback}");try{var t=localStorage.getItem(${key});if(t!=="light"&&t!=="dark"&&t!=="system")t="${fallback}";var d=t==="dark"||(t==="system"&&${PREFERS_DARK});r.classList.toggle("dark",d);}catch(e){r.classList.toggle("dark",${fallback === "dark"});}})();`;
  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: code }} />;
}

export { ThemeScript, ThemeToggle, useTheme };
