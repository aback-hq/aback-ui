import { ArrowLink } from "@/components/ui/arrow-link";

export function ArrowLinkExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">On this site and on another one:</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <ArrowLink href="/docs/components">View all components</ArrowLink>
          <ArrowLink href="https://github.com/devvrat-hans/aback-ui" external>
            Source on GitHub
          </ArrowLink>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">The editorial tone, for the last line of a section:</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <ArrowLink href="/blog" tone="foreground">
            Read the blog
          </ArrowLink>
          <ArrowLink href="/docs/changelog" tone="foreground" size="sm">
            Changelog
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
