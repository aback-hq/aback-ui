import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./item.js";

describe("Item", () => {
  it("renders media, title, and description as one row", () => {
    const { container } = render(
      <Item>
        <ItemMedia>
          <svg aria-hidden="true" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle as="h3">Runs in your browser</ItemTitle>
          <ItemDescription>Files never leave your device.</ItemDescription>
        </ItemContent>
      </Item>,
    );

    const item = container.querySelector("[data-slot='item']")!;
    expect(item.tagName).toBe("DIV");
    expect(item).toHaveAttribute("data-variant", "default");
    expect(screen.getByRole("heading", { level: 3, name: "Runs in your browser" })).toBeInTheDocument();
    expect(screen.getByText("Files never leave your device.")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='item-media']")).toHaveClass("size-10");
    expect(container.querySelector("[data-slot='item-media']")!.className).toContain("var(--brand-chip)");
  });

  it("does not make the title a heading unless asked", () => {
    render(
      <Item>
        <ItemContent>
          <ItemTitle>report.pdf</ItemTitle>
        </ItemContent>
      </Item>,
    );

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.getByText("report.pdf").tagName).toBe("DIV");
  });

  it("becomes a link with asChild and keeps one accessible name", () => {
    render(
      <Item variant="outline" asChild>
        <a href="/tools/image-resizer">
          <ItemContent>
            <ItemTitle>Image resizer</ItemTitle>
            <ItemDescription>Resize a photo to exact pixels.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <svg aria-hidden="true" />
          </ItemActions>
        </a>
      </Item>,
    );

    const link = screen.getByRole("link", { name: /Image resizer/ });
    expect(link).toHaveAttribute("href", "/tools/image-resizer");
    expect(link).toHaveAttribute("data-slot", "item");
    expect(link).toHaveClass("border", "bg-card", "p-4");
  });

  it("keeps actions operable inside a static row", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(
      <Item variant="muted" size="sm" align="center">
        <ItemContent>
          <ItemTitle>holiday.png</ItemTitle>
          <ItemDescription>2.4 MB</ItemDescription>
        </ItemContent>
        <ItemActions>
          <button type="button" onClick={onRemove}>
            Remove holiday.png
          </button>
        </ItemActions>
      </Item>,
    );

    await user.click(screen.getByRole("button", { name: "Remove holiday.png" }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("supports the bare icon and image media variants", () => {
    const { container } = render(
      <>
        <Item>
          <ItemMedia variant="icon">
            <svg aria-hidden="true" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Batch convert</ItemTitle>
          </ItemContent>
        </Item>
        <Item>
          <ItemMedia variant="image">
            <img src="/logo.png" alt="Aback Launch" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Aback Launch</ItemTitle>
          </ItemContent>
        </Item>
      </>,
    );

    const media = container.querySelectorAll("[data-slot='item-media']");
    expect(media[0]).toHaveAttribute("data-variant", "icon");
    expect(media[0]!.className).not.toContain("--brand-chip");
    expect(media[1]).toHaveAttribute("data-variant", "image");
    expect(screen.getByRole("img", { name: "Aback Launch" })).toBeInTheDocument();
  });

  it("takes an accent colour for the media and hover, and keeps the caller's style", () => {
    const { container } = render(
      <Item variant="outline" accent="var(--danger)" style={{ minHeight: 40 }} asChild>
        <a href="/tools/pdf">
          <ItemMedia variant="icon">
            <svg aria-hidden="true" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>PDF</ItemTitle>
          </ItemContent>
        </a>
      </Item>,
    );

    const item = container.querySelector("[data-slot='item']") as HTMLElement;
    expect(item.tagName).toBe("A");
    expect(item).toHaveAttribute("data-accent", "");
    expect(item.style.getPropertyValue("--item-accent")).toBe("var(--danger)");
    expect(item.style.minHeight).toBe("40px");
    expect(item.className).toContain("--item-accent-border");
    expect(container.querySelector("[data-slot='item-media']")!.className).toContain("var(--item-accent");
  });

  it("sets no accent variables without an accent", () => {
    const { container } = render(<Item>Plain</Item>);
    const item = container.querySelector("[data-slot='item']") as HTMLElement;
    expect(item).not.toHaveAttribute("data-accent");
    expect(item.style.getPropertyValue("--item-accent")).toBe("");
    expect(item.className).not.toContain("--item-accent-border:");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(
      <ul>
        <Item asChild>
          <li>
            <ItemMedia>
              <svg aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle as="h3">No upload</ItemTitle>
              <ItemDescription>Processing happens on your device.</ItemDescription>
            </ItemContent>
          </li>
        </Item>
        <li>
          <Item variant="outline" asChild>
            <a href="/guides">
              <ItemContent>
                <ItemTitle>Guides</ItemTitle>
                <ItemDescription>Step by step walkthroughs.</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        </li>
      </ul>,
    );

    await expectNoA11yViolations(container);
  });
});
