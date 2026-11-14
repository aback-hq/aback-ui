import { LinkList, LinkListItem } from "@/components/ui/link-list";

export function LinkListExample() {
  return (
    <nav aria-label="Where next" className="w-full max-w-lg">
      <LinkList>
        <LinkListItem href="/docs/installation" description="Add the theme and your first component.">
          Installation
        </LinkListItem>
        <LinkListItem href="/docs/theming" description="Override the colour roles for your brand.">
          Theming
        </LinkListItem>
        <LinkListItem
          href="https://github.com/devvrat-hans/aback-ui"
          description="Issues, discussions, and the source."
          external
        >
          GitHub
        </LinkListItem>
      </LinkList>
    </nav>
  );
}
