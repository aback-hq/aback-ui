"use client";

import * as React from "react";
import { IconSearch } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import { Kbd } from "./kbd";

const searchTriggerVariants = cva(
  [
    "group flex w-full min-w-0 cursor-pointer items-center border border-input bg-card text-left text-muted-foreground outline-none",
    "transition-colors duration-200 hover:border-foreground/30 hover:text-foreground",
    "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        default: "h-10 gap-3 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
        /** The large field at the top of a home or directory page. */
        lg: "h-14 gap-3 px-4 text-base shadow-lg sm:h-15 sm:px-5 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type Platform = "apple" | "other" | null;

const noSubscribe = () => () => {};

/** Apple keyboards say ⌘, the rest Ctrl. Unknown during the server render. */
function usePlatform(): Platform {
  return React.useSyncExternalStore<Platform>(
    noSubscribe,
    () => (/Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent) ? "apple" : "other"),
    () => null,
  );
}

export interface SearchTriggerProps
  extends Omit<React.ComponentProps<"button">, "children">,
    VariantProps<typeof searchTriggerVariants> {
  /** The hint shown in the field. It is also the button's accessible name unless you pass aria-label. */
  placeholder?: string;
  /**
   * The letter that clicks the trigger with ⌘ on Apple keyboards and Ctrl
   * elsewhere, from anywhere on the page. The hint is shown on screens from
   * 640px. Pass `false` for no shortcut.
   */
  shortcut?: string | false;
}

/**
 * A button drawn as a search field. It opens your search, usually a
 * CommandDialog, from `onClick`, and from ⌘K or Ctrl+K. It holds no query
 * itself: typing happens in the dialog it opens.
 */
function SearchTrigger({
  placeholder = "Search",
  shortcut = "k",
  size = "default",
  className,
  type = "button",
  ...props
}: SearchTriggerProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const platform = usePlatform();
  const key = shortcut ? shortcut.toLowerCase() : null;

  React.useEffect(() => {
    if (!key) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.shiftKey) return;
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== key) return;
      const button = ref.current;
      if (!button || button.disabled) return;
      // The first trigger on the page takes the shortcut; the rest see it handled.
      event.preventDefault();
      button.click();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [key]);

  const modifier = platform === "apple" ? "⌘" : "Ctrl";

  return (
    <button
      ref={ref}
      type={type}
      data-slot="search-trigger"
      data-size={size}
      aria-keyshortcuts={key ? `Meta+${key.toUpperCase()} Control+${key.toUpperCase()}` : undefined}
      className={cn(searchTriggerVariants({ size }), className)}
      {...props}
    >
      <IconSearch aria-hidden="true" className="shrink-0" />
      <span className="min-w-0 flex-1 truncate">{placeholder}</span>
      {key && platform ? (
        <Kbd
          aria-hidden="true"
          className={cn(
            "hidden gap-0.5 normal-case tracking-normal sm:inline-flex",
            size === "lg" ? "h-7 px-2 text-xs" : "px-1.5",
          )}
        >
          {platform === "apple" ? (
            <>
              <span>{modifier}</span>
              {key.toUpperCase()}
            </>
          ) : (
            `${modifier} ${key.toUpperCase()}`
          )}
        </Kbd>
      ) : null}
    </button>
  );
}

export { SearchTrigger, searchTriggerVariants };
