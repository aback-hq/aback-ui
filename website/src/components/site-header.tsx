"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconBook,
  IconBox,
  IconBrandGithub,
  IconLayoutGrid,
  IconPalette,
  IconPencil,
  IconTool,
  type Icon,
} from "@tabler/icons-react";

import { Button, ThemeToggle, cn } from "@aback-ui/ui";

import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { SearchDialog } from "@/components/search-dialog";
import { mainNav, site } from "@/data/site";
import { searchItems } from "@/data/search";

const NAV_ICONS: Record<string, Icon> = {
  "/docs": IconBook,
  "/docs/components": IconBox,
  "/docs/blocks": IconLayoutGrid,
  "/themes": IconPalette,
  "/tools": IconTool,
  "/blog": IconPencil,
};

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-separator bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-page flex h-16 items-center gap-2">
        <MobileNav />
        <Logo className="mr-3 lg:mr-5" />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => {
            const active = link.exact
              ? pathname === link.href
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            const NavIcon = NAV_ICONS[link.href];

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  // Icon and label in a 36px box, after the Aback PDF navbar: the
                  // current section is tinted as a whole instead of underlined.
                  // Its label uses the link blue, which keeps 4.5:1 on the tint.
                  "flex h-9 items-center gap-1.5 px-3 text-sm font-medium transition-colors duration-150",
                  "outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
                  active
                    ? "bg-primary/10 text-link"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {/* Six links share the bar with the search field, so the icons
                    only show where there is room for them. */}
                {NavIcon ? <NavIcon aria-hidden="true" className="hidden size-4 shrink-0 xl:block" /> : null}
                {link.title}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <SearchDialog items={searchItems} />
          <span aria-hidden="true" className="mx-1.5 hidden h-5 w-px bg-border sm:block" />
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" asChild>
            <a
              href={site.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aback UI on GitHub (opens in a new tab)"
            >
              <IconBrandGithub aria-hidden="true" />
            </a>
          </Button>
          <ThemeToggle transition="reveal" />
        </div>
      </div>
    </header>
  );
}
