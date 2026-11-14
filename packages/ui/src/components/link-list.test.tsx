import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { LinkList, LinkListItem } from "./link-list.js";

function Example() {
  return (
    <LinkList aria-label="Where next">
      <LinkListItem href="/docs/installation" description="Add the theme and a first component.">
        Installation
      </LinkListItem>
      <LinkListItem href="https://github.com/example" external>
        Source on GitHub
      </LinkListItem>
      <LinkListItem asChild description="Every component.">
        <a href="/docs/components">Components</a>
      </LinkListItem>
    </LinkList>
  );
}

describe("LinkList", () => {
  it("renders one list item and one link per destination", () => {
    render(<Example />);

    const list = screen.getByRole("list", { name: "Where next" });
    expect(within(list).getAllByRole("listitem")).toHaveLength(3);
    expect(within(list).getAllByRole("link")).toHaveLength(3);
  });

  it("puts the note inside the link, so it is part of the link's name", () => {
    render(<Example />);

    const link = screen.getByRole("link", { name: /Installation/ });
    expect(link).toHaveAttribute("href", "/docs/installation");
    expect(link).toHaveTextContent("Add the theme and a first component.");
  });

  it("opens an external destination in a new tab and says so", () => {
    render(<Example />);

    const link = screen.getByRole("link", { name: /Source on GitHub/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveTextContent("(opens in a new tab)");
  });

  it("renders its child as the link with asChild", () => {
    render(<Example />);

    const link = screen.getByRole("link", { name: /Components/ });
    expect(link).toHaveAttribute("data-slot", "link-list-link");
    expect(link).toHaveTextContent("Every component.");
    expect(link.querySelector("svg")).not.toBeNull();
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<Example />);
    await expectNoA11yViolations(container);
  });
});
