"use client";

import { useState } from "react";
import { IconFileTypePdf, IconPhoto, IconTypography } from "@tabler/icons-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchTrigger } from "@/components/ui/search-trigger";

const tools = [
  { title: "Merge PDF", icon: IconFileTypePdf },
  { title: "Compress PDF", icon: IconFileTypePdf },
  { title: "PNG to JPG", icon: IconPhoto },
  { title: "Word counter", icon: IconTypography },
];

export function SearchTriggerExample() {
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);

  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      {/* ⌘K already opens this site's own search, so the example listens for ⌘J. */}
      <SearchTrigger shortcut="j" placeholder="Search tools" onClick={() => setOpen(true)} className="max-w-xs" />
      <SearchTrigger
        size="lg"
        shortcut={false}
        placeholder="Search 175 tools"
        onClick={() => setOpen(true)}
      />
      <p className="text-sm text-muted-foreground" aria-live="polite">
        {chosen ? (
          <>
            You chose <span className="font-medium text-foreground">{chosen}</span>.
          </>
        ) : (
          "Press ⌘J or Ctrl+J, or click either field."
        )}
      </p>

      <CommandDialog open={open} onOpenChange={setOpen} title="Search tools" description="Find an example tool." showCloseButton={false}>
        <CommandInput placeholder="Search tools" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Example tools">
            {tools.map(({ title, icon: Icon }) => (
              <CommandItem
                key={title}
                onSelect={() => {
                  setChosen(title);
                  setOpen(false);
                }}
              >
                <Icon aria-hidden="true" />
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
