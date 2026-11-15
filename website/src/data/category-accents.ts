import {
  IconAppWindow,
  IconBox,
  IconCompass,
  IconForms,
  IconLayout,
  IconMessage,
  IconStack2,
  IconTable,
  type Icon,
} from "@tabler/icons-react";

import type { ComponentCategory } from "./component-catalog";

/**
 * One colour and icon per component category, after the category accents in
 * Aback Tools, so a category looks the same wherever it appears. Each colour
 * is a Tailwind palette step in light and a lighter step in dark, through
 * light-dark(), which follows the theme's color-scheme. They are content
 * colours for this site, not theme tokens, and are passed to Item's accent.
 */
export const categoryAccents: Record<ComponentCategory, { icon: Icon; accent: string }> = {
  Foundation: { icon: IconBox, accent: "light-dark(oklch(54.6% 0.245 262.881), oklch(80.9% 0.105 251.813))" },
  Layout: { icon: IconLayout, accent: "light-dark(oklch(51.1% 0.096 186.391), oklch(85.5% 0.138 181.071))" },
  Forms: { icon: IconForms, accent: "light-dark(oklch(55.5% 0.163 48.998), oklch(87.9% 0.169 91.605))" },
  Feedback: { icon: IconMessage, accent: "light-dark(oklch(55.3% 0.195 38.402), oklch(83.7% 0.128 66.29))" },
  Overlays: { icon: IconStack2, accent: "light-dark(oklch(54.1% 0.281 293.009), oklch(81.1% 0.111 293.571))" },
  Navigation: { icon: IconCompass, accent: "light-dark(oklch(50% 0.134 242.749), oklch(82.8% 0.111 230.318))" },
  "Data Display": { icon: IconTable, accent: "light-dark(oklch(50.8% 0.118 165.612), oklch(84.5% 0.143 164.978))" },
  Application: { icon: IconAppWindow, accent: "light-dark(oklch(59.2% 0.249 0.584), oklch(82.3% 0.12 346.018))" },
};

/** The anchor of a category's section in the component catalogue. */
export function categoryAnchor(category: string) {
  return `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
