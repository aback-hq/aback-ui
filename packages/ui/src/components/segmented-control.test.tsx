import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { SegmentedControl, SegmentedControlItem } from "./segmented-control.js";

function Example(props: Partial<React.ComponentProps<typeof SegmentedControl>>) {
  return (
    <SegmentedControl aria-label="Billing period" defaultValue="monthly" {...props}>
      <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      <SegmentedControlItem value="yearly">Yearly</SegmentedControlItem>
      <SegmentedControlItem value="lifetime" disabled>
        Lifetime
      </SegmentedControlItem>
    </SegmentedControl>
  );
}

describe("SegmentedControl", () => {
  it("is a named radio group with the chosen option checked", () => {
    render(<Example />);

    expect(screen.getByRole("radiogroup", { name: "Billing period" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Monthly" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "Yearly" })).toHaveAttribute("aria-checked", "false");
  });

  it("changes the choice on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);

    await user.click(screen.getByRole("radio", { name: "Yearly" }));

    expect(onValueChange).toHaveBeenCalledWith("yearly");
    expect(screen.getByRole("radio", { name: "Yearly" })).toHaveAttribute("aria-checked", "true");
  });

  it("moves the choice with the arrow keys and skips disabled options", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);

    await user.tab();
    expect(screen.getByRole("radio", { name: "Monthly" })).toHaveFocus();

    // Radix moves focus on the next tick and checks the option only while the
    // arrow key is still down, so hold it the way a person does.
    await user.keyboard("{ArrowRight>}");
    await waitFor(() => expect(screen.getByRole("radio", { name: "Yearly" })).toHaveFocus());
    await user.keyboard("{/ArrowRight}");
    expect(onValueChange).toHaveBeenLastCalledWith("yearly");

    await user.keyboard("{ArrowRight>}");
    await waitFor(() => expect(screen.getByRole("radio", { name: "Monthly" })).toHaveFocus());
    await user.keyboard("{/ArrowRight}");
    expect(onValueChange).toHaveBeenLastCalledWith("monthly");
  });

  it("is one tab stop", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Example />
        <button type="button">After</button>
      </>,
    );

    await user.tab();
    await user.tab();
    expect(screen.getByRole("button", { name: "After" })).toHaveFocus();
  });

  it("submits its value with a native form", () => {
    const { container } = render(
      <form>
        <Example name="period" defaultValue="yearly" />
      </form>,
    );

    expect(new FormData(container.querySelector("form")!).get("period")).toBe("yearly");
  });

  it("stretches the options with fullWidth", () => {
    render(<Example fullWidth size="sm" />);

    const group = screen.getByRole("radiogroup");
    expect(group).toHaveAttribute("data-full-width");
    expect(group).toHaveClass("w-full");
    expect(screen.getByRole("radio", { name: "Monthly" })).toHaveClass("h-6.5");
  });

  it("has no detectable accessibility violations", async () => {
    const { container } = render(<Example />);
    await expectNoA11yViolations(container);
  });
});
