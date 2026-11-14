import * as React from "react";
import { Slot } from "radix-ui";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

import { cn } from "../lib/utils";

/**
 * A ruled list of destinations: one full-width link per line, a short note
 * under the label, and an arrow at the far edge. Use it where a section ends
 * in "where next", or for a short index of pages.
 */
function LinkList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="link-list"
      className={cn("flex flex-col border-t border-border", className)}
      {...props}
    />
  );
}

export interface LinkListItemProps extends Omit<React.ComponentProps<"a">, "title"> {
  /** A short note under the label. */
  description?: React.ReactNode;
  /** Opens in a new tab, with an up-and-out arrow and "opens in a new tab" for screen readers. */
  external?: boolean;
  /**
   * Render the child, such as a router `Link`, as the link. Its own content
   * is the label: keep it to text or one element.
   */
  asChild?: boolean;
  /** Props for the list item that wraps the link. */
  itemProps?: React.ComponentProps<"li">;
}

function LinkListItem({
  description,
  external = false,
  asChild = false,
  itemProps,
  className,
  children,
  target,
  rel,
  ...props
}: LinkListItemProps) {
  const Comp = asChild ? Slot.Root : "a";
  const Arrow = external ? IconArrowUpRight : IconArrowRight;
  const { className: itemClassName, ...itemRest } = itemProps ?? {};

  return (
    <li data-slot="link-list-item" className={cn("border-b border-border", itemClassName)} {...itemRest}>
      <Comp
        data-slot="link-list-link"
        className={cn(
          // A grid, so a router link's own text lands in the first cell and
          // the note and arrow find their places without a wrapper.
          "group/link-list grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 py-4 text-base font-medium leading-snug text-foreground outline-none",
          "transition-colors duration-200 hover:text-link",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring",
          className,
        )}
        target={external ? (target ?? "_blank") : target}
        rel={external ? (rel ?? "noopener noreferrer") : rel}
        {...props}
      >
        {asChild ? <Slot.Slottable>{children}</Slot.Slottable> : <span className="min-w-0">{children}</span>}
        {description ? (
          <span className="col-start-1 row-start-2 mt-0.5 text-sm font-normal text-muted-foreground">
            {description}
          </span>
        ) : null}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        <Arrow
          aria-hidden="true"
          className={cn(
            "col-start-2 row-span-2 row-start-1 size-4 shrink-0 self-center text-muted-foreground",
            "transition-transform duration-200 group-hover/link-list:text-link motion-reduce:transition-none",
            external
              ? "group-hover/link-list:-translate-y-0.5 group-hover/link-list:translate-x-0.5"
              : "group-hover/link-list:translate-x-1",
          )}
        />
      </Comp>
    </li>
  );
}

export { LinkList, LinkListItem };
