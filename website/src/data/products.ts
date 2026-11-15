export interface Product {
  slug: "aback-tools" | "aback-launch" | "aback-group" | "aback-chess" | "aback-pdf" | "aback-images" | "dronacharya";
  name: string;
  url: string;
  tagline: string;
  description: string;
  detail: string;
}

/**
 * Every product the registry's `usedIn` metadata can name. The site shows
 * only `products`; a product in `hiddenProducts` keeps its registry data but
 * is left off the site's lists and "Used in" labels.
 */
const allProducts: Product[] = [
  {
    slug: "aback-tools",
    name: "Aback Tools",
    url: "https://abacktools.com",
    tagline: "Free tools that run in your browser.",
    description:
      "A library of browser-based utilities for files, images, data, and text. The dense tool workbench and square-corner chrome shaped the foundation components.",
    detail: "Component patterns proven across thousands of tool pages.",
  },
  {
    slug: "aback-launch",
    name: "Aback Launch",
    url: "https://abacklaunch.com",
    tagline: "Launch once. Get found for years.",
    description:
      "A launch and discovery platform for products. Its forms, dialogs, data tables, and status surfaces shaped the overlay and feedback components.",
    detail: "Overlay, form, and data patterns from a production product.",
  },
  {
    slug: "aback-group",
    name: "Aback Group",
    url: "https://aback.group",
    tagline: "Software, tools, and technology products.",
    description:
      "The umbrella site and product directory for the Aback ecosystem. Its header, command menu, section headings, and status badges shaped the application patterns.",
    detail: "Directory, navigation, and status patterns from the group site.",
  },
  {
    slug: "aback-chess",
    name: "Aback Chess",
    url: "https://abackchess.com",
    tagline: "Play anywhere. Get better on Aback Chess.",
    description:
      "A chess site for playing, puzzles, and game review. It imports dialogs, sheets, popovers, tooltips, switches, and toasts from the npm package, and its segmented controls, page tabs, and chess clock shaped Segmented Control, Tab Nav, and Countdown.",
    detail: "Installs the npm package and shaped the newest form and navigation patterns.",
  },
  {
    slug: "aback-pdf",
    name: "Aback PDF",
    url: "https://abackpdf.com",
    tagline: "Free PDF tools that run in your browser.",
    description:
      "A privacy-first PDF suite: merge, split, compress, convert, edit, and sign without uploading anything. Its file drop area, search dialog, and theme reveal use the same patterns as Dropzone, Search Trigger, and Theme Toggle, and the boxed navigation on this site comes from it.",
    detail: "Browser-only file tools built on the same square, blue-action interface.",
  },
  {
    slug: "aback-images",
    name: "Aback Images",
    url: "https://abackimages.com",
    tagline: "Free image tools that run locally in your browser.",
    description:
      "Hundreds of image tools for converting, compressing, resizing, and editing on the visitor's device. Its drop zones, tool tabs, tooltips, step lists, and search dialog use the same patterns as the components listed here.",
    detail: "A large tool catalogue with the same shell, search, and workbench patterns.",
  },
  {
    slug: "dronacharya",
    name: "Dronacharya",
    url: "https://dronacharya.ai",
    tagline: "Practise the test that's actually in front of you.",
    description:
      "An exam and placement practice platform. Its timed test papers shaped Countdown, and its shared interface package carries its own buttons, badges, cards, keycaps, and meters.",
    detail: "Timed tests and practice patterns from an exam platform.",
  },
];

/** Hidden for now at the owner's request (2026-11-15). */
const hiddenProducts = new Set<Product["slug"]>(["dronacharya"]);

export const products: Product[] = allProducts.filter((product) => !hiddenProducts.has(product.slug));

export function productName(slug: string) {
  return allProducts.find((product) => product.slug === slug)?.name ?? slug;
}

/** The products in a component's `usedIn` list that the site shows. */
export function shownUsedIn(usedIn: readonly string[] = []) {
  return usedIn.filter((slug) => products.some((product) => product.slug === slug));
}
