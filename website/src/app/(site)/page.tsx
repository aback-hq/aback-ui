import type { Metadata } from "next";
import Link from "next/link";
import {
  IconAccessible,
  IconArrowRight,
  IconArrowUpRight,
  IconCode,
  IconLayoutGrid,
  IconPalette,
} from "@tabler/icons-react";

import {
  ArrowLink,
  Badge,
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@aback-ui/ui";

import { BlockThumbnail } from "@/components/block-thumbnail";
import { Code } from "@/components/code";
import { FaqList } from "@/components/faq-list";
import { HomeSearch } from "@/components/home-search";
import { HomeShowcase } from "@/components/home-showcase";
import { JsonLd } from "@/components/json-ld";
import { PackageCommand } from "@/components/package-command";
import { blocks } from "@/data/blocks";
import { categoryAccents, categoryAnchor } from "@/data/category-accents";
import { componentGroups, components } from "@/data/component-catalog";
import { homeFaq } from "@/data/faq";
import { products } from "@/data/products";
import { getRoute } from "@/data/routes";
import { site } from "@/data/site";
import { cliSchema, faqSchema, librarySchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import uiPackage from "../../../../packages/ui/package.json";

export const metadata: Metadata = pageMetadata("/");

const initCommand = `${site.cli} init`;
const buttonCommand = `${site.cli} add button`;

const features = [
  {
    icon: IconAccessible,
    title: "Accessible by default",
    description:
      "Semantic HTML, Radix primitives for complex widgets, visible focus, and keyboard behavior covered by tests.",
  },
  {
    icon: IconCode,
    title: "Source you own",
    description:
      "One command copies the canonical file into your project. Edit it and keep it. There is no runtime to adopt.",
  },
  {
    icon: IconPalette,
    title: "Tokens with intent",
    description:
      "Aback Blue for actions and signals, cool neutrals, and one set of semantic variables for light and true black dark.",
  },
  {
    icon: IconLayoutGrid,
    title: "Square by design",
    description:
      "Zero radius, one-pixel hairlines, and depth from borders before shadow. A precise instrument.",
  },
];

const featuredBlockNames = ["search-hero", "pricing", "dashboard-shell", "users-table", "sign-in", "faq"];

const popularLinks = [
  { title: "Button", href: "/docs/components/button" },
  { title: "Dialog", href: "/docs/components/dialog" },
  { title: "Command", href: "/docs/components/command" },
  { title: "Data table", href: "/docs/blocks/users-table" },
  { title: "Search hero", href: "/docs/blocks/search-hero" },
];
const featuredBlocks = featuredBlockNames
  .map((name) => blocks.find((block) => block.name === name))
  .filter((block) => block !== undefined);

function SectionIntro({
  id,
  eyebrow,
  title,
  description,
  link,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-link">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
      {link ? (
        <ArrowLink asChild className="shrink-0">
          <Link href={link.href}>{link.label}</Link>
        </ArrowLink>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <JsonLd
        data={[
          webPageSchema(getRoute("/")!),
          librarySchema(),
          cliSchema(),
          faqSchema(homeFaq.map(({ question, answer }) => ({ question, answer }))),
        ]}
      />
      <section aria-labelledby="home-title" className="relative isolate overflow-hidden">
        {/* One faint horizontal streak of the action blue, wider than it is
            tall and with no edge, after the Aback Tools home page. It follows
            the theme because it mixes the theme's own --primary. */}
        <div aria-hidden="true" className="hero-streak pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem]" />
        <div className="container-page flex flex-col items-center pt-12 pb-16 text-center sm:pt-20 sm:pb-20">
          <Link
            href="/docs/changelog"
            className="group inline-flex items-center gap-2 border border-border bg-card py-1 pl-1 pr-3 text-xs font-medium text-foreground outline-none transition-colors duration-200 hover:border-primary-300 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:border-primary-700"
          >
            <Badge variant="brand">v{uiPackage.version}</Badge>
            What&apos;s new
            <IconArrowRight
              aria-hidden="true"
              className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>

          <h1
            id="home-title"
            className="mt-7 max-w-4xl text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.035em] text-balance text-foreground sm:text-[3.5rem] sm:leading-[1.04]"
          >
            The building blocks for serious applications.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            <span className="font-semibold text-foreground">{components.length}</span> accessible React
            components and <span className="font-semibold text-foreground">{blocks.length}</span> blocks,
            installed by your own CLI as source you own, or imported from npm.
          </p>

          <HomeSearch
            placeholder={`Search ${components.length} components, ${blocks.length} blocks, and the docs`}
            className="mt-9 max-w-2xl"
          />

          <p className="mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <span className="text-muted-foreground">Popular:</span>
            {popularLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-foreground/80 outline-none transition-colors duration-200 hover:text-link focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.title}
              </Link>
            ))}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/docs/installation">
                Get started
                <IconArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-card" asChild>
              <Link href="/docs/components">Browse components</Link>
            </Button>
          </div>

          <div className="mt-6 w-full max-w-xl text-left">
            <PackageCommand args={buttonCommand} className="bg-card" />
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["React 19", "Tailwind CSS v4", "Radix UI", "MIT licensed"].map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 bg-primary" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="browse-heading" className="border-b border-separator">
        <div className="container-page pb-16 lg:pb-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="browse-heading" className="text-xl font-semibold tracking-tight text-foreground">
              Browse by category
            </h2>
            <Link
              href="/docs/components"
              className="text-sm font-medium text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              All {components.length} components
            </Link>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {componentGroups.map((group) => {
              const { icon: Icon, accent } = categoryAccents[group.category];
              return (
                <li key={group.category}>
                  <Item variant="outline" align="center" accent={accent} className="h-full px-4 py-3.5" asChild>
                    <Link href={`/docs/components#${categoryAnchor(group.category)}`}>
                      <ItemMedia variant="icon" aria-hidden="true">
                        <Icon stroke={1.75} />
                      </ItemMedia>
                      <ItemContent className="gap-0.5">
                        <ItemTitle className="font-semibold leading-tight">{group.category}</ItemTitle>
                        <ItemDescription className="text-xs leading-snug">
                          {group.items.length} {group.items.length === 1 ? "component" : "components"}
                        </ItemDescription>
                      </ItemContent>
                    </Link>
                  </Item>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="showcase-heading" className="border-b border-separator bg-muted/30">
        <div className="container-page py-16 lg:py-24">
          <SectionIntro
            id="showcase-heading"
            eyebrow="Components"
            title="Real components with working state."
            description="Every card is the shipped source. Type in the fields, flip the switches, pick a date, drop a file. Nothing here is a screenshot."
            link={{ href: "/docs/components", label: `View all ${components.length} components` }}
          />
          <div className="mt-10">
            <HomeShowcase />
          </div>
        </div>
      </section>

      <section aria-labelledby="blocks-heading">
        <div className="container-page py-16 lg:py-24">
          <SectionIntro
            id="blocks-heading"
            eyebrow="Blocks"
            title="Whole sections, ready to own."
            description="Headers, pricing, sign-in, dashboards, tables, and FAQs assembled from the same components. Each one installs with its dependencies declared."
            link={{ href: "/docs/blocks", label: `Browse all ${blocks.length} blocks` }}
          />
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBlocks.map((block, index) => (
              <li key={block.name} className={index > 2 ? "hidden sm:block" : undefined}>
                <Link
                  href={`/docs/blocks/${block.name}`}
                  className="group flex flex-col gap-3 outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <div className="border border-border transition-colors duration-200 group-hover:border-primary-300 dark:group-hover:border-primary-700">
                    <BlockThumbnail slug={block.name} title={block.title} />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-link">{block.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {block.description}
                      </p>
                    </div>
                    <IconArrowRight
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-link motion-reduce:transition-none"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="border-y border-separator bg-muted/30">
        <div className="container-page py-16 lg:py-24">
          <SectionIntro
            id="features-heading"
            eyebrow="Principles"
            title="A design system that earns its place."
            description="Every component solves a repeated interface problem, every example works, and every copied file is safe to own."
          />
          <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li key={feature.title} className="flex flex-col bg-card p-6">
                <span className="flex size-10 items-center justify-center bg-brand-chip text-brand-icon">
                  <feature.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="start-heading">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-link">Get started</p>
            <h2 id="start-heading" className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
              Three steps to your first component.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              No signup, no account, and no runtime dependency on Aback. The CLI carries every
              component, and the source lands in your project and stays there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <Link href="/docs/installation">
                  Read the installation guide
                  <IconArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/docs/package">Use the npm package</Link>
              </Button>
            </div>
          </div>

          <ol className="flex min-w-0 flex-col">
            {[
              { title: "Set up the project once", body: <PackageCommand args={initCommand} /> },
              { title: "Add a component", body: <PackageCommand args={buttonCommand} /> },
              {
                title: "Import it and make it yours",
                body: (
                  <Code
                    language="tsx"
                    filename="app/page.tsx"
                    code={`import { Button } from "@/components/ui/button";\n\nexport default function Page() {\n  return <Button>Save changes</Button>;\n}`}
                  />
                ),
              },
            ].map((step, index, list) => (
              <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
                {index < list.length - 1 ? (
                  <span aria-hidden="true" className="absolute bottom-0 left-4 top-10 w-px bg-border" />
                ) : null}
                <span
                  aria-hidden="true"
                  className="relative flex size-8 shrink-0 items-center justify-center bg-brand-fill text-xs font-bold tabular-nums text-on-brand-fill"
                >
                  {index + 1}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-3 pt-1">
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  {step.body}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="products-heading" className="border-t border-separator">
        <div className="container-page py-16 lg:py-24">
          <SectionIntro
            id="products-heading"
            eyebrow="In production"
            title="Shaped by real Aback products."
            description="The system codifies what these interfaces needed under real forms, dense data, long content, and narrow screens."
            link={{ href: "/built-with", label: "See what ships where" }}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => {
              const used = components.filter((item) => item.meta?.usedIn?.includes(product.slug)).length;
              return (
                <li key={product.slug}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col border border-border bg-card p-6 outline-none transition-colors duration-200 hover:border-primary-300 focus-visible:ring-2 focus-visible:ring-focus-ring dark:hover:border-primary-700"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-link">
                        {product.name}
                      </span>
                      <IconArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-link"
                      />
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">{product.tagline}</span>
                    <span className="mt-6 flex items-baseline gap-2 border-t border-border pt-4">
                      <span className="text-2xl font-bold tracking-tight tabular-nums text-foreground">{used}</span>
                      <span className="text-sm text-muted-foreground">components in use</span>
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-separator">
        <div className="container-page py-16 lg:py-24">
          <SectionIntro
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions developers ask first."
            description="Licensing, requirements, and how the two install paths differ. The FAQ page answers the rest."
            link={{ href: "/faq", label: "All questions" }}
          />
          <FaqList items={homeFaq} className="mt-12" />
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="relative overflow-hidden border-t border-separator bg-brand-wash">
        <div className="container-page relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between lg:py-20">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Start with one component.
            </h2>
            <p className="text-lead mt-3 text-base leading-relaxed sm:text-lg">
              Read the docs, copy the source, and make it yours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="brand" asChild>
              <Link href="/docs/installation">
                Get started
                <IconArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background" asChild>
              <Link href="/docs/cli">CLI reference</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
