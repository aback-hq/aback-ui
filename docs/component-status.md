# Component catalogue

Last reviewed: November 2026.

| Component | Layer | Used in |
| --- | --- | --- |
| Accordion | Navigation | Aback Tools, Aback PDF, Aback Images |
| Alert | Feedback | Aback Launch, Aback PDF, Aback Images |
| Alert Dialog | Overlay | New shared pattern |
| Arrow Link | Navigation | Aback Group |
| Avatar | Data display | Aback Launch |
| Badge | Foundation | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images, Dronacharya |
| Breadcrumbs | Navigation | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Button | Foundation | Aback Tools, Aback Launch, Aback Group, Aback Chess, Aback PDF, Aback Images, Dronacharya |
| Calendar | Data display | New shared pattern |
| Card | Foundation | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images, Dronacharya |
| Checkbox | Forms | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Code Block | Data display | Aback Tools |
| Collapsible | Navigation | New shared pattern |
| Combobox | Forms | New shared pattern |
| Command | Overlay | Aback Launch, Aback Group, Aback PDF, Aback Images |
| Copy Button | Foundation | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Countdown | Data display | Dronacharya, Aback Chess |
| Date Picker | Forms | New shared pattern |
| Description List | Data display | Aback Tools |
| Dialog | Overlay | Aback Launch, Aback Group, Aback Chess, Aback PDF, Aback Images |
| Dropdown Menu | Overlay | Aback Launch, Aback Group |
| Dropzone | Forms | Aback Tools, Aback PDF, Aback Images |
| Empty State | Application | Aback Tools, Aback Launch |
| Field | Forms | Aback Tools, Aback Launch, Aback PDF |
| Hover Card | Overlay | New shared pattern |
| Input | Forms | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Input Group | Forms | Aback Tools, Aback Launch |
| Item | Data display | Aback Tools, Aback Launch |
| Kbd | Foundation | Aback Tools, Aback Launch, Aback PDF, Aback Images, Dronacharya |
| Label | Forms | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Layout | Layout | Aback Tools, Aback Launch |
| Link List | Navigation | Aback Group |
| Listbox | Forms | Aback Launch |
| Meter | Data display | Aback Tools, Aback Launch, Dronacharya |
| Page Header | Application | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Pagination | Navigation | New shared pattern |
| Panel | Layout | Aback Tools |
| Popover | Overlay | Aback Chess |
| Progress | Feedback | Aback Chess, Aback PDF, Aback Images |
| Prose | Foundation | Aback Tools, Aback Launch |
| Radio Group | Forms | New shared pattern |
| Rating | Forms | Aback Tools, Aback Launch |
| Reading Progress | Feedback | Aback Tools, Aback Launch |
| Relative Time | Data display | Aback Tools, Aback Launch |
| Scroll Area | Layout | New shared pattern |
| Search Trigger | Navigation | Aback Tools, Aback PDF, Aback Images |
| Section Heading | Application | Aback Tools, Aback Launch, Aback Group, Aback PDF, Dronacharya |
| Segmented Control | Forms | Aback Chess, Aback PDF, Aback Images |
| Select | Forms | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Separator | Foundation | Aback Launch, Aback Group |
| Share Buttons | Application | Aback Tools, Aback Launch |
| Sheet | Overlay | Aback Tools, Aback Launch, Aback Group, Aback Chess, Aback PDF, Aback Images |
| Skeleton | Feedback | Aback Launch |
| Skip Link | Navigation | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images |
| Slider | Forms | Aback PDF, Aback Images |
| Spinner | Feedback | Aback Tools, Aback Launch, Aback Chess, Aback PDF, Aback Images |
| Stat | Data display | Aback Tools, Aback Launch |
| Status Indicator | Data display | Aback Group |
| Steps | Data display | Aback Launch, Aback PDF, Aback Images |
| Switch | Forms | Aback Tools, Aback Launch, Aback Chess, Aback PDF, Aback Images |
| Tab Nav | Navigation | Aback Chess |
| Table | Data display | Aback Launch, Aback PDF, Aback Images |
| Table of Contents | Navigation | Aback Tools, Aback Launch |
| Tabs | Navigation | Aback PDF, Aback Images |
| Textarea | Forms | Aback Tools, Aback Launch, Aback PDF, Aback Images |
| Theme Toggle | Application | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images |
| Toast | Feedback | Aback Chess |
| Toggle Group | Forms | Aback Chess |
| Tooltip | Overlay | Aback Chess, Aback Images |

## Blocks

| Block | Pattern from |
| --- | --- |
| Article layout | Aback Tools, Aback Launch |
| Call to action | Aback Launch |
| Contact form | Aback Launch |
| Cookie consent | Aback Launch |
| Dashboard shell | New shared pattern |
| FAQ | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images |
| Feature grid | Aback Tools, Aback Launch |
| Hero | Aback Launch, Aback Group |
| Search hero | Aback Tools |
| Newsletter signup | Aback Tools, Aback Launch |
| Not found | Aback Tools, Aback Launch, Aback Group |
| Pricing | Aback Launch |
| Settings section | New shared pattern |
| Sign in | New shared pattern |
| Site footer | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images |
| Site header | Aback Tools, Aback Launch, Aback Group, Aback PDF, Aback Images |
| Users table | New shared pattern |

## Versioning

Every item ships in the same release and follows semver. Before 1.0 a minor release can change an API; the changelog says what changed and what to do. There are no per-component maturity labels. See [`accessibility.md`](accessibility.md) for what was and was not verified.

## Not yet shipped

No placeholder routes or fake catalogue entries are published. Candidate work that has not shipped is tracked in the changelog and repository issues rather than listed as a component: form helpers for schema-validated forms, a data-table block with column visibility, a toast-free page-level error pattern, and primitives no Aback product uses yet (context menu, menubar, navigation menu, resizable panels, carousel, input OTP).

Charts are the largest pattern the products use that Aback UI does not ship. Aback Launch has hand-written bar, line, donut, and horizontal bar charts in its admin area, and Aback Audit draws its own line chart and defines five chart colours locally. A chart set needs chart colour tokens in the theme first, so it is a design decision for the owner rather than a drop-in component.

"Used in" means the pattern exists in that product's source today. It does not mean the product imports Aback UI yet; migrating the products onto these components is the next integration step.

Aback Chess also imports the published packages: in November 2026 it used Button, Dialog, Sheet, Popover, Tooltip, Switch, Toggle Group, Progress, Spinner, and Toast from `@aback-ui/ui` 0.2.2, and it is listed in the "Used in" column for those. Dronacharya does not import Aback UI; it is listed where its own shared interface package has the same pattern.

Aback Audit is the first product that imports the published packages (`@aback-ui/ui` and `@aback-ui/tokens` 0.2.2). In November 2026 it imported only Card, Breadcrumbs, and Badge and wrote the rest as class strings, including buttons, alerts, tables, and score bars that the library already covers or now covers with Meter. It is not listed in the "Used in" column or on the Built with page yet.

Aback PDF (`2f7a55e`) and Aback Images (`e7631d3`) were added to the "Used in" column on 2026-11-15, from their own `components/ui`, `components/layout`, and tool sources as read that day. Neither imports Aback UI yet; both carry their own copies of the same square, blue-action patterns. Dronacharya stays in the registry metadata but is hidden on abackui.com for now, at the owner's request (`hiddenProducts` in `website/src/data/products.ts`).
