import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { ArrowLink } from "./arrow-link.js";

describe("ArrowLink", () => {
  it("renders a link to a page on this site with a decorative arrow", () => {
    const { container } = render(<ArrowLink href="/docs">Read the docs</ArrowLink>);

    const link = screen.getByRole("link", { name: "Read the docs" });
    expect(link).toHaveAttribute("href", "/docs");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("opens an external link in a new tab and says so", () => {
    render(
      <ArrowLink href="https://example.com" external>
        Visit the site
      </ArrowLink>,
    );

    const link = screen.getByRole("link", { name: /^Visit the site\s*\(opens in a new tab\)$/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("data-external");
  });

  it("keeps a target and rel the caller sets", () => {
    render(
      <ArrowLink href="https://example.com" external target="docs" rel="noopener">
        Docs
      </ArrowLink>,
    );

    const link = screen.getByRole("link", { name: /Docs/ });
    expect(link).toHaveAttribute("target", "docs");
    expect(link).toHaveAttribute("rel", "noopener");
  });

  it("renders its child with asChild and keeps the arrow inside it", () => {
    render(
      <ArrowLink asChild tone="foreground">
        <a href="/blog">All posts</a>
      </ArrowLink>,
    );

    const link = screen.getByRole("link", { name: "All posts" });
    expect(link).toHaveAttribute("data-slot", "arrow-link");
    expect(link.querySelector("svg")).not.toBeNull();
    expect(link.className).toContain("border-b");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(
      <p>
        <ArrowLink href="/docs">Read the docs</ArrowLink>{" "}
        <ArrowLink href="https://example.com" external>
          GitHub
        </ArrowLink>
      </p>,
    );
    await expectNoA11yViolations(container);
  });
});
