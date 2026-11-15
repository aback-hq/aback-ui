"use client";

import { SearchTrigger } from "@aback-ui/ui";

import { OPEN_SEARCH_EVENT } from "@/components/search-dialog";

/**
 * The large search field in the home hero. It opens the header's search
 * dialog, which already owns ⌘K, so this field binds no shortcut of its own.
 */
export function HomeSearch({ placeholder, className }: { placeholder: string; className?: string }) {
  return (
    <SearchTrigger
      size="lg"
      shortcut={false}
      placeholder={placeholder}
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SEARCH_EVENT))}
    />
  );
}
