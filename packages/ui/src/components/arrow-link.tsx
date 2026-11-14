import * as React from "react";
import { Slot } from "radix-ui";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const arrowLinkVariants = cva(
  [
    "group/arrow-link inline-flex w-fit items-center gap-1.5 font-medium outline-none",
    "transition-colors duration-200",
    "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ],
  {
    variants: {
      tone: {
        /** Link colour, underlined on hover. For links in running UI. */
        link: "text-link underline-offset-4 hover:text-link-hover hover:underline",
        /** Ink text over a hairline rule that darkens on hover. For editorial pages. */
        foreground: "border-b border-separator pb-0.5 text-foreground hover:border-foreground",
      },
      size: {
        sm: "text-xs [&_svg]:size-3",
        default: "text-sm [&_svg]:size-3.5",
        lg: "text-base [&_svg]:size-4",
      },
    },
    defaultVariants: {
      tone: "link",
      size: "default",
    },
  },
);

export interface ArrowLinkProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof arrowLinkVariants> {
  /**
   * A link that leaves the site. The arrow points up and out, the link opens
   * in a new tab with `rel="noopener noreferrer"`, and screen readers hear
   * "opens in a new tab".
   */
  external?: boolean;
  /** Render the child, such as a router `Link`, instead of an anchor. */
  asChild?: boolean;
}

/**
 * A text link with an arrow that says where it goes: right for a page on this
 * site, up and out for another site. Use it for "View all", "Read more", and
 * the last line of a section.
 */
function ArrowLink({
  external = false,
  asChild = false,
  tone = "link",
  size = "default",
  className,
  children,
  target,
  rel,
  ...props
}: ArrowLinkProps) {
  const Comp = asChild ? Slot.Root : "a";
  const Arrow = external ? IconArrowUpRight : IconArrowRight;

  return (
    <Comp
      data-slot="arrow-link"
      data-external={external ? "" : undefined}
      className={cn(arrowLinkVariants({ tone, size }), className)}
      target={external ? (target ?? "_blank") : target}
      rel={external ? (rel ?? "noopener noreferrer") : rel}
      {...props}
    >
      {asChild ? <Slot.Slottable>{children}</Slot.Slottable> : children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      <Arrow
        aria-hidden="true"
        className={cn(
          "shrink-0 transition-transform duration-200 motion-reduce:transition-none",
          external
            ? "group-hover/arrow-link:-translate-y-0.5 group-hover/arrow-link:translate-x-0.5"
            : "group-hover/arrow-link:translate-x-0.5",
        )}
      />
    </Comp>
  );
}

export { ArrowLink, arrowLinkVariants };
