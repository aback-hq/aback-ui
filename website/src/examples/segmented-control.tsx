"use client";

import { useState } from "react";
import { IconDeviceDesktop, IconLayoutGrid, IconList, IconMoon, IconSun } from "@tabler/icons-react";

import { SegmentedControl, SegmentedControlItem } from "@/components/ui/segmented-control";

const prices = { monthly: "$12 per month", yearly: "$120 per year" } as const;

export function SegmentedControlExample() {
  const [period, setPeriod] = useState<keyof typeof prices>("monthly");

  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p id="billing-label" className="text-sm font-medium text-foreground">
          Billing period
        </p>
        <SegmentedControl
          aria-labelledby="billing-label"
          value={period}
          onValueChange={(value) => setPeriod(value as keyof typeof prices)}
        >
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
          <SegmentedControlItem value="yearly">Yearly</SegmentedControlItem>
        </SegmentedControl>
        <p className="text-sm tabular-nums text-muted-foreground">{prices[period]}, example pricing</p>
      </div>

      <SegmentedControl aria-label="Theme" defaultValue="system" fullWidth>
        <SegmentedControlItem value="light">
          <IconSun aria-hidden="true" />
          Light
        </SegmentedControlItem>
        <SegmentedControlItem value="dark">
          <IconMoon aria-hidden="true" />
          Dark
        </SegmentedControlItem>
        <SegmentedControlItem value="system">
          <IconDeviceDesktop aria-hidden="true" />
          System
        </SegmentedControlItem>
      </SegmentedControl>

      <SegmentedControl aria-label="View" defaultValue="grid" size="sm">
        <SegmentedControlItem value="grid" aria-label="Grid">
          <IconLayoutGrid aria-hidden="true" />
        </SegmentedControlItem>
        <SegmentedControlItem value="list" aria-label="List">
          <IconList aria-hidden="true" />
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
