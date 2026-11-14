import * as React from "react";

import { cn } from "../lib/utils";

export type StatusTone = "success" | "brand" | "warning" | "danger" | "neutral";
export type StatusShape = "solid" | "half" | "outline";

// Each tone sets one variable, and the shape decides how the mark uses it.
const toneColor: Record<StatusTone, string> = {
  success: "[--status:var(--success)]",
  brand: "[--status:var(--brand-icon)]",
  warning: "[--status:var(--warning)]",
  danger: "[--status:var(--danger)]",
  neutral: "[--status:var(--muted-foreground)]",
};

const shapeClass: Record<StatusShape, string> = {
  solid: "bg-[var(--status)]",
  half: "border border-[var(--status)] bg-[linear-gradient(90deg,var(--status)_50%,transparent_50%)]",
  outline: "border border-[var(--status)]",
};

export interface StatusIndicatorProps extends React.ComponentProps<"span"> {
  /** The colour of the mark. Say what it means in the label too. */
  tone?: StatusTone;
  /**
   * The shape of the mark: `solid` for done or live, `half` for in progress,
   * `outline` for planned or not started. The shape carries the state for
   * readers who cannot tell the colours apart.
   */
  shape?: StatusShape;
  /** Pulses the mark for something happening now. Stops under reduced motion. */
  pulse?: boolean;
  /** The status in words, such as "Live" or "In review". Required: the mark alone is decoration. */
  children: React.ReactNode;
}

/**
 * A square status mark and a word, for dense lists and tables where a badge
 * is too loud: "Live", "Building", "Planned". The mark is hidden from
 * assistive technology, so the word is what is read.
 */
function StatusIndicator({
  tone = "neutral",
  shape = "solid",
  pulse = false,
  className,
  children,
  ...props
}: StatusIndicatorProps) {
  return (
    <span
      data-slot="status-indicator"
      data-tone={tone}
      data-shape={shape}
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium leading-5 whitespace-nowrap text-foreground",
        toneColor[tone],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        data-slot="status-indicator-mark"
        className={cn(
          "size-2 shrink-0",
          shapeClass[shape],
          pulse && "animate-pulse motion-reduce:animate-none",
        )}
      />
      {children}
    </span>
  );
}

export { StatusIndicator };
