import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { TabNav, TabNavLink } from "./tab-nav.js";

function Example({ current = "/settings/profile" }: { current?: string }) {
  const links = [
    ["/settings/profile", "Profile"],
    ["/settings/billing", "Billing"],
    ["/settings/team", "Team"],
  ] as const;
  return (
    <TabNav aria-label="Settings">
      {links.map(([href, title]) => (
        <TabNavLink key={href} href={href} active={href === current}>
          {title}
        </TabNavLink>
      ))}
    </TabNav>
  );
}

describe("TabNav", () => {
  it("is named navigation with one link per page", () => {
    render(<Example />);

    const nav = screen.getByRole("navigation", { name: "Settings" });
    expect(within(nav).getAllByRole("link")).toHaveLength(3);
  });

  it("marks only the current page", () => {
    render(<Example current="/settings/billing" />);

    expect(screen.getByRole("link", { name: "Billing" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Profile" })).not.toHaveAttribute("aria-current");
  });

  it("keeps an aria-current the caller sets", () => {
    render(
      <TabNav aria-label="Steps">
        <TabNavLink href="#one" aria-current="step">
          One
        </TabNavLink>
      </TabNav>,
    );

    expect(screen.getByRole("link", { name: "One" })).toHaveAttribute("aria-current", "step");
  });

  it("renders a router link with asChild", () => {
    render(
      <TabNav aria-label="Profile">
        <TabNavLink asChild active>
          <a href="/me">Overview</a>
        </TabNavLink>
      </TabNav>,
    );

    const link = screen.getByRole("link", { name: "Overview" });
    expect(link).toHaveAttribute("data-slot", "tab-nav-link");
    expect(link).toHaveAttribute("aria-current", "page");
  });

  it("marks which edges fade, starting with none when nothing overflows", () => {
    render(<Example />);

    expect(screen.getByRole("navigation")).toHaveAttribute("data-fade", "none");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<Example />);
    await expectNoA11yViolations(container);
  });
});
