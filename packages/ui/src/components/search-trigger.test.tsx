import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { SearchTrigger } from "./search-trigger.js";

describe("SearchTrigger", () => {
  it("is a button named by its placeholder that runs onClick", async () => {
    const onClick = vi.fn();
    render(<SearchTrigger placeholder="Search 3,000 tools" onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Search 3,000 tools" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("aria-keyshortcuts", "Meta+K Control+K");

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("opens from Ctrl+K and Cmd+K anywhere on the page", () => {
    const onClick = vi.fn();
    render(<SearchTrigger onClick={onClick} />);

    fireEvent.keyDown(document.body, { key: "k", ctrlKey: true });
    fireEvent.keyDown(document.body, { key: "K", metaKey: true });
    fireEvent.keyDown(document.body, { key: "k" });
    fireEvent.keyDown(document.body, { key: "k", ctrlKey: true, shiftKey: true });

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("lets only the first trigger answer the shortcut", () => {
    const first = vi.fn();
    const second = vi.fn();
    render(
      <>
        <SearchTrigger onClick={first} />
        <SearchTrigger onClick={second} />
      </>,
    );

    fireEvent.keyDown(document.body, { key: "k", ctrlKey: true });
    expect(first.mock.calls.length + second.mock.calls.length).toBe(1);
  });

  it("takes another letter, or no shortcut at all", () => {
    const onJ = vi.fn();
    const onNone = vi.fn();
    const { unmount } = render(<SearchTrigger shortcut="j" onClick={onJ} />);
    fireEvent.keyDown(document.body, { key: "j", ctrlKey: true });
    expect(onJ).toHaveBeenCalledTimes(1);
    unmount();

    render(<SearchTrigger shortcut={false} onClick={onNone} />);
    expect(screen.getByRole("button")).not.toHaveAttribute("aria-keyshortcuts");
    expect(document.querySelector("kbd")).toBeNull();
    fireEvent.keyDown(document.body, { key: "k", ctrlKey: true });
    expect(onNone).not.toHaveBeenCalled();
  });

  it("ignores the shortcut while disabled", () => {
    const onClick = vi.fn();
    render(<SearchTrigger disabled onClick={onClick} />);
    fireEvent.keyDown(document.body, { key: "k", ctrlKey: true });
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows the shortcut hint for the keyboard in use", () => {
    render(<SearchTrigger />);
    const hint = document.querySelector("kbd")!;
    expect(hint).toHaveAttribute("aria-hidden", "true");
    expect(hint.textContent).toMatch(/^(⌘K|Ctrl K)$/);
  });

  it("has a large size", () => {
    render(<SearchTrigger size="lg" />);
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "lg");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<SearchTrigger placeholder="Search documentation" />);
    await expectNoA11yViolations(container);
  });
});
