"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@aback-ui/ui";

import { site } from "@/data/site";

/**
 * The Aback mark and the Aback UI wordmark, in the Aback Tools lockup: the
 * blue mark carries the brand colour, and the wordmark sits in the text
 * colour, "Aback" in semibold and "UI" lighter, so the two read as one name.
 * The mark is the same 128px PNG Aback Tools and Aback Group ship.
 *
 * It links home. On the home page itself a click scrolls back to the top,
 * which a link to the current URL would not do.
 */
export function Logo({
  className,
  showText = true,
  size = "md",
}: {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
}) {
  const pathname = usePathname();
  const markSize = size === "sm" ? 28 : 34;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Leave new-tab and new-window clicks to the browser.
    if (pathname !== "/" || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    // The page's scroll-behavior decides smooth or instant, so reduced motion is respected.
    window.scrollTo({ top: 0 });
    if (window.location.hash) window.history.replaceState(null, "", "/");
  }
  const textSize = size === "sm" ? "text-[17px]" : "text-[19px]";

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label={showText ? undefined : `${site.name} home`}
      className={cn(
        "group flex items-center gap-1.5 text-foreground outline-none",
        "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <img
        src="/aback-logo-128.png"
        alt=""
        width={markSize}
        height={markSize}
        decoding="async"
        fetchPriority="high"
        className="shrink-0 object-contain transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      {showText ? (
        <span className={cn(textSize, "whitespace-nowrap leading-none tracking-[-0.02em]")}>
          <span className="font-semibold">Aback</span>{" "}
          <span className="font-normal text-foreground/55">UI</span>
        </span>
      ) : null}
    </Link>
  );
}
