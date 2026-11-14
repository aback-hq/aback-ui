import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { StatusIndicator } from "./status-indicator.js";

describe("StatusIndicator", () => {
  it("reads as its word, with the mark hidden", () => {
    const { container } = render(<StatusIndicator tone="success">Live</StatusIndicator>);

    const status = container.querySelector("[data-slot='status-indicator']")!;
    expect(status).toHaveTextContent("Live");
    expect(status).toHaveAttribute("data-tone", "success");
    expect(status).toHaveAttribute("data-shape", "solid");
    expect(container.querySelector("[data-slot='status-indicator-mark']")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("draws each shape differently", () => {
    render(
      <ul>
        <li>
          <StatusIndicator shape="solid">Done</StatusIndicator>
        </li>
        <li>
          <StatusIndicator shape="half">In progress</StatusIndicator>
        </li>
        <li>
          <StatusIndicator shape="outline">Planned</StatusIndicator>
        </li>
      </ul>,
    );

    const mark = (text: string) =>
      screen.getByText(text).querySelector("[data-slot='status-indicator-mark']")!;
    expect(mark("Done").className).toContain("bg-[var(--status)]");
    expect(mark("In progress").className).toContain("linear-gradient");
    expect(mark("Planned").className).toContain("border");
    expect(mark("Planned").className).not.toContain("bg-[var(--status)]");
  });

  it("pulses only when asked, and stops under reduced motion", () => {
    render(
      <StatusIndicator tone="brand" pulse>
        Deploying
      </StatusIndicator>,
    );

    const mark = screen.getByText("Deploying").querySelector("[data-slot='status-indicator-mark']")!;
    expect(mark).toHaveClass("animate-pulse", "motion-reduce:animate-none");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(
      <p>
        Status: <StatusIndicator tone="warning" shape="half">Building</StatusIndicator>
      </p>,
    );
    await expectNoA11yViolations(container);
  });
});
