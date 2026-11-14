"use client";

import { useState } from "react";

import { TabNav, TabNavLink } from "@/components/ui/tab-nav";

const sections = ["Profile", "Account", "Notifications", "Billing", "Team", "Integrations", "Security"];

export function TabNavExample() {
  const [current, setCurrent] = useState("Billing");

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <TabNav aria-label="Settings">
        {sections.map((section) => (
          <TabNavLink
            key={section}
            href={`#${section.toLowerCase()}`}
            active={section === current}
            onClick={(event) => {
              // A real app navigates; this preview only moves the current page.
              event.preventDefault();
              setCurrent(section);
            }}
          >
            {section}
          </TabNavLink>
        ))}
      </TabNav>
      <p className="text-sm text-muted-foreground">
        Showing the <span className="font-medium text-foreground">{current}</span> page. On a narrow
        screen the row scrolls and fades at the edge that has more.
      </p>
    </div>
  );
}
