"use client";

import * as React from "react";
import { Slot } from "radix-ui";

import { cn } from "../lib/utils";

/** How far the edge fade reaches into the row, in pixels. Matches `scroll-px-7`. */
const FADE = 28;

function setEdges(row: HTMLElement) {
  const max = row.scrollWidth - row.clientWidth;
  const start = row.scrollLeft > 1;
  const end = row.scrollLeft < max - 1;
  row.dataset.fade = start && end ? "both" : start ? "start" : end ? "end" : "none";
}

function centerCurrent(row: HTMLElement) {
  const current = row.querySelector<HTMLElement>('[aria-current="page"]');
  if (!current || row.scrollWidth <= row.clientWidth) return;
  const offset =
    current.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft;
  row.scrollLeft = Math.max(0, offset - (row.clientWidth - current.offsetWidth) / 2);
}

/**
 * A row of links to sibling pages: the sections of a settings area, the
 * drills of a course, the tabs of a profile. It is navigation, not a tab
 * panel: each link loads a page, and the current one has
 * `aria-current="page"`.
 *
 * On a narrow screen the row scrolls sideways without a scrollbar. An edge
 * that can still scroll fades out, and the current link is scrolled into the
 * middle, so a reader on the fifth page sees where they are.
 */
function TabNav({ className, children, ...props }: React.ComponentProps<"nav">) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const row = ref.current;
    if (!row) return;

    centerCurrent(row);
    setEdges(row);

    const onScroll = () => setEdges(row);
    // A link reached with the keyboard can stop under the fade; bring it clear.
    const onFocusIn = (event: FocusEvent) => {
      const link = event.target instanceof HTMLElement ? event.target : null;
      if (!link || link === row) return;
      const box = row.getBoundingClientRect();
      const item = link.getBoundingClientRect();
      if (item.left < box.left + FADE || item.right > box.right - FADE) {
        link.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    };

    const resize = new ResizeObserver(() => setEdges(row));
    resize.observe(row);
    if (row.firstElementChild) resize.observe(row.firstElementChild);

    // A client-side navigation moves aria-current without remounting the row.
    const mutation = new MutationObserver(() => {
      centerCurrent(row);
      setEdges(row);
    });
    mutation.observe(row, { subtree: true, attributes: true, attributeFilter: ["aria-current"] });

    row.addEventListener("scroll", onScroll, { passive: true });
    row.addEventListener("focusin", onFocusIn);
    return () => {
      row.removeEventListener("scroll", onScroll);
      row.removeEventListener("focusin", onFocusIn);
      resize.disconnect();
      mutation.disconnect();
    };
  }, []);

  return (
    <nav
      ref={ref}
      data-slot="tab-nav"
      data-fade="none"
      className={cn(
        "relative scroll-px-7 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "data-[fade=start]:[mask-image:linear-gradient(to_right,transparent,black_28px)]",
        "data-[fade=end]:[mask-image:linear-gradient(to_left,transparent,black_28px)]",
        "data-[fade=both]:[mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%-28px),transparent)]",
        className,
      )}
      {...props}
    >
      <div
        data-slot="tab-nav-list"
        className="flex w-max min-w-full gap-1 border-b border-border"
      >
        {children}
      </div>
    </nav>
  );
}

export interface TabNavLinkProps extends React.ComponentProps<"a"> {
  /** Marks the link as the page on screen: `aria-current="page"` and the underline. */
  active?: boolean;
  /** Render the child, such as a router `Link`, instead of an anchor. */
  asChild?: boolean;
}

function TabNavLink({
  active,
  asChild = false,
  className,
  "aria-current": ariaCurrent,
  ...props
}: TabNavLinkProps) {
  const Comp = asChild ? Slot.Root : "a";
  return (
    <Comp
      data-slot="tab-nav-link"
      aria-current={active ? "page" : ariaCurrent}
      className={cn(
        "-mb-px inline-flex h-10 shrink-0 items-center gap-1.5 border-b-2 border-transparent px-3 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none",
        "transition-colors duration-150 motion-reduce:transition-none",
        "hover:border-foreground/30 hover:text-foreground",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring",
        "aria-[current=page]:border-foreground aria-[current=page]:text-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

export { TabNav, TabNavLink };
