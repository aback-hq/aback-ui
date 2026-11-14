import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { expectNoA11yViolations } from "../test-utils/axe.js";
import { Countdown, formatCountdown } from "./countdown.js";

const START = new Date("2026-11-15T10:00:00Z").getTime();

describe("formatCountdown", () => {
  it("formats minutes and seconds, then hours", () => {
    expect(formatCountdown(0)).toBe("0:00");
    expect(formatCountdown(9_000)).toBe("0:09");
    expect(formatCountdown(65_000)).toBe("1:05");
    expect(formatCountdown(3_599_000)).toBe("59:59");
    expect(formatCountdown(3_600_000)).toBe("1:00:00");
    expect(formatCountdown(3_725_000)).toBe("1:02:05");
  });

  it("rounds partial seconds up and never goes below zero", () => {
    expect(formatCountdown(1_200)).toBe("0:02");
    expect(formatCountdown(-5_000)).toBe("0:00");
  });
});

describe("Countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(START);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows the time left in a named timer", () => {
    render(<Countdown endsAt={START + 5 * 60_000} label="Exam time left" />);

    const timer = screen.getByRole("timer", { name: "Exam time left" });
    expect(timer).toHaveTextContent("5:00");
    expect(timer).toHaveTextContent("5 minutes left");
  });

  it("ticks once a second", () => {
    render(<Countdown endsAt={START + 90_000} />);

    act(() => {
      vi.advanceTimersByTime(1_000);
    });
    expect(screen.getByRole("timer")).toHaveTextContent("1:29");

    act(() => {
      vi.advanceTimersByTime(29_000);
    });
    expect(screen.getByRole("timer")).toHaveTextContent("1:00");
  });

  it("turns to the warning state once and announces it", () => {
    const { container } = render(<Countdown endsAt={START + 70_000} warnBelow={60} />);

    expect(container.firstElementChild).toHaveAttribute("data-state", "running");
    expect(screen.getByRole("status")).toHaveTextContent("");

    act(() => {
      vi.advanceTimersByTime(10_000);
    });
    expect(container.firstElementChild).toHaveAttribute("data-state", "warning");
    expect(screen.getByRole("status")).toHaveTextContent("Time remaining: less than 1 minute left.");
  });

  it("calls onComplete once when the time runs out", () => {
    const onComplete = vi.fn();
    const { container } = render(<Countdown endsAt={START + 2_000} onComplete={onComplete} />);

    act(() => {
      vi.advanceTimersByTime(5_000);
    });

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(container.firstElementChild).toHaveAttribute("data-state", "done");
    expect(screen.getByRole("timer")).toHaveTextContent("0:00");
    expect(screen.getByRole("status")).toHaveTextContent("Time remaining: time is up.");
  });

  it("starts again for a new deadline", () => {
    const onComplete = vi.fn();
    const { rerender } = render(<Countdown endsAt={START + 1_000} onComplete={onComplete} />);

    act(() => {
      vi.advanceTimersByTime(2_000);
    });
    rerender(<Countdown endsAt={START + 4_000} onComplete={onComplete} />);
    expect(screen.getByRole("timer")).toHaveTextContent("0:02");

    act(() => {
      vi.advanceTimersByTime(3_000);
    });
    expect(onComplete).toHaveBeenCalledTimes(2);
  });

  it("accepts a Date and has no warning when warnBelow is 0", () => {
    const { container } = render(<Countdown endsAt={new Date(START + 10_000)} warnBelow={0} />);

    expect(container.firstElementChild).toHaveAttribute("data-state", "running");
    expect(screen.getByRole("timer")).toHaveTextContent("0:10");
  });

  it("has no detectable accessibility violations", async () => {
    vi.useRealTimers();
    const { container } = render(<Countdown endsAt={Date.now() + 120_000} />);
    await expectNoA11yViolations(container);
  });
});
