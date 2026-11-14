"use client";

import * as React from "react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "../lib/utils";

const itemSizes = {
  sm: "h-6.5 px-2.5 text-xs",
  default: "h-7.5 px-3 text-sm",
} as const;

type SegmentedControlSize = keyof typeof itemSizes;

const SizeContext = React.createContext<SegmentedControlSize>("default");

export interface SegmentedControlProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  size?: SegmentedControlSize;
  /** Stretch to the container and share the width equally between the options. */
  fullWidth?: boolean;
}

/**
 * One choice from two to five short options, shown side by side: a billing
 * period, a view mode, a theme. It is a radio group, so the arrow keys move
 * the choice, Tab leaves it, and a `name` submits the value with a form.
 *
 * Name it with `aria-label` or `aria-labelledby`. A `<label>` cannot name a
 * group.
 */
function SegmentedControl({
  className,
  size = "default",
  fullWidth = false,
  orientation = "horizontal",
  ...props
}: SegmentedControlProps) {
  return (
    <SizeContext.Provider value={size}>
      <RadioGroupPrimitive.Root
        data-slot="segmented-control"
        data-size={size}
        data-full-width={fullWidth ? "" : undefined}
        orientation={orientation}
        className={cn(
          "group/segmented gap-0.5 border border-input bg-muted/50 p-0.5",
          fullWidth ? "flex w-full" : "inline-flex w-fit max-w-full",
          className,
        )}
        {...props}
      />
    </SizeContext.Provider>
  );
}

function SegmentedControlItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const size = React.useContext(SizeContext);
  return (
    <RadioGroupPrimitive.Item
      data-slot="segmented-control-item"
      className={cn(
        "inline-flex min-w-0 items-center justify-center gap-1.5 border border-transparent font-medium whitespace-nowrap text-muted-foreground outline-none",
        "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:text-foreground",
        "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        // The chosen option is raised: a surface, a border, and a shadow, not colour alone.
        "data-[state=checked]:border-border data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow-xs",
        "group-data-[full-width]/segmented:flex-1",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        itemSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { SegmentedControl, SegmentedControlItem };
