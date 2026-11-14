import type { ReactElement } from "react";
import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { ThemeScript, ThemeToggle, useTheme } from "./theme-toggle.js";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("switches the dark class, stores the choice, and renames itself", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Switch to dark theme" }));
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "Switch to light theme" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Switch to light theme" }));
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("keeps every toggle on the page in sync", async () => {
    const user = userEvent.setup();
    render(
      <>
        <ThemeToggle data-testid="a" />
        <ThemeToggle data-testid="b" />
      </>,
    );
    await user.click(screen.getByTestId("a"));
    expect(screen.getByTestId("b")).toHaveAccessibleName("Switch to light theme");
  });

  it("uses a custom storage key", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle storageKey="docs-theme" />);
    await user.click(screen.getByRole("button"));
    expect(localStorage.getItem("docs-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBeNull();
  });

  it("exposes the preference through useTheme", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("system");
    act(() => result.current.setTheme("dark"));
    expect(result.current.theme).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");
  });

  it("renders a light, hydration-safe label on the server", () => {
    const html = renderToString(<ThemeToggle />);
    expect(html).toContain('aria-label="Switch to dark theme"');
  });

  it("escapes the storage key inside the inline script", () => {
    const html = renderToString(<ThemeScript storageKey={'x"</script><script>alert(1)'} nonce="abc" />);
    expect(html).not.toContain("</script><script>");
    expect(html).toContain('nonce="abc"');
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<ThemeToggle />);
    await expectNoA11yViolations(container);
  });
});

describe("ThemeScript defaultTheme", () => {
  let systemListener: (() => void) | null = null;

  /** Pretends the operating system is in dark mode. */
  function preferDark() {
    vi.spyOn(window, "matchMedia").mockImplementation(
      (query: string) =>
        ({
          matches: true,
          media: query,
          addEventListener: (_type: string, listener: () => void) => {
            systemListener = listener;
          },
          removeEventListener: () => {},
        }) as unknown as MediaQueryList,
    );
  }

  /** Runs the inline script the way a browser would before the first paint. */
  function runScript(element: ReactElement) {
    const html = renderToString(element);
    const code = /<script[^>]*>([\s\S]*)<\/script>/.exec(html)?.[1] ?? "";
    new Function(code)();
  }

  function reset() {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    document.documentElement.removeAttribute("data-default-theme");
    systemListener = null;
  }

  beforeEach(reset);
  afterEach(() => {
    vi.restoreAllMocks();
    reset();
  });

  it("follows the system by default", () => {
    preferDark();
    runScript(<ThemeScript />);
    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement).not.toHaveAttribute("data-default-theme");
  });

  it("starts a first visit in the default theme, whatever the system says", () => {
    preferDark();
    runScript(<ThemeScript defaultTheme="light" />);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(document.documentElement).toHaveAttribute("data-default-theme", "light");

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
    expect(result.current.resolvedTheme).toBe("light");
  });

  it("keeps the default when the system setting changes", () => {
    preferDark();
    runScript(<ThemeScript defaultTheme="light" />);
    render(<ThemeToggle />);
    act(() => systemListener?.());
    expect(document.documentElement).not.toHaveClass("dark");
    expect(screen.getByRole("button")).toHaveAccessibleName("Switch to dark theme");
  });

  it("lets a stored choice win over the default", () => {
    localStorage.setItem("theme", "dark");
    runScript(<ThemeScript defaultTheme="light" />);
    expect(document.documentElement).toHaveClass("dark");

    localStorage.setItem("theme", "system");
    preferDark();
    runScript(<ThemeScript defaultTheme="light" />);
    expect(document.documentElement).toHaveClass("dark");
  });

  it("can start in dark", () => {
    runScript(<ThemeScript defaultTheme="dark" />);
    expect(document.documentElement).toHaveClass("dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("ignores a default that is not a theme", () => {
    preferDark();
    runScript(<ThemeScript defaultTheme={'x");alert(1);("' as never} />);
    expect(document.documentElement).toHaveClass("dark");
    expect(document.documentElement).not.toHaveAttribute("data-default-theme");
  });
});
