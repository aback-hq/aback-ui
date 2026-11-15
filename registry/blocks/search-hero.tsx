"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { IconArrowRight } from "@tabler/icons-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SearchTrigger } from "@/components/ui/search-trigger";

export interface SearchHeroItem {
  title: string;
  href: string;
  description?: string;
  /** A decorative icon. It is hidden from assistive technology. */
  icon?: ReactNode;
  /** A CSS colour for the icon, such as the item's category colour. */
  accent?: string;
  /** The heading this item sits under in the search results, such as "Tools" or "Guides". */
  group?: string;
  /** Extra words that should find this item, such as "jpeg" for "PNG to JPG". */
  keywords?: string[];
}

export interface SearchHeroCategory {
  title: string;
  href: string;
  /** A short line under the title, such as "214 tools". */
  meta?: string;
  icon?: ReactNode;
  /** A CSS colour for the icon and the hover border. */
  accent?: string;
}

export interface SearchHeroBlockProps {
  /** The page's h1. */
  title: ReactNode;
  description?: ReactNode;
  searchPlaceholder?: string;
  /** Everything the search can find. The dialog filters and ranks it as the visitor types. */
  searchItems: SearchHeroItem[];
  /** Shown under the field as quick links, and in the dialog before anything is typed. */
  popular?: SearchHeroItem[];
  popularLabel?: string;
  /** A line under the quick links, such as a live count. Keep it true. */
  note?: ReactNode;
  categories?: SearchHeroCategory[];
  categoriesTitle?: string;
  /** A link beside the categories heading, such as "All 3,000 tools". */
  allLink?: { label: string; href: string };
  /**
   * Called with an item's href when it is chosen in the dialog. Pass your
   * router's push for client-side navigation; without it the browser
   * navigates.
   */
  onNavigate?: (href: string) => void;
}

/**
 * The top of a home or directory page whose main job is finding one thing:
 * an h1, one large search field that opens a search dialog (also on ⌘K or
 * Ctrl+K), popular shortcuts, and a grid of categories. It renders the
 * page's h1, so use it once.
 */
export function SearchHeroBlock({
  title,
  description,
  searchPlaceholder = "Search",
  searchItems,
  popular = [],
  popularLabel = "Popular:",
  note,
  categories = [],
  categoriesTitle = "Browse by category",
  allLink,
  onNavigate,
}: SearchHeroBlockProps) {
  const headingId = useId();
  const categoriesId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function go(href: string) {
    setOpen(false);
    setQuery("");
    if (onNavigate) onNavigate(href);
    else window.location.assign(href);
  }

  // Before anything is typed the dialog lists the popular items, so arrows and
  // Enter work straight away; once typed, every item is searched, by group.
  // Without popular items the dialog starts with everything.
  const showPopular = !query.trim() && popular.length > 0;
  const groups = new Map<string, SearchHeroItem[]>();
  for (const item of searchItems) {
    const group = item.group ?? "Results";
    groups.set(group, [...(groups.get(group) ?? []), item]);
  }

  function renderItem(item: SearchHeroItem, key: string) {
    return (
      <CommandItem
        key={key}
        value={`${item.title} ${item.href}`}
        keywords={[item.description ?? "", ...(item.keywords ?? [])]}
        onSelect={() => go(item.href)}
        className="gap-3 px-2.5"
      >
        {item.icon ? (
          <span
            aria-hidden="true"
            className="flex shrink-0 text-[var(--search-hero-accent,var(--brand-icon))] [&_svg]:size-[18px]"
            style={item.accent ? ({ "--search-hero-accent": item.accent } as CSSProperties) : undefined}
          >
            {item.icon}
          </span>
        ) : null}
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium text-foreground">{item.title}</span>
          {item.description ? (
            <span className="mt-0.5 block truncate text-xs text-muted-foreground">{item.description}</span>
          ) : null}
        </span>
      </CommandItem>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <section aria-labelledby={headingId} className="relative isolate px-4 pt-10 sm:pt-16">
        {/* A faint brand light behind the title. It has no edge, and it follows the theme. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-4 -bottom-24 -z-10 bg-[radial-gradient(ellipse_100%_42%_at_50%_34%,color-mix(in_oklch,var(--color-primary-500)_11%,transparent)_0%,color-mix(in_oklch,var(--color-primary-500)_6%,transparent)_45%,transparent_100%)]"
        />
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1
            id={headingId}
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl sm:leading-[1.04]"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}

          <SearchTrigger
            size="lg"
            placeholder={searchPlaceholder}
            onClick={() => setOpen(true)}
            className="mt-9 max-w-2xl"
          />

          {popular.length ? (
            <p className="mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              <span className="text-muted-foreground">{popularLabel}</span>
              {popular.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-medium text-foreground/80 outline-none transition-colors duration-200 hover:text-link focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.title}
                </a>
              ))}
            </p>
          ) : null}

          {note ? <div className="mt-6 flex min-h-5 items-center justify-center text-sm text-muted-foreground">{note}</div> : null}
        </div>
      </section>

      {categories.length ? (
        <section aria-labelledby={categoriesId} className="flex flex-col gap-5 px-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id={categoriesId} className="text-xl font-semibold tracking-tight text-foreground">
              {categoriesTitle}
            </h2>
            {allLink ? (
              <a
                href={allLink.href}
                className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {allLink.label}
                <IconArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            ) : null}
          </div>
          <ul className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <li key={category.href}>
                <Item variant="outline" align="center" accent={category.accent} className="h-full px-4 py-3.5" asChild>
                  <a href={category.href}>
                    {category.icon ? (
                      <ItemMedia variant="icon" aria-hidden="true">
                        {category.icon}
                      </ItemMedia>
                    ) : null}
                    <ItemContent className="gap-0.5">
                      <ItemTitle className="font-semibold leading-tight">{category.title}</ItemTitle>
                      {category.meta ? (
                        <ItemDescription className="text-xs leading-snug">{category.meta}</ItemDescription>
                      ) : null}
                    </ItemContent>
                  </a>
                </Item>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <CommandDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setQuery("");
        }}
        title="Search"
        description={searchPlaceholder}
        showCloseButton={false}
      >
        <CommandInput placeholder={searchPlaceholder} value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>No results. Try a shorter word.</CommandEmpty>
          {showPopular ? (
            <CommandGroup heading="Popular">
              {popular.map((item) => renderItem(item, `popular-${item.href}`))}
            </CommandGroup>
          ) : (
            [...groups].map(([group, items]) => (
              <CommandGroup key={group} heading={group}>
                {items.map((item) => renderItem(item, item.href))}
              </CommandGroup>
            ))
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
