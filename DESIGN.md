---
version: "2.0"
name: Aback Design System
updated: "2026-11-17"
system: "Aback UI (abackui.com, npm @aback-ui/ui and @aback-ui/tokens)"

themes:
  light:
    canvas: "#f9fafb"            # --background, oklch(0.985 0.002 247): faint cool grey so white cards lift off it
    surface: "#ffffff"           # --card
    popover: "#ffffff"           # --popover
    sidebar: "#ffffff"           # --sidebar (the left sidebar is a white column on the cool canvas)
    muted: "#f1f4f7"             # --muted / --secondary
    accent: "#e9f1f8"            # --accent (hover and selected fills, a faint blue)
    ink: "#131824"               # --foreground, deep slate
    ink-soft: "#1c222e"          # --secondary-foreground / --accent-foreground
    mute: "#5a6472"              # --muted-foreground (lowest readable text tier)
    faint: "#adb2b9"             # mute at 50% (decorative only, never text)
    action: "#007bc4"            # --primary, oklch(0.56 0.15 243): Aback Blue fill, 4.54:1 with white
    on-action: "#ffffff"         # --primary-foreground
    hairline: "#e0e3e8"          # --border (cards, controls, dividers)
    separator: "#dee2e6"         # --separator (page chrome rules only)
    input: "#d4d8dd"             # --input (a shade heavier than hairline, so controls read first)
    ring: "#0095dd"              # --ring
    destructive: "#e7000b"       # --destructive
    link: "#005d95"              # primary-700 (resting text links)
    link-hover: "#003e63"        # primary-800
    brand-icon: "#007cc7"        # primary-600
    focus-ring: "#007cc7"        # primary-600
    overlay: "rgba(2, 6, 23, 0.50)"   # bg-slate-950/50 behind the search dialog
    scrollbar-thumb: "#cbd2dc"
    scrollbar-thumb-hover: "#a9b3c1"
    scrollbar-track: "transparent"
  dark:
    canvas: "#000000"            # true black
    surface: "#0f0f11"
    popover: "#18181b"
    sidebar: "#000000"
    muted: "#18181b"
    accent: "#1f1f23"
    ink: "#f5f5f5"
    ink-soft: "#f5f5f5"
    mute: "#a3a3a3"
    faint: "#525252"
    action: "#3bb7f7"            # oklch(0.74 0.14 236), primary-400 family
    on-action: "#04111c"         # near-black text on the action blue, 8.4:1
    hairline: "#27272a"
    separator: "#1f1f22"         # just under the hairline: long rules glow against true black
    input: "#2e2e33"
    ring: "#3aaae4"
    destructive: "#ff6467"
    link: "#33b7ff"              # primary-400
    link-hover: "#66c9ff"        # primary-300
    brand-icon: "#33b7ff"        # primary-400
    focus-ring: "#33b7ff"
    overlay: "rgba(2, 6, 23, 0.50)"
    scrollbar-thumb: "#2e2e33"
    scrollbar-thumb-hover: "#45454c"
    scrollbar-track: "transparent"

colors:
  # Semantic roles resolve to the LIGHT theme (the :root base theme).
  canvas: "#f9fafb"
  surface: "#ffffff"
  muted: "#f1f4f7"
  accent: "#e9f1f8"
  ink: "#131824"
  mute: "#5a6472"
  action: "#007bc4"
  on-action: "#ffffff"
  hairline: "#e0e3e8"
  separator: "#dee2e6"
  input: "#d4d8dd"
  destructive: "#e7000b"
  link: "#005d95"
  # Aback Blue brand ramp (--color-primary-*). Static: the same in both themes.
  primary-50: "#e6f6ff"
  primary-100: "#ccedff"
  primary-200: "#99dbff"
  primary-300: "#66c9ff"
  primary-400: "#33b7ff"
  primary-500: "#009bf9"         # Aback Blue, the brand anchor (logo, marks)
  primary-600: "#007cc7"
  primary-700: "#005d95"
  primary-800: "#003e63"
  primary-900: "#001f32"
  primary-950: "#000f19"
  # Status families (Tailwind v4 default palette, sRGB approximations of oklch)
  success: "#008236"             # green-700 (text on light)
  success-soft: "#dcfce7"        # green-100
  success-strong: "#016630"      # green-800
  success-dark-text: "#05df72"   # green-400
  warning: "#bb4d00"             # amber-700
  warning-soft: "#fffbeb"        # amber-50
  warning-strong: "#973c00"      # amber-800
  danger: "#c10007"              # red-700
  danger-soft: "#fef2f2"         # red-50
  danger-strong: "#9f0712"       # red-800
  # Content-type accents (search dialog, quick navigation, callouts)
  type-tool: "category accent"   # a tool shows its own category colour (3.6)
  type-guide: "#009966"          # emerald-600 (dark emerald-300)
  type-blog: "#7f22fe"           # violet-600 (dark violet-300)
  # Brand marketing surface (OG / social art only, never app UI)
  marketing-canvas: "#05080f"
  marketing-glow-blue: "#0073e6"
  marketing-glow-cyan: "#06b6d4"
  # Data visualization (CSS vars --chart-1 ... --chart-5, light values)
  chart-1: "oklch(0.646 0.222 41.116)"
  chart-2: "oklch(0.6 0.118 184.704)"
  chart-3: "oklch(0.398 0.07 227.392)"
  chart-4: "oklch(0.828 0.189 84.429)"
  chart-5: "oklch(0.769 0.188 70.08)"

categoryAccents:
  # src/config/category-accents.ts. Icons and hover only, never body text.
  audio-video: violet
  compress: amber
  crypto: emerald
  data: sky
  design: pink
  image: blue
  math: indigo
  pdf: red
  productivity: teal
  science: cyan
  text: orange
  web: green
  ai: fuchsia
  network: cyan
  payment: lime
  file: yellow
  tip-calculators: rose
  obfuscator: slate
  deobfuscator: purple
  calendar: rose
  fallback: primary              # unknown ids get Aback Blue

typography:
  hero-display:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 33.6px              # text-[2.1rem]; sm: 56px (text-[3.5rem])
    fontWeight: 600
    lineHeight: 1.1               # sm: 1.04
    letterSpacing: -0.035em
  display-lg:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.9px
  heading-xl:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 24px                # text-2xl; sm: 36px (text-4xl). The page H1 (PageHeader)
    fontWeight: 700
    lineHeight: 32px              # sm: 40px
    letterSpacing: -0.025em
  heading-lg:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.6px
  heading-md:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.015em
  heading-sm:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.015em
  card-title:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0
  title-md:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0
  body-lg:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-md:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  body-prose:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22.75px
    letterSpacing: 0
  body-compact:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 13px                # sidebar rows, card descriptions, breadcrumbs
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  body-sm:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0
  label-md:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  eyebrow:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.025em
    textTransform: uppercase
  overline:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 11px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.05em
    textTransform: uppercase
  micro-caps:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 10px
    fontWeight: 500
    lineHeight: 12px
    letterSpacing: 0.025em
    textTransform: uppercase
  button-md:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  button-xs:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0
  code:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  code-sm:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 19.5px
    letterSpacing: 0
  numeric-display:
    fontFamily: Geist, GeistSansFallback, ui-sans-serif, system-ui, sans-serif
    fontSize: 36px
    fontWeight: 800
    lineHeight: 36px
    letterSpacing: -0.9px
    fontVariantNumeric: tabular-nums

rounded:
  none: 0px
  card: 0px
  control: 0px
  chip: 0px
  icon-chip: 0px
  dialog: 0px
  avatar: 0px
  scrollbar-thumb: 0px            # square since the 2026-11-15 revamp; nothing in the UI is rounded

spacing:
  unit: 4px
  hair: 2px          # 0.5
  xs: 4px            # 1   Stack xs
  sm: 8px            # 2   Stack sm
  md: 16px           # 4   Stack md
  lg: 24px           # 6   Stack lg (tool page rhythm)
  xl: 32px           # 8   Stack xl (homepage rhythm)
  2xl: 40px          # 10  article / sidebar gutter
  3xl: 48px          # 12  empty-state padding
  4xl: 64px          # 16  gap between the homepage hero and the browse grid
  inset-control-x: 12px
  inset-tight: 12px
  inset-panel: 16px
  inset-card: 24px
  page-gutter-mobile: 16px
  page-gutter: 24px

layout:
  navbar-height: 64px
  sidebar-width: 256px
  sidebar-drawer-width: 288px
  sidebar-footer-height: 44px     # "N Free Tools" strip, lines up with the sponsor bar
  sponsor-bar-height: 44px
  rail-width-lg: 240px
  rail-width-xl: 288px
  article-sidebar-width: 260px
  hero-measure: 768px             # max-w-3xl hero column
  hero-search-max-width: 672px    # max-w-2xl
  hero-search-height: 56px        # sm: 60px
  dialog-search-max-width: 640px
  dialog-form-max-width: 448px
  prose-measure: 72ch
  control-height: 36px
  control-height-sm: 32px
  control-height-xs: 24px
  control-height-lg: 40px
  search-field-height: 40px

breakpoints:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px

elevation:
  level-0: "none"
  card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)"        # --shadow-card; dark 0 1px 2px 0 rgb(0 0 0 / 0.5)
  lift: "0 8px 24px -6px rgb(15 23 42 / 0.12), 0 2px 6px -2px rgb(15 23 42 / 0.08)"  # --shadow-lift; dark 0 10px 30px -8px rgb(0 0 0 / 0.8), 0 2px 6px -2px rgb(0 0 0 / 0.6)
  level-1: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"           # shadow-sm (shadcn Card)
  level-1-xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  level-2: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  level-3: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
  search-dialog: "0 32px 80px -20px rgb(0 0 0 / 0.45)"

motion:
  duration-instant: 100ms
  duration-fast: 150ms
  duration-base: 200ms
  duration-slow: 300ms
  duration-drawer-open: 500ms
  duration-theme-reveal: 600ms
  easing-standard: "cubic-bezier(0.4, 0, 0.2, 1)"
  easing-out: "cubic-bezier(0, 0, 0.2, 1)"
  directory-hover: "colour only, no transition"
  press-scale: 0.98
  marquee-duration: 48s

zIndex:
  base: 0
  footer: 10
  dropdown: 10
  rail: 20
  sidebar: 30
  rail-divider: 30
  sticky-navbar: 40
  sponsor-bar: 40
  modal-backdrop: 45
  modal: 50
  popover: 60
  tooltip: 70
  toast: 80
  max: 100

components:
  skip-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.label-md}"
    padding: "{spacing.sm} {spacing.md}"
    shadow: "{elevation.level-2}"
  navbar:
    backgroundColor: "rgba(249, 250, 251, 0.80)"   # bg-background/80 + backdrop-blur-xl backdrop-saturate-150
    textColor: "{colors.ink}"
    borderColor: "{colors.separator}"
    height: "{layout.navbar-height}"
    padding: "0 12px"                              # md+: 0 24px
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.mute}"
    hoverBackgroundColor: "{colors.muted}"
    hoverTextColor: "{colors.ink}"
    typography: "{typography.label-md}"
    padding: "0 12px"
    height: 36px
    rounded: "{rounded.none}"
  nav-link-active:
    backgroundColor: "action at 10%"               # bg-primary/10
    textColor: "{colors.action}"                   # text-primary (see A.1 R1: use primary-700 in light)
  icon-button:
    backgroundColor: "transparent"
    hoverBackgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
    width: 36px
    height: 36px
    rounded: "{rounded.none}"
  sidebar:
    backgroundColor: "{themes.light.sidebar}"
    borderColor: "{colors.separator}"
    width: "{layout.sidebar-width}"
    rounded: "{rounded.none}"
  sidebar-logo-strip:
    background: "none"
    borderColor: "{colors.separator}"
    height: 64px
    padding: "0 20px"
  sidebar-category-row:
    textColor: "ink at 80%"                        # text-foreground/80
    hoverBackgroundColor: "{colors.muted}"
    typography: "{typography.label-md}"
    padding: "8px 10px"
    iconSize: 18px
    iconColor: "{colors.mute}"
  sidebar-category-row-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    fontWeight: 600
    iconColor: "category accent"
  sidebar-tool-row:
    textColor: "{colors.mute}"
    typography: "{typography.body-compact}"
    padding: "6px 8px"
  sidebar-tool-row-active:
    backgroundColor: "action at 10%"
    textColor: "{colors.action}"
    fontWeight: 500
    marker: "2px {colors.action} bar on the tree guide"
  sidebar-footer:
    borderColor: "{colors.separator}"
    height: "{layout.sidebar-footer-height}"
    textColor: "ink at 80%"
    typography: "14px / 600"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.mute}"
    borderColor: "{colors.input}"
    hoverBorderColor: "ink at 25%"
    focus: "border {colors.action} + 4px ring action at 15%"
    height: "{layout.search-field-height}"
    padding: "0 12px"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  search-hero:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.input}"
    hoverBorderColor: "ink at 30%"
    focus: "border {colors.action} + 4px ring action at 20%"
    shadow: "{elevation.lift}"
    height: "{layout.hero-search-height}"
    padding: "0 16px"                              # sm: 0 20px
    placeholderTypography: "16px; sm: 17px"
    rounded: "{rounded.none}"
  hero-glow:
    background: "radial-gradient(ellipse 100% 42% at 50% 34%, action 11%, action 6% at 45%, transparent)"
  page-header:
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
    descriptionTypography: "15px; sm: 16px, leading-relaxed"
    descriptionColor: "{colors.mute}"
    gap: 12px
  breadcrumbs:
    textColor: "{colors.mute}"
    hoverTextColor: "{colors.action}"
    currentColor: "{colors.ink}"
    typography: "{typography.body-compact}"
    separator: "/ (aria-hidden, mute at 50%)"
    placement: "visually above the H1"
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
    hoverBackgroundColor: "action at 90%"
    typography: "{typography.button-md}"
    height: "{layout.control-height}"
    padding: "0 16px"
    rounded: "{rounded.none}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    shadow: "{elevation.level-1-xs}"
    typography: "{typography.button-md}"
    height: "{layout.control-height}"
    padding: "0 16px"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.muted}"
    textColor: "{themes.light.ink-soft}"
    typography: "{typography.button-md}"
    height: "{layout.control-height}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    hoverBackgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    height: "{layout.control-height}"
    rounded: "{rounded.none}"
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "#ffffff"
    typography: "{typography.button-md}"
    height: "{layout.control-height}"
    rounded: "{rounded.none}"
  text-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.input}"
    typography: "{typography.body-md}"
    height: "{layout.control-height}"
    padding: "4px 12px"
    shadow: "{elevation.level-1-xs}"
    rounded: "{rounded.none}"
  select:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.input}"
    typography: "{typography.body-md}"
    height: "{layout.control-height}"
    padding: "0 32px 0 12px"
    rounded: "{rounded.none}"
  code-editor:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    height: 320px
    padding: "{spacing.inset-tight}"
    rounded: "{rounded.none}"
  code-output:
    backgroundColor: "muted at 50%"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    height: 320px
    padding: "{spacing.inset-tight}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    shadow: "{elevation.level-1}"
    padding: "{spacing.lg}"
    gap: "{spacing.lg}"
    rounded: "{rounded.card}"
  card-title:
    typography: "{typography.heading-sm}"
    textColor: "{colors.ink}"
  tool-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    borderWidth: 1px
    padding: "{spacing.md}"
    gap: 12px
    icon: "20px, stroke 1.75, category accent, no box"
    titleTypography: "{typography.card-title}"
    descriptionTypography: "{typography.body-compact}, line-clamp-2"
    hover: "border category accent at 70% + 4% accent wash (dark 60% / 6%)"
    hoverTransform: "none"
    rounded: "{rounded.card}"
  category-tile:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    padding: "14px 16px"
    gap: 12px
    icon: "20px, stroke 1.75, category accent"
    nameTypography: "14px / 600"
    countTypography: "{typography.body-sm}"
    hover: "{components.tool-card.hover}"
  jump-chip:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    hoverBorderColor: "ink at 30%"
    typography: "{typography.label-md}"
    countTypography: "12px / 400 tabular-nums, mute"
    height: 32px
    padding: "0 12px"
    rounded: "{rounded.chip}"
  filter-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-xs}"
    padding: "6px 14px"
    rounded: "{rounded.chip}"
  filter-pill-active:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
  workbench-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    shadow: "{elevation.level-1}"
    titleTypography: "{typography.heading-sm}"
    titleIconColor: "primary-600 / dark primary-400"
    padding: "{spacing.lg}"
    rounded: "{rounded.card}"
  options-panel:
    backgroundColor: "muted at 20%"
    borderColor: "{colors.hairline}"
    padding: "{spacing.inset-panel}"
    gap: "{spacing.md}"
    rounded: "{rounded.none}"
  dropzone:
    backgroundColor: "transparent"
    borderColor: "mute at 25%"
    borderStyle: "2px dashed"
    padding: "32px"
    rounded: "{rounded.none}"
  dropzone-active:
    backgroundColor: "{colors.primary-50}"
    borderColor: "{colors.primary-500}"
  file-row:
    backgroundColor: "muted at 30%"
    borderColor: "{colors.hairline}"
    padding: "{spacing.inset-tight}"
  result-hero:
    backgroundColor: "primary-50 at 50%"
    borderColor: "{colors.primary-200}"
    borderWidth: 2px
    padding: "{spacing.lg}"
    valueTypography: "{typography.numeric-display}"
  stat-tile:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.inset-tight}"
    labelTypography: "{typography.body-sm}"
    valueTypography: "{typography.label-md}"
  alert-error:
    backgroundColor: "{colors.danger-soft}"
    borderColor: "#ffc9c9"
    textColor: "{colors.danger-strong}"
    typography: "{typography.body-md}"
    padding: "{spacing.inset-tight}"
  alert-success:
    backgroundColor: "{colors.success-soft}"
    borderColor: "#b9f8cf"
    textColor: "{colors.success-strong}"
    typography: "{typography.body-md}"
    padding: "{spacing.inset-tight}"
  alert-warning:
    backgroundColor: "{colors.warning-soft}"
    borderColor: "#fee685"
    textColor: "{colors.warning-strong}"
    typography: "{typography.body-md}"
    padding: "{spacing.inset-tight}"
  alert-info:
    backgroundColor: "primary-50 at 50%"
    borderColor: "{colors.primary-200}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "{spacing.inset-panel}"
  feature-item:
    icon: "20px bare, primary-600 / dark primary-400"
    titleTypography: "{typography.title-md}"
    descriptionTypography: "14px leading-relaxed, mute"
    gap: 12px
  use-case-item:
    icon: "20px bare, primary-600 / dark primary-400"
    titleTypography: "{typography.title-md}"
    descriptionTypography: "14px leading-relaxed, mute"
    background: "none (no box, no hover fill)"
  faq-item:
    borderColor: "{colors.hairline}"
    questionTypography: "16px / 500"
    answerTypography: "{typography.body-md}"
    answerColor: "{colors.mute}"
    padding: "{spacing.md} 0"
  related-tool-item:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    hoverBorderColor: "{colors.primary-300}"
    padding: "{spacing.inset-panel}"
  search-dialog:
    backgroundColor: "{colors.surface}"           # bg-popover (#ffffff / #18181b)
    borderColor: "{colors.hairline}"
    shadow: "{elevation.search-dialog}"
    overlay: "slate-950 at 50% + 2px backdrop blur"
    maxWidth: "{layout.dialog-search-max-width}"
    top: "8vh; sm: 12vh"
    maxHeight: 80vh
    inputHeight: 56px
    rounded: "{rounded.dialog}"
  search-result-row:
    padding: "8px 10px"
    margin: "0 8px"
    icon: "18px bare, category accent (tools), emerald (guides), violet (blog)"
    titleTypography: "14px / 500"
    descriptionTypography: "{typography.body-sm}"
  search-result-row-selected:
    backgroundColor: "{colors.accent}"
    chevron: "visible"
  search-match:
    textColor: "{colors.action}"
    fontWeight: 600
    backgroundColor: "transparent"
  kbd:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "10px / 500, font-sans"
    size: 20px
  modal-panel:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    shadow: "{elevation.level-3}"
    maxWidth: "{layout.dialog-form-max-width}"
    rounded: "{rounded.dialog}"
  menu:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    shadow: "{elevation.level-2}"
    width: 208px
    itemPadding: "10px 14px"
  prose-h2:
    typography: "{typography.heading-lg}"
    textColor: "{colors.ink}"
  prose-paragraph:
    typography: "{typography.body-prose}"
    textColor: "{colors.mute}"
    maxWidth: "{layout.prose-measure}"
  prose-link:
    textColor: "{colors.link}"
    decoration: "underline on hover"
  code-block:
    backgroundColor: "#fafafa"                    # zinc-50; dark zinc-900
    barBackgroundColor: "#f4f4f5"                 # zinc-100; dark zinc-800
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    padding: "{spacing.md}"
  sidebar-widget:
    backgroundColor: "muted at 20%"
    borderColor: "{colors.hairline}"
    titleTypography: "{typography.overline}"
    padding: "{spacing.inset-panel}"
  toc-item-active:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"
    borderLeft: "2px solid {colors.primary-500}"
  reading-progress:
    height: 3px
    background: "linear-gradient(to right, #33b7ff, #007cc7)"
  brand-rule-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    rule: "4px {colors.action} bar on the left edge"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    borderColor: "{colors.separator}"
    typography: "{typography.body-sm}"
    padding: "40px {spacing.md}"
  footer-column-title:
    typography: "{typography.overline}"
    textColor: "{colors.mute}"
  footer-legal-bar:
    backgroundColor: "muted at 40%"
    padding: "{spacing.inset-tight} {spacing.md}"
  right-rail:
    backgroundColor: "transparent"
    width: "{layout.rail-width-lg}"
    paddingBottom: 56px                           # clears the 44px sponsor bar
  sponsor-featured-card:
    backgroundColor: "{colors.surface}"
    borderWidth: 2px
    borderColor: "the sponsor's accent_color, else hairline"
    hoverBackgroundColor: "muted at 50%"
    height: 88px
    padding: "8px 12px"
    labelTypography: "{typography.micro-caps}"
  sponsor-standard-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    height: 44px                                  # 48px in the phone strip
    padding: "0 12px"
  sponsor-open-slot:
    copy: "Your brand here"
    hoverTextColor: "{colors.action}"
  sponsor-bar:
    backgroundColor: "canvas at 85% + backdrop-blur-xl"
    borderColor: "{colors.separator}"
    height: "{layout.sponsor-bar-height}"
    position: "fixed bottom, from the sidebar edge to the right edge"
    chipHeight: 32px
    openChipHeight: 28px
    labelTypography: "{typography.micro-caps}"
---

# Aback Tools Design System

## 0. Aback UI, and How to Read This Document

### 0.1 Aback UI is the system; this file is the Aback Tools layer

Every Aback product draws from one design system: **Aback UI**.

| | |
|---|---|
| Website and docs | **[abackui.com](https://abackui.com)** (installation, components with live previews, blocks, tokens, theming, `/themes` generator, `/colors`, changelog, hosted registry at `/r`) |
| Components | npm **`@aback-ui/ui`** (69 components plus `cn()`, `ThemeScript` and `useTheme`; ESM with TypeScript declarations; React 19 peer dependency; Radix UI, Tabler icons, cmdk, sonner and react-day-picker come with it) |
| Theme | npm **`@aback-ui/tokens`**: one file, `tokens.css` (light and dark colour roles, the Aback Blue ramp, square geometry, base element styles) |
| CLI | npm **`aback-ui`** (`init`, `add`, `diff`, `doctor`, `list`, `view`; copies component source into a project; the registry is bundled, so it works offline) |
| Blocks | 17 page blocks through the CLI (`search-hero`, `site-header`, `site-footer`, `hero`, `feature-grid`, `faq`, `newsletter`, `not-found`, `article-layout`, `pricing`, `sign-in`, `dashboard-shell` and more) |
| Current release | **0.6.0** (November 2026) for all three packages. Pre-1.0: a minor version can change an API; the changelog gives migration notes |
| Source | `github.com/devvrat-hans/aback-ui` (local checkout `~/aback-ui`), MIT for code. The Aback name, mark and Aback Blue are Aback Group trademarks |
| Normative contract | `aback-ui/DESIGN.md` and `aback-ui/AGENTS.md` |

Aback Tools is where most of the system came from. The 0.5.0 and 0.6.0 releases were drawn from this site's 2026-11-15 interface revamp: `SearchTrigger` (from `SearchBar`), `Item` with `accent` (from the tool cards and category colours), `ThemeToggle transition="reveal"` (from the theme switch), `ThemeScript defaultTheme` (from light as the default), the `search-hero` block (from the homepage) and the 0.6.0 theme values. The hex values in the front matter of this file are exactly the 0.6.0 `tokens.css` values; `src/app/globals.css` writes the same colours in oklch.

So this document has two jobs:

1. It states the **Aback Tools layer**: the app shell, category accents, the tool page anatomy, sponsors, copy rules and the backlog. Those are not in Aback UI.
2. It restates the **shared system** (tokens, type, geometry, motion, base components) as Aback Tools uses it. If this file and Aback UI disagree on a shared rule, Aback UI's `DESIGN.md` and `tokens.css` win, and this file is updated to match.

### 0.2 Using Aback UI properly (any Aback product)

**With the npm package** (import components, keep them upgradable):

```bash
bun add @aback-ui/ui @aback-ui/tokens
```

```css
/* app/globals.css (or src/app/globals.css) */
@import "tailwindcss";
@import "@aback-ui/tokens/tokens.css";
/* Required: Tailwind v4 does not scan node_modules. The path is relative to this stylesheet. */
@source "../node_modules/@aback-ui/ui/dist";
/* The product layer follows: role overrides, product-only utilities. */
```

```tsx
import { Button, SearchTrigger, ThemeScript, ThemeToggle } from "@aback-ui/ui";

// In <head>, before first paint. Aback Tools opens light when nothing is saved.
<ThemeScript defaultTheme="light" />
<ThemeToggle transition="reveal" />
```

**With the CLI** (copy the source when you need to change it):

```bash
bunx aback-ui@latest init
bunx aback-ui@latest add button dialog search-trigger
bunx aback-ui@latest diff        # what changed upstream since you copied
```

A project can do both: copy what you need to edit, import the rest.

Rules for every Aback product:

- **Upgrade `@aback-ui/ui` and `@aback-ui/tokens` together**, to the same version. Components rely on the tokens of their own release. Read the changelog before a minor bump.
- **Fonts**: load Geist Sans and Geist Mono through the `geist` package so `--font-geist-sans` and `--font-geist-mono` exist; `tokens.css` reads them and supplies the metric-matched `GeistSansFallback`.
- **Do not fork token names.** Override a role's value after the import (Aback Group keeps an ink `--primary`, Aback Launch a deep blue one; see Appendix C). If a role is missing, propose a semantic token upstream instead of writing a one-off hex.
- **Shared patterns go upstream.** When a pattern repeats in two Aback products, it belongs in Aback UI (with tests, docs, an axe check and a provenance note in `aback-ui/docs/provenance.md`), and products then import it. Product `DESIGN.md` files keep only their own layer.
- **Square corners, Tabler icons, no readable text under 12px or faded with opacity, every light value paired with a dark one.** These are system rules, not Aback Tools rules.
- Link to **abackui.com** (not the GitHub README) when pointing people or agents at component docs.

### 0.3 Aback UI in this repository (status 2026-11-17)

- `aback-tools` does **not yet depend on** `@aback-ui/ui` or `@aback-ui/tokens`. Its theme lives in `src/app/globals.css` (values identical to 0.6.0), its primitives in `src/components/ui` (shadcn new-york copies, several rewritten as native elements) and its building blocks in `src/components/common`. Products already on the npm package: Aback Chess, Aback Analytics, Aback Audit, Aback DR, Aback Inspect, Aback Skills and Aback Social (all on 0.2.2, before the 0.6.0 theme).
- **New shared UI** in this repo should be taken from Aback UI rather than written again: install the packages as in 0.2 and import, or copy with the CLI. Ask the owner before adding the dependency to this repo, since it changes the bundle of a 3,000+ page static export and must be measured against the performance rules in Section 15.
- **Equivalents** to use when touching these components:

| Aback Tools today | Aback UI equivalent |
|---|---|
| `common/SearchBar` (`md` and `hero`) | `SearchTrigger` |
| `tools/ToolCard`, homepage category tiles | `Item` with `accent` |
| `common/ThemeToggle` (reveal) and the `theme-init` script in `CriticalScriptInjector` | `ThemeToggle transition="reveal"`, `ThemeScript defaultTheme="light"` |
| `home/HomeHero` | `search-hero` block |
| `common/PageHeader`, `common/Breadcrumbs`, `common/SectionHeader` | `PageHeader`, `Breadcrumbs`, `SectionHeading` |
| `common/ActionButton` | `Button` with `loading` and `loadingText` |
| `common/CopyButton`, `common/DropZone`, `common/EmptyState` | `CopyButton`, `Dropzone`, `EmptyState` |
| FAQ accordion, share buttons, ToC, reading progress | `Accordion`, `ShareButtons`, `TableOfContents`, `ReadingProgress` |
| Options panel, stat tiles, key/value rows | `Panel`, `Stat`, `DescriptionList` |
| Blog and guide prose | `Prose` |
| `layout-primitives` (`Stack`, `Group`, `Grid`, `Container`) | `Layout` |

- **Tokens the two files do not share yet.** Aback Tools has `--sidebar-*`, `--chart-*`, `--shadow-card` and `--shadow-lift`, which `tokens.css` lacks. `tokens.css` has `--link`, `--link-hover`, `--brand-*`, `--focus-ring`, the status roles (`--success`, `--warning`, `--danger`, `--info` and their soft/strong forms), `--overlay`, `--radius-xs: 0` and a global reduced-motion rule, which Aback Tools lacks. Adopting `tokens.css` brings those in; the Aback Tools-only rules (category accents, the overrides in 4.4, the sidebar mask, the marquee) stay in `globals.css` after the import.

### 0.4 How to read this document

- **Tokens** in the front matter are the contract. Light values are the base theme (`:root`); dark values live in `themes.dark`. Hex values are the sRGB of the oklch values in `globals.css`.
- **Where the design lives.** The standard is the 2026-11-15 interface revamp, on the **`production`** branch, the deploy branch (`workers-sponsors` with `ui-revamp` merged in). On 2026-11-17 abacktools.com still served the pre-revamp build (old shell, Mediavine) because `production` had not been deployed yet. Branches cut before the revamp (`main`, `wave-1-tools`) still carry the October 2026 tokens in `globals.css` and the old shell until they take it. Where this file and `production`'s `src/app/globals.css` disagree, the CSS wins and this file must be corrected.
- **"Standard"** means the rule for all new work. Where the current code differs, the deviation is logged in Appendix A. A few standards deliberately tighten current behaviour for accessibility; these are marked **(normative)**.
- **Class strings** are Tailwind v4, because that is how the system is implemented. Designers can read them as exact values: `p-4` = 16px, `gap-6` = 24px, `text-sm` = 14px/20px.
- **Keeping it current.** Every change to tokens, the shell, a shared component, a page template or a copy rule updates this file in the same commit, adds a line to Appendix D and bumps `updated` in the front matter. Shared-system changes go to Aback UI first (0.1).

---

## 1. Overview and Design Philosophy

Aback Tools is a free, no-signup library of 3,000+ utilities (the exact number comes from `TOTAL_TOOL_COUNT` in `src/config/tools-nav.ts`) that run entirely in the browser. The design exists to get a person from "I need to convert/format/calculate X" to a finished result as fast as possible, and to make the privacy promise ("your files never leave your device") feel credible.

The visual language is a **Swiss utilitarian app shell**: cool, faintly tinted neutrals, one saturated brand blue for actions, a restrained colour per tool category, square corners, 1px hairlines and dense, well-ordered typography. It looks like a precise instrument, not a marketing site. Dark mode is true black.

**Design pillars**

1. **Utility first, no hero theatre.** Tool pages open with a plain H1 and description and put the tool above the fold. The homepage opens with a centred search hero, because finding the right tool is its job; it carries no product shot, illustration or animation.
2. **One action colour.** Aback Blue (`--primary`, `#007bc4` light, `#3bb7f7` dark) is the primary action, the current page and the selection. The ramp (`primary-50` to `primary-950`) supplies tints and the logo blue.
3. **Category colour, in moderation.** Each of the 20 categories has one accent hue, used only for its icon and for the hover border and wash of its own cards. Titles stay in the text colour. Icons are drawn bare, never in a tinted box.
4. **Square geometry.** Every corner radius is 0, enforced globally in CSS. It is the most recognisable trait of the brand.
5. **Hairline structure over shadow.** Borders define surfaces; white cards sit on a faintly cool canvas; shadows are whisper-light and reserved for the search field and floating layers.
6. **Consistency across 3,000+ pages.** Every tool page follows one anatomy and one set of shared components, so moving between tools feels like moving between tabs of one app.
7. **Privacy is visible.** The "processed locally" promise is stated in the description, in a feature item and in an About block on every tool page.
8. **Performance is a design constraint.** Layout reservations prevent CLS, directory hover changes colour only, heavy UI (search) loads on idle, sponsor slots keep fixed heights while they load. Visual ideas that cost Core Web Vitals are rejected.
9. **Light by default, dark first class.** A first visit opens light; a saved choice wins; both themes are designed, not derived.

---

## 2. Brand Identity

### 2.1 Name and wordmark

- Product name: **Aback Tools**. Domain: **abacktools.com**. Social handle: **@abacktools**. Part of the Aback Group family (Appendix C).
- Lockup (`src/components/common/Logo.tsx`): the blue mark carries the brand colour; the wordmark sits in the text colour, **"Aback" semibold** and **"Tools" regular at `text-foreground/55`**, `leading-none tracking-[-0.02em] whitespace-nowrap`, mark-to-word gap `gap-1.5` (the PNG has transparent padding, so this reads as about 12px). No hover zoom.
- Sizes: `sm` 32px mark / 17px word, `md` (default, sidebar) 36px / 19px, `lg` 48px / 24px.
- When the wordmark is shown it names the link, so the mark is decorative (`alt=""`); mark-only use (the phone navbar) keeps `aria-label="Aback Tools"`.
- In the footer: a 24px mark beside `text-sm font-semibold tracking-tight text-foreground` "Aback Tools".

### 2.2 Logo mark

- A lowercase geometric **"a" in Aback Blue (#009bf9)** with three circuit traces exiting to the right, each ending in a ring node. It reads as "a" plus "connected utilities".
- Files: `public/aback-logo-64.png`, `-80.png`, `-128.png` (the 128px source is used everywhere for 2-3x DPR, preloaded with `fetchPriority="high"`), `aback-ai-only-logo-1280-no-bg.png` (large mark for OG and JSON-LD publisher logo), `favicon-32x32.png`, `favicon.png` (256px).
- Below `md` (768px) the navbar shows the mark only, beside the menu button.
- Do not recolour, outline, box, or place the mark on a saturated background. On dark marketing art it may carry a soft blue glow (2.4).

### 2.3 Brand colour

Aback Blue `#009bf9` (`primary-500`) is the anchor of an 11-step ramp (3.3) and the colour of the mark. The **action blue** that fills buttons and marks the current page is the darker `#007bc4` in light (4.54:1 with white text) and the lighter `#3bb7f7` in dark (with near-black text); it is the `--primary` role, not a ramp step. Browser chrome uses `themeColor: #009af9` in `layout.tsx` and `site.webmanifest` (one unit off the anchor; align to `#009bf9` when next touched). The manifest `background_color` is `#05080f`, the marketing canvas.

`#2596be`, named as a primary colour in `.github/instructions/platform.instructions.md`, is **legacy** and must not be used.

### 2.4 Marketing and social expression

OG and Twitter images (`scripts/generate-og-image.py`, 2400x1260 rendered at 2x) define the brand's marketing look. It is a stronger, darker cousin of the app UI:

- Canvas `#05080f` with blurred radial glows (blue `#0073e6` centre-left, cyan `#06b6d4` bottom-left) and a 60px white hairline grid at about 3% opacity.
- A 2px framed layout, inset 28px, split into columns, with **"+" crosshairs in Aback Blue** at grid intersections.
- **HUD typography**: uppercase Geist Mono labels with `//` separators ("SYS.STATUS: OPERATIONAL", "ENGINE: PURE CLIENT-SIDE", "// 01").
- Big numerals in Geist Bold white, the tagline in Aback Blue. Tool counts follow 13.4 ("3,000+").
- Square spec chips (12% white fill, 32% white outline) and square count badges tinted with a category accent.
- Sharp corners only.

This HUD style is for marketing art, social cards and launch graphics. Do not import crosshairs, glows or grid backgrounds into the product UI. The one light effect in the product is the faint horizontal streak of the action blue behind the homepage hero (8.4).

### 2.5 Voice in one line

Plain, confident and specific: say what the tool does, that it is free, and that it runs locally. No hype, no exclamation marks, no em dashes or en dashes (Section 13).

---

## 3. Color System

### 3.1 The one naming trap you must know

The codebase has two different things called "primary":

| You write | It resolves to | Light | Dark | Meaning |
|---|---|---|---|---|
| `bg-primary`, `text-primary`, `border-primary`, `ring-primary` | `--primary` (semantic role) | `#007bc4` | `#3bb7f7` | **Action**: the Aback Blue fill for primary buttons, the current page, selection |
| `bg-primary-500`, `text-primary-700`, ... | `--color-primary-NNN` (brand ramp) | ramp | ramp | **Aback Blue ramp**, static in both themes |

Since the 2026-11-15 revamp, bare `primary` **is blue**. Before it, `primary` was a neutral ink (`#171717` / `#e5e5e5`), and about 6,900 bare `text-primary` usages in tool UIs that were written then now render the action blue (Appendix A). Rules:

- Use `bg-primary text-primary-foreground` for the filled action; it flips to near-black text on the light blue in dark mode automatically.
- Use `text-primary` for icons, active states and hover colour. For **resting body links**, use the link recipe (`text-primary-700 dark:text-primary-400`): `text-primary` measures 4.34:1 on the `#f9fafb` canvas, a hair under AA for small text (4.54:1 on white cards).
- Write a ramp step when you need a specific shade (tints, borders, the logo blue).
- **Global override (4.4):** any `bg-primary-500` or `bg-primary-600` element that also has `text-white` is repainted with `--primary` and `--primary-foreground`, because `#009bf9` behind white text reads washed out (2.98:1).

### 3.2 Semantic surface and text tokens

All defined in `src/app/globals.css` as CSS custom properties and exposed as Tailwind colours via `@theme inline`.

| Role | CSS var / Tailwind | Light | Dark | Use |
|---|---|---|---|---|
| Canvas | `--background` / `bg-background` | `#f9fafb` | `#000000` | Page, navbar, rail, footer |
| Surface | `--card` / `bg-card` | `#ffffff` | `#0f0f11` | Cards, tiles, panels, search fields, sponsor cards |
| Popover | `--popover` / `bg-popover` | `#ffffff` | `#18181b` | Search dialog, menus, floating layers |
| Sidebar | `--sidebar` / `bg-sidebar` | `#ffffff` | `#000000` | The left sidebar column |
| Muted | `--muted` / `bg-muted` | `#f1f4f7` | `#18181b` | Hover fills, wells, kbd, tinted panels (often at /10 to /50) |
| Secondary | `--secondary` | `#f1f4f7` | `#18181b` | shadcn secondary button |
| Accent | `--accent` / `bg-accent` | `#e9f1f8` | `#1f1f23` | Selected search row, active sidebar category, ghost hover |
| Ink | `--foreground` / `text-foreground` | `#131824` | `#f5f5f5` | Headings, labels, primary text |
| Ink soft | `--secondary-foreground`, `--accent-foreground` | `#1c222e` | `#f5f5f5` | Text on secondary and accent fills |
| Mute | `--muted-foreground` / `text-muted-foreground` | `#5a6472` | `#a3a3a3` | Descriptions, meta, captions, idle nav. **Lowest readable tier** |
| Action | `--primary` / `bg-primary` | `#007bc4` | `#3bb7f7` | Primary button fill, active nav text, selection |
| On-action | `--primary-foreground` | `#ffffff` | `#04111c` | Text on Action |
| Hairline | `--border` / `border-border` (default for bare `border`) | `#e0e3e8` | `#27272a` | Cards, controls, inner dividers |
| Separator | `--separator` / `border-separator`, `bg-separator` | `#dee2e6` | `#1f1f22` | **Page chrome only**: navbar bottom, sidebar edge, sidebar footer and logo strip, footer top, rail divider, sponsor bar top |
| Input | `--input` / `border-input` | `#d4d8dd` | `#2e2e33` | Form control and search field outlines |
| Ring | `--ring` | `#0095dd` | `#3aaae4` | Focus outlines (base `:focus-visible` outline colour), card focus |
| Destructive | `--destructive` | `#e7000b` | `#ff6467` | Errors, destructive actions |

Rules:
- The global base layer applies `border-border` and `outline-ring/50` to `*`, so a bare `border` class is always the Hairline.
- In light, `--input` is a shade heavier than `--border`, so a control's outline reads before a card's. `--separator` sits just under `--border` in dark, where long rules glow against true black. Never use Separator on controls, never use Hairline for chrome rules.
- `--sidebar-*` tokens are now in use: the sidebar is `bg-sidebar` (white on the cool canvas, black in dark). Other `--sidebar-*` roles mirror the main ones.
- Text selection is `color-mix(in oklch, var(--primary) 22%, transparent)`.

### 3.3 Aback Blue ramp and role map

| Step | Hex | Role in light theme | Role in dark theme |
|---|---|---|---|
| 50 | `#e6f6ff` | Drag-over fill, ToC active wash, tinted panels, result hero (/50) | (not used) |
| 100 | `#ccedff` | Tags, legacy icon chips (rendered bare, 4.4) | Hover/active text on deep fills |
| 200 | `#99dbff` | Tinted borders (callouts, result hero) | Text on deep brand fills |
| 300 | `#66c9ff` | Hover borders on related-tool items | Link hover |
| 400 | `#33b7ff` | Reading progress | **Links, brand icons, focus ring** |
| 500 | `#009bf9` | **Brand anchor**: the logo, drag-over border, progress fills, ToC marker, decorative marks | Accents, markers, borders |
| 600 | `#007cc7` | **Brand icons** (FeatureItem, UseCaseItem, InfoBlock, workbench titles), focus ring | Fills only with near-black text |
| 700 | `#005d95` | **Resting link text**, ToC active text | Borders on deep fills |
| 800 | `#003e63` | Link hover | Tinted borders |
| 900 | `#001f32` | (not used) | Washes at /30 to /50 |
| 950 | `#000f19` | (not used) | Deep washes at /20 to /30 |

The action blue (`--primary`, `#007bc4`) sits between steps 600 and 700 in light; in dark (`#3bb7f7`) it sits beside step 400.

Measured contrast (WCAG 2.x, computed 2026-11-17):

| Pair | Ratio | Verdict |
|---|---|---|
| white on action `#007bc4` | 4.54:1 | AA text (the default button) |
| `#04111c` on dark action `#3bb7f7` | 8.44:1 | AAA |
| action `#007bc4` on card `#ffffff` | 4.54:1 | AA text |
| action `#007bc4` on canvas `#f9fafb` | 4.34:1 | Icons, large text and hover states only; resting small text uses primary-700 |
| action on `bg-primary/10` (active nav) | 3.80:1 | **Fails AA for 14px text** (Appendix A, R1) |
| primary-700 on canvas | 6.70:1 | AAA large / AA text |
| primary-600 on canvas / card | 4.27:1 / 4.46:1 | Icons and 18px+ text only |
| primary-500 on white | 2.98:1 | Decorative only on light; never text, never the only state cue |
| dark action `#3bb7f7` on `#000` / `#0f0f11` | 9.30:1 / 8.48:1 | AAA |
| primary-400 on `#000` / `#0f0f11` | 9.36:1 / 8.53:1 | AAA |

Standard pairings:
- **Primary action**: `bg-primary text-primary-foreground hover:bg-primary/90` (the `Button` default).
- **Link text**: `text-primary-700 dark:text-primary-400`, hover `hover:text-primary-800 dark:hover:text-primary-300` plus underline.
- **Brand icon**: `text-primary-600 dark:text-primary-400`, drawn bare.
- **Current page / selected item**: `bg-primary/10 text-primary` (navbar, sidebar tool row); in light, prefer `text-primary-700` on the tint for AA (R1).
- **Hover or selected fill without blue**: `bg-accent`.
- **ToC active wash**: `bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300`.

### 3.4 Status colours

There are no status tokens in `globals.css` (Aback UI's `tokens.css` has them; 0.3). Status uses the Tailwind v4 palette with one fixed recipe per family. Success is **green**, warning is **amber**, danger is **red** (or `destructive`), info is the **brand ramp**.

| State | Container (light) | Container (dark) | Inline text | Icon |
|---|---|---|---|---|
| Success | `border-green-200 bg-green-50 text-green-800` | `dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300` | `text-green-700 dark:text-green-400` | `IconCircleCheck` green-600 / green-400 |
| Warning | `border-amber-200 bg-amber-50 text-amber-800` | `dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300` | `text-amber-700 dark:text-amber-400` | `IconAlertTriangle` |
| Danger | `border-red-200 bg-red-50 text-red-800` | `dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300` | `text-red-700 dark:text-red-400` | `IconAlertCircle` |
| Info | `border-primary-200 bg-primary-50/50 text-foreground` | `dark:border-primary-800/60 dark:bg-primary-950/30` | `text-primary-700 dark:text-primary-300` | `IconInfoCircle` |

Never use 500 or 600 status shades for small text on white (green-600 is 3.2:1). Never signal state with colour alone; pair it with an icon or a word. A live indicator (the homepage usage line) is a 6px square `bg-emerald-500` beside words.

### 3.5 Content-type accents

Used where tools, guides and blog posts appear side by side (search dialog, quick navigation, callout variants):

| Type | Icon colour | Badge recipe (where badges are still used) |
|---|---|---|
| Tool | its **category accent** (3.6) | `bg-primary-100 text-primary-700 border-primary-200 dark:bg-primary-900/35 dark:text-primary-300 dark:border-primary-800/40` |
| Guide | `IconBook` `text-emerald-600 dark:text-emerald-300` | `bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/30` |
| Blog | `IconPencil` `text-violet-600 dark:text-violet-300` | `bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800/30` |

Emerald is reserved for "guide", the blog "Tip" callout and the crypto category. Do not use it as a generic success colour.

### 3.6 Category accents

Since the revamp each category has one accent, defined once in **`src/config/category-accents.ts`** and read through `categoryAccent(categoryId)` (or `categoryAccent(categoryOfPath(tool.path))`). A category looks the same in the sidebar, the homepage tiles, hub headers, tool cards and search rows.

| Category | Hue | Category | Hue |
|---|---|---|---|
| audio-video | violet | productivity | teal |
| compress | amber | science | cyan |
| crypto | emerald | text | orange |
| data | sky | web | green |
| design | pink | ai | fuchsia |
| image | blue | network | cyan |
| math | indigo | payment | lime |
| pdf | red | file | yellow |
| tip-calculators | rose | obfuscator | slate |
| calendar | rose | deobfuscator | purple |

Unknown ids fall back to Aback Blue. Each accent has four literal class strings (Tailwind only generates classes it can see):

| Field | Recipe (violet shown) | Use |
|---|---|---|
| `text` | `text-violet-600 dark:text-violet-300` (700 for amber, emerald, sky, teal, cyan, orange, green, lime, yellow, slate) | **The icon.** Never body text |
| `hover` | `hover:border-violet-500/70 hover:bg-violet-500/[0.04] dark:hover:border-violet-400/60 dark:hover:bg-violet-400/[0.06]` | Hover border and faint wash of that category's card or tile |
| `bar` | `bg-violet-500` | A thin marker (top rule, active bar) |
| `chip` | `bg-violet-500/12 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300` | Kept for data and legacy use; icons are drawn bare, so new UI does not put icons on chips |

Rules:
- A card's hover uses **its own** category colour, never brand blue and never another category's colour.
- Titles and descriptions stay in the text colours. The accent colours an icon or a 1-2px mark only.
- In the sidebar, category icons are muted (`text-muted-foreground`) except the current category, which takes its accent.
- Duplicated hues to resolve when convenient: network and science share cyan; calendar and tip-calculators share rose; crypto and obfuscator share `IconShieldLock` (9.4).
- Per-category accents in OG art are marketing-only and may differ.

### 3.7 Colour inside tools

Tools whose subject is colour (palettes, contrast checkers, CSS generators, charts, regex railroads) may render arbitrary user or data colours through inline `style`. That is content, not chrome. Their surrounding UI (cards, labels, buttons) still follows this system. Data visualisations use `--chart-1` to `--chart-5` before anything else.

### 3.8 Third-party brand colours

Allowed only on the brand's own mark, at hover, in share or "Ask AI" controls: X (ink), LinkedIn `#0a66c2`, Facebook blue-700, WhatsApp emerald-600. At rest these icons are monochrome `text-muted-foreground`. A **sponsor's** `accent_color` may colour the 2px border of its own featured card (11.12) and nothing else.

---

## 4. Theming

### 4.1 Mechanism

- Light is the base theme on `:root`. Dark is applied by the class `dark` on `<html>`.
- Tailwind variant: `@custom-variant dark (&:is(.dark *));` so every `dark:` utility applies under `<html class="dark">`.
- Preference is stored in `localStorage` under the key **`theme`** with values `light`, `dark` or `system`.
- **Default is light** (owner, 2026-11-15): with nothing saved the site opens light; a saved `system` follows `prefers-color-scheme`; a saved `light` or `dark` wins. `CriticalScriptInjector` injects the `theme-init` script through `useServerInsertedHTML` **before first paint**, so there is no flash of the wrong theme. `src/components/common/__tests__/theme-default.test.tsx` keeps the script and the toggle in agreement. (Aback UI equivalent: `ThemeScript defaultTheme="light"`.)
- `ThemeToggle` (`src/components/common/ThemeToggle.tsx`): a 36px ghost icon button, `IconMoon` in light and `IconSun` in dark (20px, `text-foreground`), `hover:bg-muted`, localized `aria-label`, hydration-safe placeholder during SSR. It switches between explicit `light` and `dark`.
- **Theme reveal**: the switch runs inside `document.startViewTransition`, and the new theme grows as a circle from the button (`clip-path: circle()` on `::view-transition-new(root)`, 600ms, `cubic-bezier(0.4, 0, 0.2, 1)`). The browser's default cross-fade is turned off by a style the toggle adds at run time, because Lightning CSS drops `::view-transition` rules from `globals.css`. Without the API, or under `prefers-reduced-motion`, the theme switches at once.

### 4.2 Dark theme rules

- Dark is **true black with neutral greys** (no tint): `#000000` page and sidebar, `#0f0f11` cards, `#18181b` popovers, muted surfaces and raised fills, `#1f1f23` hover/accent fills. Text is `#f5f5f5`, secondary text `#a3a3a3`. Hierarchy comes from lighter surfaces, not from shadows.
- Borders are solid greys: `#27272a` hairline, `#1f1f22` separator, `#2e2e33` input. No translucent white borders.
- The action blue lightens (`#3bb7f7`) and its text turns near-black (`#04111c`). Brand text and icons shift up the ramp (600/700 in light become 400/300 in dark). Tints shift down: 50/100 become 900/950 at 20% to 50% opacity. Category accents step from 600/700 to 300.
- Status containers use `-950/30` fills, `-800/50` borders, `-300` text.
- Every component that sets a light colour explicitly must set its dark pair in the same class string. Never ship a `bg-primary-50` without `dark:bg-primary-900/30` (or similar).

### 4.3 Scrollbars

Thin, theme-aware scrollbars are defined globally: 8px wide, **square thumb** (`border-radius: 0`), thumb `#cbd2dc` / `#2e2e33`, hover `#a9b3c1` / `#45454c`, transparent track. Firefox uses `scrollbar-width: thin` with the same colours.

### 4.4 Global overrides in `globals.css`

These rules are **unlayered on purpose** so they win over Tailwind's layered utilities (dark variants included). They exist so that 3,000+ tool UIs written before the revamp follow it without editing each file. New code should not rely on them; write the target classes directly.

| Rule | Selector | Effect |
|---|---|---|
| Bare icons | `.justify-center:is(.bg-primary-50, .bg-primary-100):has(> svg:only-child)` | A tinted box whose only child is an svg loses its fill (about 250 tool files). The box keeps its size as spacing; boxes holding text (step numbers, initials) are untouched |
| Filled blue buttons | `.text-white:is(.bg-primary-500, .bg-primary-600)` | Repainted with `--primary` / `--primary-foreground` (about 270 tool files: selected options and primary actions). Clickable ones (`button`, `a`, `label`, `[role=button]`, `[role=tab]`) darken on hover to `color-mix(in oklch, var(--primary) 88%, black)` |
| Square pills | `.rounded-full` | `border-radius: 0` |
| Headings | `h1, h2, h3` | `text-wrap: balance; letter-spacing: -0.015em` (a `tracking-*` class still wins) |
| Paragraphs | `p` | `text-wrap: pretty` |
| Focus | `:focus-visible` | `outline-color: var(--ring)` |

Utilities defined there: `.shadow-card`, `.shadow-lift` (8.2), `.bg-dot-grid` (a 20px dot grid; **not used** since the owner ruled out grids behind the hero; do not use), `.badge-marquee-track`.

---

## 5. Typography

### 5.1 Families

- **Geist Sans** for all UI and prose. Self-hosted through the `geist` npm package (`GeistSans.variable`), no network font requests.
- **GeistSansFallback**: a local Arial/Helvetica face with `size-adjust: 105%`, `ascent-override: 95%`, `descent-override: 22%`, `line-gap-override: 0%`, calibrated so the font swap causes under 1px of reflow (CLS budget). Aback UI's `tokens.css` ships the same face.
- **Geist Mono** (`GeistMono.variable`, Tailwind `font-mono`) for code, editors and outputs, hex values, file names and sizes, locale codes in the language switcher, the sidebar's `+`/`−` toggles and technical chips. Fallback `ui-monospace, SFMono-Regular, Menlo, monospace`.
- Body is set with `antialiased`.
- No per-script fonts. Supported locales are Latin and Cyrillic only (13.5).

### 5.2 Scale

| Token | Tailwind | Size / line | Weight | Tracking | Used for |
|---|---|---|---|---|---|
| `hero-display` | `text-[2.1rem] sm:text-[3.5rem] font-semibold leading-[1.1] sm:leading-[1.04] tracking-[-0.035em]` | 33.6 to 56 | 600 | -0.035em | **Homepage H1 only** |
| `display-lg` | `text-4xl font-bold tracking-tight` | 36 / 40 | 700 | -0.025em | Standalone hero titles (Support page at `sm:`), 404 |
| `heading-xl` | `text-2xl sm:text-4xl font-bold tracking-tight` | 24 / 32, sm 36 / 40 | 700 | -0.025em | **The page H1** (`PageHeader`) |
| `heading-lg` | `text-2xl font-bold tracking-tight` | 24 / 32 | 700 | -0.025em | Article H2 in blog prose, blog FAQ title |
| `heading-md` | `text-xl font-semibold tracking-tight` | 20 / 28 | 600 | -0.015em | Free-standing section H2 (homepage "Browse", SectionHeader, legal sections) |
| `heading-sm` | `text-lg font-semibold` | 18 / 28 | 600 | -0.015em | **H2 inside a Card** (`CardTitle className="text-lg"`), hub subcategory H2, article H3 |
| `title-md` | `font-semibold leading-snug` (base) | 16 | 600 | 0 | Item H3: feature, use case, info block |
| `card-title` | `text-[15px] font-semibold leading-snug` | 15 | 600 | 0 | ToolCard title |
| `body-lg` | `text-base` | 16 / 24 | 400 | 0 | Blog lead; homepage subline (`sm:text-lg`) |
| `page-description` | `text-[15px] sm:text-base leading-relaxed` | 15 to 16 | 400 | 0 | Description under the page H1 (`max-w-3xl`, `line-clamp-3` on phones) |
| `body-md` | `text-sm` | 14 / 20 | 400 | 0 | Default UI text, card descriptions, controls |
| `body-prose` | `text-sm leading-relaxed` | 14 / 22.75 | 400 | 0 | Blog, guide and legal paragraphs, About blocks, item descriptions |
| `body-compact` | `text-[13px]` | 13 | 400 | 0 | Sidebar subcategory and tool rows, ToolCard description (`leading-relaxed`), breadcrumbs |
| `body-sm` | `text-xs` | 12 / 16 | 400 | 0 | Meta, captions, helper text, footer links, counts, search group labels |
| `label-md` | `text-sm font-medium` | 14 / 20 | 500 | 0 | Form labels, nav links, buttons, sidebar categories, jump chips |
| `eyebrow` | `text-xs font-medium uppercase tracking-wide` | 12 / 16 | 500 | 0.025em | In-tool option-group labels, table headers, result labels |
| `overline` | `text-[11px] font-semibold uppercase tracking-wider` | 11 / 16 | 600 | 0.05em | Footer column titles, sidebar widget titles, form labels in modals |
| `micro-caps` | `text-[10px] font-medium uppercase tracking-wide` | 10 / 12 | 500 | 0.025em | "Sponsored", "Featured sponsor" labels, right-rail section labels |
| `code` | `font-mono text-sm` | 14 / 20 | 400 | 0 | Editors, code blocks |
| `code-sm` | `font-mono text-xs leading-relaxed` | 12 / 19.5 | 400 | 0 | Output lists, hex values, format chips, locale codes |
| `numeric-display` | `text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums` | 30-36 | 800 | -0.025em | Calculator result heroes, stat boxes |

### 5.3 Rules

1. **Exactly one H1 per page**, always `PageHeader` (or the homepage hero). `ToolWorkbench` can render its own H1; never pass it a title on a page that already has `PageHeader`.
2. **Heading level follows structure, size follows context.** An H2 inside a Card is 18px; a free-standing H2 is 20px; an H2 inside long-form prose is 24px. ToolCard titles take the `level` the section needs (`level={3}` under a section heading).
3. **Weights**: 400, 500, 600, 700. 800 is reserved for `numeric-display`. Never use 300 or 900. The homepage H1 is 600, not 700.
4. **Tracking**: `h1`, `h2`, `h3` get -0.015em globally; `tracking-tight` on 24px and up; uppercase labels always get positive tracking. Body is never tracked.
5. **Text floor (normative)**: readable content is never below 12px, with 13px used for dense lists. 10px and 11px exist only as uppercase `micro-caps` and `overline`. Nothing is ever set below 10px.
6. **Opacity floor (normative)**: never apply opacity modifiers (`text-muted-foreground/50`, `/60`, `/70`) to text a user needs to read. `text-muted-foreground` is the lowest text tier; reduced-opacity text is for decorative glyphs (breadcrumb `/` separators), disabled states and the logotype. Ink at reduced opacity (`text-foreground/80`, `/75`) is allowed for secondary chrome text because it stays above 7:1.
7. **Numbers**: counts, stats, sizes and anything in a column use `tabular-nums`.
8. **Measure**: long-form text is capped at about 72ch (`max-w-[72ch]`). Page descriptions are capped at `max-w-3xl`, the homepage subline at `max-w-2xl`.
9. **Truncation**: single-line titles in lists use `truncate` with `title`; card descriptions use `line-clamp-2`; excerpts use `line-clamp-3`. Always provide the full text via `title` or the destination page.
10. **Case**: Title Case for H1, tool and category names and button labels. Sentence case for H2s inside the shell (homepage "Browse", search group labels), descriptions, helper text and messages. Keep one style per surface.
11. **Wrapping**: headings balance, paragraphs wrap pretty (4.4); do not add manual line breaks to headings.

---

## 6. Spacing, Layout and Grid

### 6.1 Scale

A 4px base unit (Tailwind default spacing). Most used values: `p-3`/`p-4` for panels and cards, `px-3 py-2` for controls, `gap-2`/`gap-3`/`gap-4` inside components, `gap-6` between page blocks.

| Token | px | Tailwind | Typical use |
|---|---|---|---|
| `hair` | 2 | `0.5` | Badge vertical padding, active bars |
| `xs` | 4 | `1` | Icon-to-text in tight chips, `Stack xs`, nav item gaps |
| `sm` | 8 | `2` | Default inner gap, `Stack sm`, control vertical padding |
| `inset-tight` | 12 | `3` | ToolCard icon gap, compact panels, alerts, file rows |
| `md` / `inset-panel` | 16 | `4` | ToolCard padding, panels, grid gaps, page gutter on mobile |
| `lg` / `inset-card` | 24 | `6` | Card padding, **gap between tool-page blocks**, page gutter at md+ |
| `xl` | 32 | `8` | Homepage section rhythm, dropzone padding |
| `2xl` | 40 | `10` | Article/sidebar gutter, footer vertical padding |
| `3xl` | 48 | `12` | Empty and loading states |
| `4xl` | 64 | `16` | Homepage hero to browse grid (`space-y-16`), 404 padding |

### 6.2 Layout primitives (`src/components/layout-primitives`)

Use these instead of ad hoc flex/grid wrappers. (Aback UI equivalent: `Layout`.)

| Primitive | Classes | Notes |
|---|---|---|
| `Stack gap=` | `flex flex-col` + `xs gap-1`, `sm gap-2`, `md gap-4` (default), `lg gap-6`, `xl gap-8` | `gap="lg"` is the mandatory top-level wrapper of every tool page |
| `Group` | `flex flex-row flex-wrap` + gap, `align` (default center), `justify` | Toolbars, action rows |
| `Grid cols=` | 1: `grid-cols-1`; 2: `1 / sm:2`; 3 (default): `1 / sm:2 / lg:3`; 4: `1 / sm:2 / lg:4`; 6: `2 / sm:3 / lg:6` | Card grids |
| `Container size=` | `mx-auto w-full px-4` + sm `max-w-2xl`, md `max-w-4xl`, lg `max-w-6xl` (default), xl `max-w-7xl` | Standalone pages only (404). Never inside tool pages |

`src/components/layout/primitives/Stack.tsx` (numeric `gap-${n}`) is a deprecated duplicate whose dynamic class names Tailwind cannot detect.

### 6.3 App shell

```
+--------------+----------------------------------------------+-------------+
| SIDEBAR      | NAVBAR sticky h-16, bg-background/80 blur-xl  |             |
| fixed w-64   | [search field] .......... Blog Guides | Feedback Support | EN | theme
| bg-sidebar   +----------------------------------------------+ RIGHT RAIL  |
| md and up    | MAIN #main-content p-4 md:p-6                 | fixed       |
|              |   Stack gap-6 ... page content                | w-60 lg     |
| logo strip   |                                              | w-72 xl     |
| h-16         |                                              | featured x2 |
| category tree|                                              | standard x4 |
| (scroll,     |                                              | ...         |
|  faded ends) +----------------------------------------------+ share       |
| N Free Tools | FOOTER border-t separator, stops at rail     | newsletter  |
| (h-11)       |                                              |             |
+--------------+----------------------------------------------+-------------+
| SPONSOR BAR fixed bottom-0, h-11, from the sidebar edge to the right edge  |
+---------------------------------------------------------------------------+
                one continuous 1px rail divider (z-30), lg and up
```

- **Document scroll is native.** No `h-screen overflow-hidden` shells and no inner scroll containers for page content.
- **Sidebar**: `hidden md:flex fixed top-0 left-0 z-30 h-screen flex-col border-r border-separator bg-sidebar w-64`, collapsible on desktop to `w-0` (`transition-[width] duration-300`). Below `md` it becomes a left `Sheet` drawer, `w-72`, which keeps its own search field.
- **Content column**: `md:ml-64`, applied before hydration so there is no layout shift.
- **Navbar**: `sticky top-0 z-40 h-16`, translucent canvas with blur (11.3).
- **Main**: `p-4 md:p-6`, fluid, **no max-width** on tool and listing pages.
- **Right rail**: `hidden lg:block w-60 xl:w-72 print:hidden`; its content is fixed below the navbar (`top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20`) with sponsors pinned to the top and share plus newsletter pinned to the bottom (`mt-auto`, `pb-14` to clear the sponsor bar). No background.
- **Rail divider**: a single absolutely positioned `w-px bg-separator` from `top-16` to the bottom of the document, `z-30`. Never give the rail or footer their own vertical border.
- **Footer**: inside the content column with `lg:mr-60 xl:mr-72` so it ends at the rail. The wrapper owns the only top border.
- **Sponsor bar**: rendered by `MainLayout` (not the footer, whose `contain: layout` would pin a fixed child to the footer), `fixed bottom-0 right-0 left-0 md:left-64` (left edge follows the sidebar), `z-40 h-11`, plus an in-flow `h-11` spacer so it never covers the end of the page. Its top rule lines up with the sidebar's `h-11` footer strip, so the two read as one strip along the bottom of the screen.

### 6.4 Effective content width

Because the sidebar and rail are fixed, the usable column is narrower than the viewport:

| Viewport | Sidebar | Rail | Main padding | Content width |
|---|---|---|---|---|
| 375 | 0 | 0 | 32 | 343px |
| 768 (md) | 256 | 0 | 48 | 464px |
| 1024 (lg) | 256 | 240 | 48 | **480px** |
| 1280 (xl) | 256 | 288 | 48 | 688px |
| 1440 | 256 | 288 | 48 | 848px |
| 1920 | 256 | 288 | 48 | 1,328px |

Viewport breakpoints over-predict available width between 1024 and 1279px. For new grids, prefer container queries (`@container`, `@xl:grid-cols-3`) or start three columns at `xl`. Two-pane tool layouts split at `xl` (`xl:grid-cols-2`) unless each pane is compact.

### 6.5 Breakpoints

Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. Mobile first. Sidebar appears at `md`; navbar search field from `sm` (an icon button below); Blog and Guides links and the right rail at `lg`; the language endonym at `lg` (the locale code below it); rail widens and article sidebars (ToC) appear at `xl`; the homepage grids add a fifth column at `2xl`.

### 6.6 Standard grids

| Context | Classes |
|---|---|
| Homepage category tiles | `grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5` |
| Tool cards (popular, home per category) | `Grid cols={3} gap="md"`, popular adds `2xl:grid-cols-4` |
| Hub jump list | `flex flex-wrap gap-2` |
| Features (4 items) | `grid grid-cols-1 md:grid-cols-2 gap-6` |
| Use cases (6 items) | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` (or wider gaps; items carry no box) |
| Related tools | `grid grid-cols-1 sm:grid-cols-2 gap-4` |
| Name-only link lists (hubs) | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5 text-sm` |
| Stat tiles | `grid grid-cols-2 sm:grid-cols-4 gap-3` |
| Options panel | `grid grid-cols-1 md:grid-cols-3 gap-4` |
| Blog cards | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` (index uses `gap-5`) |
| Sponsor strip (phones) | featured `grid gap-2 sm:grid-cols-2`, standard `grid gap-2 sm:grid-cols-2` in a `border bg-card/50 p-3` panel |
| Chips | `flex flex-wrap gap-2` |

### 6.7 Z-index

From `src/config/theme.ts` plus the shell: footer 10, rail 20, sidebar and rail divider 30, navbar and sponsor bar 40, modal backdrop 45, modal 50 (the search dialog overlay and panel use `z-50`), popover 60, tooltip 70, toast 80, max 100. Reading-progress bars currently use `z-[200]` and `z-[9999]`; new work uses `max` (100).

---

## 7. Shape: Square Corners

Every radius is 0 (owner, reaffirmed 2026-11-15). `globals.css` sets `--radius: 0` in `:root` and `--radius-sm` through `--radius-6xl` to 0 inside `@theme inline`, and overrides `.rounded-full { border-radius: 0 }`. As a result `rounded-sm`, `-md`, `-lg`, `-xl`, `-2xl` and `-full` all render square. It matches the sharp-cornered OG art and Aback UI.

Rules:
- **New code does not write radius classes at all.** Existing `rounded-*` classes are inert and may be removed when a file is touched (the revamped sidebar and sponsor cards still carry inert `rounded-md`/`rounded-lg`; Appendix A, R4).
- Three things still leak a radius and must not be used: bare `rounded` (renders 4px), `rounded-xs` (2px; Aback UI zeroes `--radius-xs`, Aback Tools does not yet), and side pills `rounded-l-full` / `rounded-r-full` / `rounded-t-full` (render as full pills). Inline `borderRadius` in JSX is also banned for UI chrome.
- Circular affordances are square: avatars, step markers, status and live dots, switch thumbs, slider thumbs, spinners, remove badges. Design them to read well as squares.
- Nothing in the interface is rounded, including the scrollbar thumb.
- Tool **output** may contain radius when radius is the subject (a "rounded corners" image tool, a CSS `border-radius` generator preview). That is content, not chrome.
- Note for the family: Aback Chess deliberately rounds its controls on top of `@aback-ui/ui`. That is a Chess product decision, not a system change.

---

## 8. Borders, Elevation and Overlays

### 8.1 Border hierarchy

| Weight | Class | Use |
|---|---|---|
| 1px Hairline | `border` (= `border-border`) | Cards, tool cards, tiles, panels, chips, dividers inside components, `divide-y` lists, sidebar tree guides |
| 1px Separator | `border-separator` | Shell chrome rules: navbar, sidebar edge, logo strip, sidebar footer, footer, sponsor bar |
| 1px Input | `border-input` | Text inputs, selects, checkboxes, search fields |
| 2px | `border-2` | Dropzone (dashed), result hero, featured sponsor card (sponsor accent) |
| 2px left accent | `border-l-2 border-primary-500` | Active ToC item |
| 2px marker | `before:w-0.5 before:bg-primary` | Active sidebar tool row, on the tree guide |
| 4px left rule | `before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-primary` | Brand-rule cards: blog tool CTA, featured post |
| 4px left accent | `border-l-4 border-primary-300 dark:border-primary-500` | Blockquote |
| Dashed | `border-2 border-dashed` | Dropzones only |

ToolCard used to have a 2px border; it is 1px since the revamp. Inner structure uses `divide-y` rather than stacked borders. Never draw two adjacent borders.

### 8.2 Elevation levels

Depth comes from borders and the white-card-on-cool-canvas contrast first. Shadows are light and always paired with a border.

| Level | Recipe | Use |
|---|---|---|
| 0 Flat | border only | ToolCard, category tiles, chips, sponsor cards, list rows, sidebar, navbar |
| Card | `shadow-card` (`--shadow-card`) or `shadow-sm` (shadcn `Card`) / `shadow-xs` (outline buttons, inputs) | Every `Card`: editorial sections, workbench |
| Lift | `shadow-lift` (`--shadow-lift`) | The homepage hero search field |
| Floating | `shadow-lg` | Menus and dropdowns (LocaleSwitcher), sheets |
| Modal | `shadow-[0_32px_80px_-20px_rgb(0_0_0/0.45)]` (search dialog) or `shadow-2xl` (form modals) | Dialogs |

Dark values of `--shadow-card` and `--shadow-lift` are stronger black shadows (front matter); they are barely visible on true black, which is intended.

Rules:
- Hover never adds a shadow on directory grids. Elsewhere, a hover may go at most one level up (`hover:shadow-md` on blog cards).
- No coloured shadows.
- `drop-shadow` is allowed only on text placed over user colours (swatch labels).

### 8.3 Overlays and blur

- Search dialog backdrop: `bg-slate-950/50 backdrop-blur-[2px]`. Form modals and sheets: `bg-black/50 backdrop-blur-sm`.
- Translucent chrome: the sticky navbar (`bg-background/80 backdrop-blur-xl backdrop-saturate-150`) and the sponsor bar (`bg-background/85 backdrop-blur-xl`). No other blur on in-flow content.

### 8.4 Gradients and light

The product has almost no gradients. Allowed instances:
- **Homepage hero streak**: one wide, flat ellipse of the action blue behind the hero, fading out on every side so it has no edge: `radial-gradient(ellipse 100% 42% at 50% 34%, color-mix(in oklch, var(--primary) 11%, transparent) 0%, color-mix(in oklch, var(--primary) 6%, transparent) 45%, transparent 100%)`. It uses `--primary`, so it follows light and dark. No grid, mesh, dots or second glow (owner, 2026-11-15).
- Reading progress bars: 3px `from-primary-400 to-primary-600` (blog) and `from-primary-500 via-primary-400 to-primary-600` (guides).
- Batch progress fill: `from-primary-500 to-primary-400`.

Removed in the revamp: the sidebar logo and tool-count strip washes, the search dialog's top bar, and the blog's featured hero, tool CTA, series banner and takeaway gradients. The 404 hero still has a legacy `bg-gradient-to-br` wash (Appendix A, R6).

No multi-hue gradients, no gradient text, no gradient buttons.

---

## 9. Iconography

### 9.1 Library

**Tabler Icons only** (`@tabler/icons-react`, outline style). Lucide is installed but deprecated (Appendix A). Filled Tabler variants (`IconHeartFilled`) are allowed for single emphasis marks. Do not draw inline SVG icons except third-party brand marks and the "Ask AI" logos in the footer. Aback UI uses the same library.

Stroke: **1.75** on directory icons (ToolCard, category tiles, hub headers: `stroke={1.75}`), the default 2 elsewhere.

### 9.2 Sizes

| Size | Class | Use |
|---|---|---|
| 12px | `h-3 w-3` | Arrows in compact links |
| 14px | `h-3.5 w-3.5` | Meta icons (date, read time), share buttons |
| 16px | `h-4 w-4` | Default in buttons, nav, inputs, the navbar search field, search dialog chevrons |
| 18px | `h-[18px] w-[18px]` | Sidebar category icons, search dialog result icons |
| 20px | `h-5 w-5` | ToolCard and category tile icons, feature and use-case icons, hero search icon, theme toggle, mobile menu, card-title icons, FAQ chevrons |
| 24px | `h-6 w-6` | Hub header category icon, dropzone upload icon |
| 48px | `h-12 w-12` | Empty and loading states (at `opacity-30`) |

shadcn `Button` auto-sizes child SVGs to 16px (`[&_svg]:size-4`).

### 9.3 Icons are drawn bare

Since the revamp (owner, 2026-11-15) **icons have no tinted box behind them**:
- Directory icons (ToolCard, category tiles, hub headers, sidebar current category, search rows) take their **category accent** (3.6).
- Editorial icons (FeatureItem, UseCaseItem, InfoBlock, workbench titles) are `text-primary-600 dark:text-primary-400`, aligned to the first line with `mt-0.5`.
- Older tool UIs that still wrap a lone icon in `bg-primary-50/100` render bare through the global rule in 4.4. Boxes holding text (step numbers, initials) keep their fill.
- Icon-only buttons are 36px (`size-9`) with a 16-20px glyph and an `aria-label`.
- Colour and icons are welcome in moderation: the owner rejected an all-grey, text-only pass as too stark. Use them where they help scanning; never decorate every row.

### 9.4 Registry and category icons

Tool and category icons are strings resolved by `getIcon()` in `src/config/icons.ts` (fallback `IconSettings`). Every icon name used in a category config must be registered there, or the static export fails.

| Category | Icon | Category | Icon |
|---|---|---|---|
| ai | IconSparkles | image | IconPhoto |
| audio-video | IconVideo | math | IconMathFunction |
| calendar | IconCalendar | network | IconNetwork |
| compress | IconFileZip | obfuscator | IconShieldLock |
| crypto | IconShieldLock | payment | IconMoneybag |
| data | IconBraces | pdf | IconFileTypePdf |
| deobfuscator | IconEye | productivity | IconBolt |
| design | IconPalette | science | IconFlask |
| file | IconFileUnknown | text | IconTypography |
| tip-calculators | IconCash | web | IconWorldWww |

(From `src/config/tools-nav.ts` on `production`.) Crypto and obfuscator still share `IconShieldLock`.

### 9.5 Glyph rules

- `IconArrowRight` for "go" affordances, `IconChevronRight` for list rows and the selected search row, `IconChevronDown/Up` for disclosure.
- Breadcrumb separators are a text `/`, not a chevron. Sidebar disclosure is a mono `+` / `−` (U+2212), not a chevron.
- Use `IconBrandX`, not `IconBrandTwitter`.
- No emoji in UI chrome. Unicode check and cross marks are allowed inside comparison table cells, coloured with the status text recipe.

---

## 10. Motion

| Token | Value | Use |
|---|---|---|
| instant | 100ms | Search dialog exit |
| fast | 150ms | Search dialog enter, ToC item, small hovers |
| base | 200ms | **Default**: colour transitions, accordions, form dialogs |
| slow | 300ms | Sheet close, result fade-in, progress fill, sidebar collapse |
| drawer-open | 500ms | Sheet open |
| theme-reveal | 600ms `cubic-bezier(0.4, 0, 0.2, 1)` | Theme switch circle (4.1) |
| marquee | 48s linear infinite | Footer badge marquee (homepage) |

Patterns:
- **Directory hover (ToolCard, category tiles, jump chips, sponsor cards)**: colour only, **no transition and no movement**. Lighthouse flags animated non-composited properties on large grids, and the lift (`-translate-y-1`) was retired in the revamp.
- **Chrome hover** (nav items, sidebar rows): `transition-colors` at the default duration. Never `transition-all`.
- **Arrow nudge**: `group-hover:translate-x-0.5` (or `translate-x-1` on 20px arrows).
- **Press**: `active:scale-[0.98]` on primary actions.
- **Enter/exit**: `tw-animate-css`. Search dialog `fade-in slide-in-from-top-2` 150ms in, `fade-out` 100ms out; form modals `fade-in zoom-in-95 slide-in-from-bottom-4`; new results `fade-in duration-300`.
- **Loading**: `animate-spin` on `IconRefresh` or `IconLoader2`; `animate-pulse` on skeleton blocks, sponsor placeholders and sidebar loading marks.
- **Reduced motion (normative)**: every non-essential animation stops under `prefers-reduced-motion` (`motion-reduce:animate-none`, `motion-reduce:transition-none`). The theme reveal and the marquee already do. Aback UI's `tokens.css` does this globally; Aback Tools does it per component until it imports the tokens.

---

## 11. Component Specifications

Shared components live in `src/components/ui` (shadcn new-york, several rewritten as native elements), `src/components/common` (Aback building blocks, import from the `@/components/common` barrel), `src/components/layout` (shell), `src/components/home` (homepage), `src/components/tools` (directory) and `src/components/sponsors`. Always reuse these before writing markup, and check Aback UI (0.3) before writing a new shared component.

### 11.1 Buttons (`ui/button.tsx`)

Base: `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50`, child SVGs 16px.

| Variant | Classes | When |
|---|---|---|
| `default` (Primary) | `bg-primary text-primary-foreground hover:bg-primary/90` | **The** main action of a tool ("Convert", "Calculate", "Generate"), and filled CTAs outside the workbench (404, blog tool CTA, newsletter Subscribe). Aback Blue. One per workbench |
| `outline` | `border bg-background shadow-xs hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50` | Secondary actions: Download, Upload, Reset, Copy in toolbars. Most used variant in tools |
| `secondary` | `bg-secondary text-secondary-foreground hover:bg-secondary/80` | Low-emphasis filled actions |
| `ghost` | `hover:bg-accent dark:hover:bg-accent/50` | Icon buttons in chrome, inline copy, close |
| `destructive` | `bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive/60` | Clear all, remove all |
| `link` | `text-primary underline-offset-4 hover:underline` | Renders the action blue. For body links use the link recipe (3.3) |

The separate "brand fill" recipe (`bg-primary-700 text-white`) from October 2026 is retired: the default variant is now the brand fill. Legacy `bg-primary-500/600 text-white` buttons are repainted to match by the 4.4 override.

| Size | Height | Padding | Notes |
|---|---|---|---|
| `xs` | 24 | `px-2`, `text-xs` | Inline row actions |
| `sm` | 32 | `px-3` | Toolbar actions above editors (Copy, Download) |
| `default` | 36 | `px-4` (`px-3` with icon) | Standard |
| `lg` | 40 | `px-6` | Prominent single actions |
| `icon` / `icon-sm` / `icon-lg` / `icon-xs` | 36 / 32 / 40 / 24 square | | Must have `aria-label` |

Shared wrappers:
- **ActionButton** (`common/ActionButton`): `Button` plus `loading` (swaps the icon for `IconRefresh h-4 w-4 animate-spin`, shows `loadingLabel` such as "Converting…", disables the button). Use it for every primary tool action. (Aback UI: `Button loading loadingText`.)
- **CopyButton**: ghost, `sm`; `IconCopy` swaps to `IconCheck` with "Copied" for 2s; labels from i18n `common.copy/copied`; disabled when empty.
- **DownloadButton**: outline, `sm`, `IconDownload`, builds a Blob; disabled when empty.

Rules: one primary (blue) button per workbench; action rows are `flex flex-wrap gap-2` (or `gap-3`, centred for single CTAs with `min-w-[220px]`); never hand-roll `<button>` styling for actions; never use gradient buttons.

### 11.2 Form controls

| Control | Spec |
|---|---|
| Text input (`ui/input`) | `h-9 w-full border border-input bg-transparent px-3 py-1 text-base md:text-sm shadow-xs dark:bg-input/30 placeholder:text-muted-foreground`; invalid `aria-invalid:border-destructive aria-invalid:ring-destructive/20` |
| Label (`ui/label`) | `text-sm font-medium leading-none`, peer-disabled opacity 70% |
| LabeledInput | `flex flex-col gap-1.5`: Label, Input, helper `text-xs text-muted-foreground`; required star `text-destructive` after the label |
| Select (`ui/select`, LabeledSelect) | Native `<select>`, `appearance-none border border-input bg-background pl-3 pr-8 text-sm`, chevron at right 8px. **Standard height 36px** (currently `h-10`) |
| Number input | `ui/input type="number"` with `tabular-nums`; LabeledNumberInput's raw `h-10` input is deprecated |
| Code editor (TextInputBox) | Label row `flex items-center justify-between` (label `text-sm font-medium`, optional Upload outline `sm`), textarea `h-80 w-full resize-none border bg-background p-3 font-mono text-sm`; error `border-destructive` |
| Code output (TextOutputBox) | Same frame, `readOnly`, `bg-muted/50`, toolbar with CopyButton and DownloadButton |
| Textarea (TextAreaInput, `ui/textarea`) | `border border-input p-3 text-sm resize-y`, `font-mono` for data input, `min-h` from rows |
| Checkbox (`ui/checkbox`) | Native 16px square, `accent-primary-600`, `border-input` |
| CheckboxGroup | Group label `text-sm font-semibold`, grid `gap-2` (1/2/3 cols), row `flex items-center gap-2 p-2 text-sm hover:bg-muted/50` |
| Switch (`ui/switch`) | `role="switch"`, track 36x20 `bg-input`, checked `bg-primary` (now blue), square 16px thumb |
| Slider (`ui/slider`) | Track 8px `bg-secondary`, fill `bg-primary`, 16px square thumb with `border-2 border-background`. Must receive a real `aria-label` |
| Example / preset chips | Outline `xs` buttons or the jump-chip recipe with `font-mono text-xs`; never hand-rolled pills |
| Selected option (segmented choices in tools) | `bg-primary text-primary-foreground` (legacy `bg-primary-500 text-white` is repainted by 4.4). Aback UI: `SegmentedControl`, `ToggleGroup` |

All controls: 36px height (normative alignment), `text-sm`, placeholder in `text-muted-foreground`, disabled `opacity-50 cursor-not-allowed`, focus per 14.3. Labels are always visible; placeholders are examples, not labels.

### 11.3 Shell and navigation

**Navbar** (`layout/Navbar.tsx`): `sticky top-0 z-40 flex h-16 items-center gap-2 sm:gap-3 border-b border-separator bg-background/80 px-3 md:px-6 backdrop-blur-xl backdrop-saturate-150`. Left to right:
1. Phones: menu ghost icon button (`md:hidden`, `IconMenu2` 20px) and the logo mark (`Logo showText={false} size="sm"`).
2. **Search first**: `SearchBar` (`hidden max-w-md sm:flex`), the fastest way to any tool, also on ⌘/Ctrl+K. Hidden on the homepage, which has its own large field. Below `sm` an icon button (`IconSearch`) opens the dialog.
3. Content sections (`nav aria-label="Site"`, `hidden lg:flex gap-1`): **Blog, Guides**. Developers is unlinked until the owner makes it public (pages unchanged).
4. Utilities (`flex gap-1`): **Feedback** (`hidden md:flex`, opens FeedbackModal), **Support Us** (`hidden sm:flex`), a `mx-2 h-5 w-px bg-border` divider, LocaleSwitcher, ThemeToggle.
- **Nav item** (one style for every text link): `h-9 items-center px-3 text-sm font-medium transition-colors`; idle `text-muted-foreground hover:bg-muted hover:text-foreground`; current `bg-primary/10 text-primary` with `aria-current="page"`. The current page is a tinted square box, not an underline. (Aback UI's site header uses the same boxed style.)

**ThemeToggle**: 4.1.

**LocaleSwitcher**: a text switcher, no globe icon. Trigger `h-9 px-2.5 gap-1.5 text-sm font-medium text-muted-foreground hover:bg-muted`: the locale code in `font-mono text-xs uppercase tracking-wider` below `lg`, the endonym from `lg`. Menu `absolute right-0 top-full mt-2 w-52 z-50 border bg-card shadow-lg`; rows `px-3.5 py-2.5 text-sm` with the endonym and the code in `font-mono text-[11px] uppercase tracking-wider text-muted-foreground` at the right. Closes on Escape and outside click; add arrow-key navigation (Appendix A).

**Sidebar** (`layout/Sidebar.tsx`):
- Logo strip: `flex h-16 items-center border-b border-separator px-5` with the `md` lockup. No gradient.
- No search strip on desktop (search is in the navbar); the phone sheet keeps one (`px-3 py-3 border-b border-separator`).
- Category tree in a Radix ScrollArea (`data-sidebar-scroll`) with a mask fade (32px top, 56px bottom), content `px-3 pt-6 pb-6 pr-4`, `nav space-y-0.5`.
- **Category row**: `text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground`; link `px-2.5 py-2 gap-3` with an 18px icon in `text-muted-foreground`; a separate 32px toggle (`h-8 w-8 text-muted-foreground hover:bg-foreground/5`) showing a mono `+` or `−`. **Current category** (contains the current tool): `bg-accent text-foreground font-semibold`, icon in its category accent.
- **Subcategory group**: `ml-[1.1rem] border-l border-border pl-2 py-0.5 space-y-0.5`; row `text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground`, link `px-2 py-1.5`, 28px toggle with a mono `text-xs` glyph; current subcategory `text-foreground font-medium`.
- **Tool row**: group `ml-4 border-l border-border pl-2`; row `relative px-2 py-1.5 text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground`, `truncate` with `title`; **current tool** `bg-primary/10 text-primary font-medium` plus a 2px `bg-primary` bar laid on the tree guide (`before:absolute before:-left-[9px] before:inset-y-0 before:w-0.5`), `aria-current="page"`.
- Loading a category: the toggle shows a 16px `animate-pulse bg-muted-foreground/20` block; a "Loading" row `text-xs italic`.
- **Footer strip** (fixed, not scrolled): `flex h-11 items-center border-t border-separator px-3` with one link, `flex h-8 w-full items-center justify-center text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-foreground`: "{exact count} Free Tools" to `/tools`. The exact `TOTAL_TOOL_COUNT` appears here; taglines round it (13.4). It aligns with the sponsor bar's top rule. The 88px ad reservation that used to sit here was removed with Mediavine.
- SEO: collapsed categories still render their subcategory links with `hidden`, so all hub links exist in the HTML.
- Mobile: the same content in a left `Sheet` (`w-72 p-0`), ghost close button top right, link clicks close the drawer.

**Breadcrumbs** (`common/Breadcrumbs.tsx`, canonical; `BreadcrumbNav` and `BreadcrumbsNav` are aliases): `nav data-breadcrumbs` > `ol.flex flex-wrap items-center gap-1 text-[13px]`; separators a text `/` (`mx-1.5 text-muted-foreground/50`, `aria-hidden`); links `text-muted-foreground hover:text-primary transition-colors duration-200`; current `text-foreground font-medium aria-current="page"`. In source they follow `PageHeader`; the class `[[data-page-header]+&]:order-first` with `-mb-2` **shows them above the H1** on tool and hub pages. Always paired with `BreadcrumbSchema`.

**Skip link**: first focusable element, `sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:border focus:shadow-lg focus:text-sm focus:font-medium`, target `#main-content`.

### 11.4 Search

**Search field** (`common/SearchBar.tsx`): a button drawn as a search field that opens the dialog (window `open-search` event). Two sizes:
- `md` (navbar, phone sheet): `group flex h-10 w-full items-center gap-3 border border-input bg-card px-3 text-left text-sm text-muted-foreground`, hover `border-foreground/25 text-foreground`, focus `focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15`; `IconSearch` 16px; a `kbd` "⌘K" (`hidden sm:inline-flex h-5 border bg-muted px-1.5 text-[11px] font-medium`).
- `hero` (homepage): `h-14 sm:h-[3.75rem] border border-input bg-card px-4 sm:px-5 shadow-lift`, hover `border-foreground/30`, focus `border-primary ring-4 ring-primary/20`; 20px icon; placeholder `text-base sm:text-[17px]` that names the exact count and two examples ('Search {count} tools, like "merge pdf" or "json"'); `kbd` `h-7 px-2 text-xs`. The navbar field's placeholder is "Search tools...", the dialog's "Search tools, guides, articles…".
- It opens on click and Enter, never on focus. Show "Ctrl K" on non-Apple platforms (Appendix A; Aback UI's `SearchTrigger` already does).

**Search dialog** (`common/SearchDialog.tsx`, Radix Dialog, mounted lazily on idle by `LazySearchDialog`, or immediately on ⌘/Ctrl+K):
- Overlay `fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-[2px]`, fade 150ms in, 100ms out.
- Panel **pinned near the top**: `fixed left-1/2 top-[8vh] sm:top-[12vh] z-50 flex max-h-[80vh] w-[calc(100vw-1.5rem)] max-w-[640px] -translate-x-1/2 flex-col overflow-hidden border border-border bg-popover shadow-[0_32px_80px_-20px_rgb(0_0_0/0.45)]`, `slide-in-from-top-2`. No gradient bar, no icon boxes.
- Input row `flex h-14 items-center gap-3 border-b px-4`: 20px `IconSearch`, input `text-base` with no border or ring, a clear button (`IconX`), an `esc` kbd that closes.
- Results: `role="listbox"`, `min-h-0 flex-1 overflow-y-auto pb-2`. **On open, before typing, it lists popular tools**, and arrow keys work straight away; under them a row of quick links (`mx-4 mt-3 border-t pt-3 text-sm gap-x-5`, `font-medium text-muted-foreground hover:text-foreground`).
- Group labels: `px-4 pb-1.5 pt-3 text-xs font-medium text-muted-foreground` (sentence case, not micro caps).
- **Row**: `role="option" aria-selected`, `mx-2 flex items-center gap-3 px-2.5 py-2`; selected `bg-accent`; an 18px bare icon (tool: category accent; guide: emerald `IconBook`; blog: violet `IconPencil`); title `truncate text-sm font-medium leading-tight`; description `mt-0.5 truncate text-xs text-muted-foreground`; subcategory `hidden md:inline max-w-[140px] truncate text-xs text-muted-foreground`; a 16px chevron visible on the selected row only.
- Query matches: `<mark>` `bg-transparent font-semibold text-primary`.
- No results: `px-6 py-12 text-center`, message `text-sm font-medium`, hint `text-sm text-muted-foreground max-w-xs`, and a square outline link `mt-5 h-9 border px-4 text-sm font-medium hover:border-foreground/30` to all tools.
- Footer `hidden sm:flex gap-4 border-t px-4 py-2 text-xs text-muted-foreground` with kbd hints (↑ ↓ navigate, ↵ open, esc close).
- Keyboard: ⌘/Ctrl+K toggles, arrows move, Enter opens, Escape closes. Rows are options in a listbox; add `aria-activedescendant` on the input (Appendix A).

**kbd**: `inline-flex h-5 min-w-5 items-center justify-center border border-border bg-muted px-1 font-sans text-[10px] font-medium text-muted-foreground`. (Aback UI: `Kbd`.)

### 11.5 Directory components

**ToolCard** (`tools/ToolCard.tsx`): the whole card is the link (`data-slot="card"`). `group flex h-full gap-3 border border-border bg-card p-4 text-card-foreground` plus the category's `hover` recipe; focus `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`. Children: the tool icon, bare, `mt-0.5 h-5 w-5 shrink-0` in the category's `text` colour, `stroke={1.75}`; then `flex min-w-0 flex-col gap-1` with the title (`CardTitle level`, `text-[15px] font-semibold leading-snug`) and description (`line-clamp-2 text-[13px] leading-relaxed`, muted). Hover changes colour only, with no transition; no lift, no shadow, no badge. (Aback UI: `Item` with `accent`.)

**Category tile** (homepage, `home/HomeHero.tsx`): `flex h-full items-center gap-3 border border-border bg-card px-4 py-3.5` plus the category `hover`; 20px icon (`stroke 1.75`, category `text`); name `block text-sm font-semibold leading-tight`; count `mt-0.5 block text-xs text-muted-foreground` ("N tools"). Tiles are sorted by tool count, largest first.

**CategoryHeader** (`tools/CategoryHeader.tsx`): `flex items-center gap-3`, the category icon bare at 24px in its accent (`stroke 1.75`), then `SectionHeader` (H2 `text-xl font-semibold`, description muted). A linked header turns its H2 `text-primary` on hover. On a hub page it does not link to the page itself and does not repeat the H1.

**Hub jump list** (`tools/ToolCategoryGridView.tsx`): a summary line `text-sm text-muted-foreground`, then `nav.flex flex-wrap gap-2` of chips to in-page anchors (`#sub-{category}-{sub}`): `inline-flex h-8 items-center gap-2 border border-border bg-card px-3 text-sm font-medium hover:border-foreground/30`, count `text-xs font-normal tabular-nums text-muted-foreground`. The all-tools page uses the same chip for subcategories.

**Hub subcategory section**: `scroll-mt-20 space-y-4`; header `flex items-baseline justify-between gap-4 border-b border-border pb-2` with H2 `text-lg font-semibold tracking-tight` (a link, `underline-offset-4 hover:underline`) and the count `text-sm tabular-nums text-muted-foreground`; then cards or name-only links; "View all" `inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline`.

**CompactToolLinks** (name-only lists on hubs, kept lightweight for page weight): `ul` grid per 6.6 or `flex flex-wrap` (inline), links in the link recipe with `hover:underline`.

**Link chip** (facets, A-Z letters, "Browse related groups"): the jump-chip recipe above. One chip recipe for all chip lists.

**Filter pill** (blog categories, stateful filters): `px-3.5 py-1.5 text-xs font-medium border bg-background text-muted-foreground hover:bg-muted`; active `bg-primary text-primary-foreground` with `aria-pressed="true"`.

**Tag**: `bg-muted px-2 py-0.5 text-xs text-muted-foreground truncate max-w-[7rem]`; brand tag `bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200`.

**Badge** (`ui/badge`): `inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold`, variants default (now blue), secondary, destructive, outline. Badges are labels, not buttons; no hover styles on non-interactive badges.

**Pagination** (blog index only): buttons `h-8 min-w-8 px-2 text-sm font-medium`, current `bg-primary text-primary-foreground`, disabled `opacity-40`, ellipsis "…". Listings otherwise avoid pagination; the catalogue is sliced by category, subcategory, facet and A-Z instead.

### 11.6 Tool workbench

The interactive area of a tool page (`UploadSection`, `ToolSection` or `GeneratorSection`).

**Workbench card** (canonical):
```tsx
<Card>
  <CardHeader>
    <CardTitle className="text-lg flex items-center gap-2">
      <IconPhoto className="h-5 w-5 text-primary-600 dark:text-primary-400" />
      Resize Image
    </CardTitle>
    <CardDescription>Short instruction in one sentence.</CardDescription>
  </CardHeader>
  <CardContent>
    <Stack gap="lg">{/* input, options, actions, results */}</Stack>
  </CardContent>
</Card>
```
- Card: `bg-card border shadow-sm py-6 gap-6`, header and content `px-6`. White on the cool canvas. Optional header band: `CardHeader className="border-b bg-muted/10"` with `CardContent className="pt-6"`.
- Do not use the glass variant (`bg-card/50 backdrop-blur-sm`) or `shadow-lg` on workbench cards.
- Multi-pane tools may use `ToolWorkbench` (`common/ToolWorkbench.tsx`): `border bg-card shadow-sm overflow-hidden` with stacked panes (`p-6 border-b`, middle pane `bg-muted/30`).

**Input**
- **DropZone / MultiDropZone**: `border-2 border-dashed border-muted-foreground/25 p-8 text-center cursor-pointer transition-colors hover:border-primary-300 hover:bg-muted/50 dark:hover:border-primary-600`; drag-over `border-primary-500 bg-primary-50 dark:bg-primary-900/30`. Content `flex flex-col items-center gap-3`: a 24px `IconUpload` in the brand icon colour (bare; legacy 48px chips render bare via 4.4), "Drop your file here" `font-medium`, "or click to browse" `text-sm text-muted-foreground`, accepted formats `text-xs text-muted-foreground`. Must be keyboard operable and localized. (Aback UI: `Dropzone`.)
- **Two-pane text tools**: `grid grid-cols-1 xl:grid-cols-2 gap-6` of TextInputBox and TextOutputBox.
- **File row** (FileInfo): `flex items-center justify-between p-3 border bg-muted/30`; name `font-medium truncate`, size `text-sm text-muted-foreground tabular-nums`, ghost 32px remove button with "Remove file" label.
- **Image preview**: `max-h-64 border object-contain bg-muted/30`; thumbnails 80px `object-cover border`; remove control always visible on touch.

**Options**
- Options panel: `border bg-muted/20 p-4 space-y-4`, or a grid `grid grid-cols-1 md:grid-cols-3 gap-4 border bg-muted/10 p-4`. (Aback UI: `Panel`.)
- Option heading: `text-sm font-semibold text-muted-foreground flex items-center gap-1.5` with a 16px icon, or the `eyebrow` style for dense panels.
- Selected option chips: `bg-primary text-primary-foreground` (11.2).
- Nested sub-panel: `border bg-card p-3`.
- Info note: `bg-muted/40 p-3 text-sm text-muted-foreground`; inline code `bg-background px-1 font-mono text-xs`.

**Actions**: an action row under the options (11.1). Primary ActionButton first.

**Results**
- Result block: `border p-4 space-y-3`, revealed with `animate-in fade-in duration-300`.
- **Result hero** (one headline number): `border-2 border-primary-200 bg-primary-50/50 p-6 text-center dark:border-primary-800 dark:bg-primary-950/30`; eyebrow `text-xs font-semibold uppercase tracking-widest text-primary-700 dark:text-primary-300`; value `numeric-display`; unit `text-base font-normal text-muted-foreground`.
- **Stat tiles**: grid per 6.6, tile `border bg-card p-3`, optional bare icon, label `text-xs text-muted-foreground`, value `text-sm font-semibold tabular-nums`. (Aback UI: `Stat`.)
- **Mono output list**: `max-h-[420px] overflow-y-auto border bg-muted/20 p-4 font-mono text-xs leading-relaxed`; per-row copy on hover and always on focus.
- **Key/value rows**: `divide-y`, row `flex px-3 py-2.5 hover:bg-muted/30`, key `font-mono text-xs text-muted-foreground min-w-[70px]`. (Aback UI: `DescriptionList`.)
- **Savings and deltas**: smaller output `text-green-700 dark:text-green-400`, larger output `text-amber-700 dark:text-amber-400`, always with a sign and percentage.
- **Batch progress** (BatchProgress): header `px-4 py-3 border-b bg-muted/20`; bar `h-2 bg-muted` with a `from-primary-500 to-primary-400` fill; per-file status icons (spinner primary, check green, x red, clock muted).

**Messages**
- ErrorMessage, SuccessMessage, warning and info use the status container recipes (3.4) with `p-3 text-sm`, a leading 16px icon, `role="alert"` for errors and `role="status"` for success. Place them directly under the control that caused them or above the result.

**Empty and loading states**
- Empty: `flex flex-col items-center justify-center border bg-muted/10 p-12 text-center text-sm text-muted-foreground`, 48px icon at `opacity-30`. Say what will appear and how to start.
- Loading: the same frame with the icon `animate-pulse`, or skeleton blocks `bg-muted animate-pulse` sized like the final content. Never collapse the area while loading.

### 11.7 Editorial sections (tool pages)

One `Card` per section, H2 in `CardTitle className="text-lg"`, no subtitle under the H2, never nested cards. Enforced by `scripts/audit-tool-ui.mjs`.

| Section | Content rule | Layout | Item spec |
|---|---|---|---|
| FeaturesSection "Why Use Our [Tool]?" | exactly 4 FeatureItems | `grid grid-cols-1 md:grid-cols-2 gap-6` | `flex gap-3`: bare icon `mt-0.5 shrink-0 text-primary-600 dark:text-primary-400`; H3 `font-semibold leading-snug text-foreground`; `mt-1 text-sm leading-relaxed text-muted-foreground` |
| UseCasesSection "Common Use Cases for [Tool]" / "When to Convert A to B" | exactly 6 UseCaseItems | multi-column grid (6.6) | **No box, no rule, no hover fill**: the same `flex gap-3` pattern as FeatureItem with the icon beside the text (used by about 4,000 tool files) |
| AboutSection "Understanding [Subject]" | exactly 4 InfoBlocks; last is "Privacy, Security & Availability" | `Stack gap="md"` | Icon mode: the FeatureItem pattern (H3 `mb-1 font-semibold`). Text mode: H3 `font-medium mb-2`, body `text-sm text-muted-foreground`; steps `ol.space-y-3` with run-in labels `font-semibold text-foreground` |
| RelatedToolsSection "Related Tools" | up to 8, same category | `grid grid-cols-1 sm:grid-cols-2 gap-4` | item `group block p-4 border bg-card transition-colors hover:border-primary-300 hover:bg-muted/50 dark:hover:border-primary-700`; title `font-medium truncate group-hover:text-primary-700`; description `mt-1 text-sm text-muted-foreground line-clamp-2`; arrow nudging right. Moving to ToolCard (with category accent) is allowed |
| FAQSection "Frequently Asked Questions" | at least 7, mirrored in `FAQSchema` | `div.divide-y` | FAQItem accordion: button `w-full flex items-center justify-between py-4 text-left font-medium hover:text-primary-700 dark:hover:text-primary-400`, chevron 20px muted; answer `text-sm text-muted-foreground pb-4`; first item open |

Accordion behaviour: closed answers stay in the DOM (SEO), expose `aria-expanded` and `aria-controls`, and must not clip long answers (avoid fixed `max-h-96`; use a grid-rows or `<details>` transition).

### 11.8 Long-form content (blog, guides, legal)

**Article layout** (BlogPostLayout, GuidePostLayout): `Stack gap="lg"`: Breadcrumbs (shown above), PageHeader, optional series banner, author/meta bar, then `flex gap-10 items-start` with the article (`min-w-0 flex-1`, body `space-y-8`, capped at 72ch) and an `xl`-only sticky aside (`w-[260px] sticky top-[68px] self-start space-y-5`, add `max-h-[calc(100vh-84px)] overflow-y-auto`). Use one aside width (260px) for blog and guides. (Aback UI: `article-layout` block, `Prose`.)

| Element | Spec |
|---|---|
| Lead | `text-base text-muted-foreground leading-relaxed` |
| H2 (BlogSection) | `text-2xl font-bold tracking-tight`, section `space-y-3 scroll-mt-24`, body `space-y-4` |
| H3 | `text-lg font-semibold scroll-mt-24 pt-2` |
| Paragraph | `text-sm text-muted-foreground leading-relaxed`; bold `font-semibold text-foreground` |
| Link | link recipe; external links open in a new tab with `rel="noopener noreferrer"` |
| Lists | `ml-6 space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc|list-decimal marker:text-muted-foreground/60` |
| Callout | `border p-4 space-y-1`, label `text-xs font-semibold uppercase tracking-wide`; info (brand), tip (emerald), warning (amber) |
| Blockquote | `border-l-4 border-primary-300 dark:border-primary-500 pl-4 py-1 italic text-muted-foreground` |
| Figure | `w-full border bg-muted`, caption `text-xs text-center text-muted-foreground`, real alt text |
| Key takeaways | flat, no gradient or glow: `border bg-muted/30 p-5 space-y-3 dark:border-primary-900/50 dark:bg-primary-950/20`, markers `primary-500` |
| Series banner | flat, no gradient: `border border-primary/25 bg-primary/5 p-5 space-y-4`, numbered square markers in the action blue |
| Step | 32px square marker `bg-primary text-primary-foreground text-xs font-bold`, 1px connector `bg-primary-200 dark:bg-primary-800`, H4 `text-base font-semibold` |
| Stat box | `grid gap-px border overflow-hidden`, cells `p-5 bg-muted/30 text-center`, value `text-3xl font-extrabold tracking-tight text-primary-700 dark:text-primary-400` |
| Code block | `figure border overflow-hidden`; bar `bg-zinc-100 dark:bg-zinc-800 border-b px-4 py-2` with filename (`font-mono text-xs`), language and a copy button; `pre bg-zinc-50 dark:bg-zinc-900 p-4 text-sm leading-relaxed overflow-x-auto` |
| Comparison table | wrapper `overflow-x-auto border`; `thead` `bg-muted/60 dark:bg-muted/30`, `th px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground`; zebra `bg-muted/20`, hover `bg-muted/30`; first column `font-medium text-foreground`; ✓ `text-green-700 dark:text-green-400`, ✗ `text-red-700 dark:text-red-400` |
| Divider | `hr border-t border-border` |
| Inline code | `bg-muted px-1 font-mono text-[0.9em]` |

**Sidebar widget**: `border bg-muted/20 dark:bg-muted/10 p-4 space-y-3`, title in `overline`. Variants: Table of contents, Article info, "Free tools", Share, Related guides.

**Table of contents**: header `pb-2 border-b` with `IconList` 16px primary-500 and "On this page"; items `w-full text-left px-3 py-1.5 text-xs leading-snug`; active `bg-primary-50 text-primary-700 font-semibold border-l-2 border-primary-500 pl-2.5` (dark `bg-primary-950/50 text-primary-300`); IntersectionObserver tracking, smooth scroll. Below `xl` a collapsible toggle `border bg-muted/40 px-4 py-3 text-sm font-semibold` sits above the article.

**Reading progress**: `fixed top-0 inset-x-0 h-[3px] pointer-events-none`, a primary gradient (8.4), transform `scaleX` (compositor only), `aria-hidden`. One implementation for blog and guides is the goal.

**Author and meta bar**: `flex flex-wrap items-center gap-3 p-4 border bg-muted/20`; 40px square avatar `bg-primary text-primary-foreground text-sm font-bold` with initials; name `text-sm font-semibold`; role `text-xs text-muted-foreground`; category tag; meta items `text-xs text-muted-foreground` with 14px icons.

**Brand-rule card** (featured post on the blog index, **Tool CTA in articles**): flat, no gradient or glow. The featured post adds a square "Featured" label in `bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wide`. `relative border border-border bg-card p-6` with a 4px left rule (`before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-primary`). The Tool CTA is `flex flex-col sm:flex-row sm:items-center justify-between gap-6`, a bare 20px `IconTools text-primary`, H4 `text-base sm:text-lg font-semibold tracking-tight`, a default (blue) button. Never adjacent to a sponsor slot.

**Content cards** (BlogPostCard, RelatedArticleCard, prev/next): `group flex flex-col gap-2 border bg-card p-5` (related `p-4`), hover `border-primary-300 shadow-md`; category tag, title `font-semibold leading-snug line-clamp-2 group-hover:text-primary-700`, excerpt `text-sm text-muted-foreground line-clamp-3`, CTA `text-xs font-medium` link recipe with arrow.

**Share controls**: one component everywhere. Pill row `inline-flex items-center gap-1.5 border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted` (X, LinkedIn, Copy link), or compact column rows `border px-3 py-2 text-xs`. Icons monochrome at rest, brand colour on hover; copied state swaps to `IconCheck` green for 2s; each control has an `aria-label`. (Aback UI: `ShareButtons`.)

**Legal pages** (LegalPageLayout): PageHeader, Breadcrumbs, last-updated tag (`bg-muted/50 px-3 py-1 text-xs text-muted-foreground`), sections (`space-y-3`, H2 `text-xl font-semibold`, body `text-sm text-muted-foreground leading-relaxed`), contact box `border bg-card p-4`, links in the link recipe.

### 11.9 Overlays

| Overlay | Spec |
|---|---|
| Search dialog | 11.4 |
| Form modal (FeedbackModal) | Radix Dialog (focus trap, Escape, return focus). Backdrop `bg-black/50 backdrop-blur-sm`; panel `w-full max-w-md max-h-[90vh] border border-border/50 bg-card shadow-2xl flex flex-col`, `fade-in zoom-in-95 slide-in-from-bottom-4 duration-200`; header `px-5 py-3.5 border-b` with a 36px `bg-primary/10` tile holding a `text-primary` icon, title `text-sm font-semibold`, subtitle `text-xs text-muted-foreground`, ghost close; body `p-5 space-y-4`; labels in `overline`; fields `border border-border/50 bg-background/50 px-3 py-2.5 text-sm`; choice chips `grid grid-cols-2 gap-1.5`, selected `bg-primary/10 text-primary border border-primary/30`; submit `bg-primary/90 text-primary-foreground hover:bg-primary`; footer `border-t bg-muted/20 px-5 py-2.5` with Esc hint; success view centred with `IconCheck` green |
| Picker modal (ToolSelectorModal) | `pt-[10vh]` top-aligned, `max-w-lg` panel, search row, list `max-h-[50vh]`, selected row `bg-primary/5 text-primary` with a `bg-primary/10` icon square and `IconCheck text-primary` |
| Sheet (mobile nav) | Radix Sheet, overlay `bg-black/50`, left panel `w-72`, `shadow-lg`, 500ms open / 300ms close |
| Menu (LocaleSwitcher) | 11.3 |

There is no global toast system. Feedback for copy, subscribe and similar actions is an inline state swap (label and icon change for 2s, or an inline status box). `ui/use-toast` exists for a few obfuscator tools only; do not spread it without adding a single accessible Toaster (Aback UI ships `toast` on sonner).

### 11.10 Right rail

Two groups in the fixed rail column (6.3):
1. **Top, on screen when the page opens** (`space-y-4 px-4 xl:px-5 pt-4`): `FeaturedSponsors` (2 featured slots, 88px each, `space-y-2`) then `RailStandardSponsors` (4 standard slots, 44px each, `space-y-1.5`, and a right-aligned `text-[11px]` "Advertise" link).
2. **Bottom, pinned with `mt-auto`** (`px-4 xl:px-5 pb-14`, `space-y-4`): `AdSlotRightRail` (inert anchor), **ShareSlot** (`micro-caps` label, five 36px icon buttons `border border-border/60 bg-card text-muted-foreground` for X, LinkedIn, Facebook, WhatsApp, Copy link, brand colours on hover), **NewsletterSignup** (label, `text-xs` blurb, email input `pl-8 py-2 text-xs border` with `IconMail`, full-width default (blue) button `text-xs`, inline success or error box).

The Support Us card was removed from the rail on 2026-11-12 to make room for sponsors; the same link is in the navbar and footer. If the stack outgrows the viewport, the auto margin collapses and the rail scrolls.

### 11.11 Footer

- Phones, pages without a tool: `FooterFeaturedSponsors` first (the featured cards the page has not shown yet), `px-4 pt-8 md:px-6 lg:hidden`.
- Main grid `px-4 md:px-6 py-10`, `grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4`:
  - **Brand**: 24px mark + "Aback Tools" (`text-sm font-semibold tracking-tight`), tagline `max-w-[34ch] text-xs leading-relaxed text-muted-foreground`, "From the maker" line with an underlined link, and the **usage line**: today's visitors and tool uses (`h-4 text-xs tabular-nums text-muted-foreground`, `aria-live="polite"`, from `/api/hit`; keeps its height while it loads).
  - **Ask AI**: ChatGPT, Claude, Perplexity, Grok deep links with 16px monochrome marks (`rel="nofollow noopener noreferrer"`). The prompt is neutral and must never instruct a model to prefer Aback.
  - **For AI agents**: llms.txt, llms-full.txt, ai.txt, AI Docs, auth.md, OAuth metadata, sitemap.xml, robots.txt. (Developers is unlinked until public.)
  - **Company**: About, How We Test (English only), Blog, Guides, Support Us, Contact, **Advertise** (`/advertise`).
- Column titles: `overline` (`mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`); links `text-xs text-muted-foreground transition-colors hover:text-foreground`, list `gap-2`.
- Legal bar: `bg-muted/40 px-4 md:px-6 py-3`, copyright left; Privacy, Terms, DMCA, a 12px divider and "Cookie settings" (`/privacy-policy#cookies`) right; stacks centred on mobile.
- Badge marquee: homepage only, `badge-marquee-track` 48s linear, pause on hover, `motion-reduce:animate-none`, 6% edge mask fade, badges `h-3 opacity-50 hover:opacity-70`, text links `text-[10px] text-muted-foreground`.

### 11.12 Sponsors and ad anchors

**Journey by Mediavine was removed from the code on 2026-11-12** (`workers-sponsors`, now `production`; the live site keeps it until that branch is deployed). All paid placements are Aback's own **sponsor slots** (`src/components/sponsors/SponsorCards.tsx`, prices and counts in `src/config/sponsors.ts`, mirrored by the API in `functions/lib/sponsors.js` and checked by `tests/functions/sponsors.test.ts`). Every page shows the same sponsors.

| Slot | Count, price | Where | Spec |
|---|---|---|---|
| Featured | 2, $49/mo | Top of the right rail (desktop); first after the tool on phones and tablets; above the footer on phones for pages without a tool | `group flex h-[88px] flex-col justify-between border-2 bg-card px-3 py-2 hover:bg-muted/50`, border in the sponsor's `accent_color` (else hairline); a `micro-caps` "Featured sponsor" label; logo, name `text-sm font-semibold truncate`, tagline `text-xs text-muted-foreground truncate` |
| Standard | 4, $19/mo | Right rail under the featured cards (desktop); after the tool on phones | `flex items-center gap-2.5 border bg-card px-3 hover:bg-muted/50`, 44px tall (48px in the phone strip); logo, name `text-sm font-medium`, tagline |
| Bottom bar (`supporter` tier) | 6, $9/mo | The fixed sponsor bar on every page | Bar `fixed bottom-0 z-40 h-11 border-t border-separator bg-background/85 backdrop-blur-xl px-3 gap-3`, a `micro-caps` "Sponsored" label, a sideways-scrolling `ul` (no scrollbar) of chips: filled `h-8 px-2 text-xs font-medium hover:bg-muted/60` with logo; open `h-7 border bg-card px-2 text-xs hover:border-primary/50` "Your brand here" + `$9/mo`. Always shown, no close button. `print:hidden` |

Rules:
- **Open slots are shown, not hidden**: each empty slot is its own square card or chip, "Your brand here" (`text-sm font-semibold`, `group-hover:text-primary`) with its views or price, linking to `/advertise` with that slot chosen.
- Sponsors load at run time from `/api/sponsors`; every slot keeps its fixed height while loading (`Pending`: `bg-muted/50` at the slot's size), so nothing moves.
- Links go through `/api/go/<slug>` (click count) with `target="_blank"` and `rel="sponsored noopener"` (the `SPONSOR_REL` constant).
- Logos: square, `object-contain bg-muted`; a missing logo becomes the sponsor's initial on its accent colour.
- A sponsor's colour may tint its own featured border and initial tile only.
- Never style content to look like a sponsor or a sponsor to look like content; labels ("Sponsored", "Featured sponsor") are always present.
- The `/advertise` page states audience numbers that must stay true (GA4 views without Singapore bots, Search Console 28 days); refresh them with the method in `docs/STATUS.md`.

**Ad slot anchors** (`src/components/ads/AdSlot*`): kept in templates as **position anchors** in the order of Section 12. They render nothing, except:
- `AdSlotT1` emits `<span hidden data-agent-tool-start>` and a `<noscript>` notice; `AdSlotT2` emits `data-agent-tool-end` and renders the phone `SponsorStrip`. Together they bracket the tool UI for agents (`src/lib/agent/markers.ts`).
- Never remove anchors from templates; the slot-coverage audit reads them.

---

## 12. Page Templates

All templates render inside MainLayout's `main` and start with JSON-LD (not visual). Every page has exactly one H1. Breadcrumbs appear above the H1 on tool, hub, blog and guide pages; the homepage has none.

### 12.1 Homepage (`/`, `/{locale}`)

`src/app/(site)/page-content.tsx` and `src/components/home/HomeHero.tsx`, in 7 locales.

1. **Hero** (`space-y-16` wrapper; the backdrop cancels `main`'s padding with `-inset-x-4 -top-4 md:-inset-x-6 md:-top-6` and extends `-bottom-40` so the light reaches the navbar and both edges): the hero streak (8.4) behind a centred `section.mx-auto max-w-3xl pt-6 sm:pt-14 text-center`:
   - H1 in `hero-display` (5.2).
   - Subline `mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground`, with the tool count in `font-semibold text-foreground`.
   - The hero search field (`SearchBar size="hero"`, `mx-auto mt-9 max-w-2xl`).
   - Popular shortcuts as plain links: `mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm`, a muted "Popular:" label, links `font-medium text-foreground/75 hover:text-primary` (PNG to JPG, Merge PDF, Compress PDF, Remove background, JSON formatter; other locales use the catalogue names).
   - **Usage line** (`HeroUsage`): `mt-6 flex h-5 items-center justify-center gap-2 text-sm tabular-nums text-muted-foreground`, a 6px `bg-emerald-500` square and "N tool uses in the last 30 days, N today". Hidden until the 30-day count reaches 1,000; keeps its height either way; `aria-live="polite"`.
2. **Browse** (`section aria-labelledby="home-browse" space-y-5`): H2 `text-xl font-semibold tracking-tight` and a right-aligned "{count} Free Tools" link (`text-sm font-medium text-muted-foreground hover:text-foreground`); then every category as a tile (11.5), largest first.
3. `Stack gap="xl" className="mt-10"`: **Popular Tools** (8 real favourites: PNG to JPG, HEIC to JPG, Merge PDF, Compress PDF, Background Remover, Image Resizer, JSON Formatter, QR Code Generator), [AdSlotH], **HomeToolsGrid** (per category: CategoryHeader, 6 ToolCards, "View all"; loads lazily behind a `contain-intrinsic-size` reservation), [AdSlotH], [AdSlotMultiplex].
4. Footer badge marquee (homepage only).

The navbar hides its own search field on the homepage. No carousel, no stats band, no illustration.

### 12.2 All tools (`/tools`)
PageHeader, Breadcrumbs, "Browse all tools A-Z" link, [AdSlotC], AllToolsGrid (per category: H2 `text-xl font-semibold` link + muted count, subcategory jump chips (11.5), 5 sample tool links, a plain "View all" link), [AdSlotC], [AdSlotMultiplex]. Text-first on purpose: no cards, minimal bytes.

### 12.3 Category hub (`/tools/{category}`) and subcategory hub (`/tools/{category}/{sub}`)
`Stack gap="lg"`: Breadcrumbs (shown above) + PageHeader, [AdSlotC], **a summary line and a jump list of subcategories** (11.5) instead of a header that repeats the H1, then `Stack gap="xl" pt-4` of subcategory sections (11.5) with ToolCards (category) or all tools (subcategory), "Browse by topic" link chips on subcategories with facets, [AdSlotC], [AdSlotMultiplex]. Thin hubs are `noindex, follow`. Hub link tests skip the in-page `#sub-` jump links, which are not child pages.

### 12.4 Facet page (`/tools/{category}/{sub}/{facet}`) and A-Z (`/tools/a-z`, `/tools/a-z/{letter}`)
Facet: Breadcrumbs + PageHeader, [AdSlotC], link list grid, "Browse related groups" chips, [AdSlotC], [AdSlotMultiplex]. A-Z index: letter chips (letter uppercase, count muted). Letter pages: link grid; add a letter strip and previous/next letter links.

### 12.5 Tool page (canonical anatomy)

```
JSON-LD: WebApplication + BreadcrumbSchema + FAQSchema
<Stack gap="lg">                         24px between every block, no wrappers
  PageHeader            H1 + description (states the local-processing promise)
  Breadcrumbs           Home / Tools / Category / Subcategory / Tool  (displayed above the H1)
  [AdSlotT1]            agent start marker + noscript notice
  Workbench             UploadSection | ToolSection | GeneratorSection (11.6)
  [AdSlotT2]            agent end marker + SponsorStrip (phones and tablets)
  FeaturesSection       4 items
  UseCasesSection       6 items
  AboutSection          4 InfoBlocks
  RelatedToolsSection   up to 8
  [AdSlotT3]
  FAQSection            7+ items
  [AdSlotMultiplex]
</Stack>
```

Hard rules (checked by `scripts/audit-tool-ui.mjs` and `docs/tools/tools-structure.md`):
- The only top-level wrapper is `<Stack gap="lg">`. No `<main>`, no `min-h-screen`, no `max-w-*`, no `px/py/space-y/my-*` wrappers around sections.
- All four anchors present in this order.
- Editorial sections use the Card pattern with their primitives (FeatureItem, UseCaseItem, InfoBlock, FAQItem), the required grids, and `divide-y` for FAQ.
- The H1 names the tool with its key phrase ("PNG to JPG Converter"); the workbench title is a short verb phrase.
- Legacy shells `ToolLayout` and `ToolPageLayout` (nested `<main>`, `max-w-7xl`) are deprecated. `ToolPageShell` documents the same anatomy with semantic landmarks and may be adopted.

Localized tool pages (`/{locale}/tools/...`, LocalizedToolPage) follow the same order with translated PageHeader, the tool wrapped in `ToolUiProvider` (string overlay via `useToolText`), registry-driven body Cards (`CardTitle text-lg font-bold`, content `space-y-3 text-sm text-muted-foreground leading-relaxed`), and FAQ. New tools land in English first (owner, 2026-10-30).

### 12.6 Blog index (`/blog`)
PageHeader, Breadcrumbs, the featured post as a flat brand-rule card (11.8), a toolbar row (category filter pills left, search input `sm:w-60` right), 3-column card grid (9 per page), pagination, empty state. Anchors per the blog slot map.

### 12.7 Blog post and guide
Per 11.8. Anchor order for posts: [AdSlotB] after the meta bar, [AdSlotInArticle] after the body, FAQ, share row, [AdSlotB] before related articles, related articles (3-column), prev/next, "Browse all articles" link, [AdSlotMultiplex]. Guides use [AdSlotG] in the same two positions. Comparison guides follow `docs/guides/FORMAT-COMPARISON-PAGES-SPEC.md`: Quick table (with TL;DR box), Key differences (winner rows `bg-primary-50 border-primary-200` with `IconCheck` and a "Winner" label), When to use A, When to use B, Technical, Conversion tools, FAQ, Related; each a Card with a `text-lg` H2.

### 12.8 Legal, About, Contact, How We Test
LegalPageLayout (11.8). About, Contact and How We Test reuse it; Contact may add a static FAQ (`font-medium` question, `mt-1` muted answer).

### 12.9 Support and Advertise pages
Support: hero card `border bg-card p-8 sm:p-10` with H1 `text-3xl sm:text-4xl font-bold tracking-tight`, intro `max-w-3xl leading-relaxed text-muted-foreground` and an affiliate disclosure `text-sm`, then Breadcrumbs, [AdSlotC], partner Cards (`p-6 sm:p-8 flex flex-col sm:flex-row gap-4`, H2 `text-lg font-semibold`, default (blue) CTA with `rel="sponsored"`), a "Why" Card (`sm:grid-cols-3 gap-8`), [AdSlotMultiplex].
Advertise (`/advertise`): slot cards with price, placement and audience; the clicked slot is preselected; self-serve checkout (Dodo Payments); logo upload; real audience and country mix. Numbers must stay true (11.12).

### 12.10 404
`Container size="lg"` with `py-12 md:py-16`, a featured hero card, an "Error 404" label, PageHeader "Page Not Found", actions (default "Go Home", outline "Explore Tools", ghost "Contact Support"), then "Popular Recovery Paths" as a 2-column grid of link cards. Must be localized. The hero still uses a legacy gradient wash and an explicit `bg-primary-500 text-white` button (repainted by 4.4); flatten it to a brand-rule card when touched (R6).

---

## 13. Content, Voice and Microcopy

### 13.1 Voice
- Plain, specific, confident. Lead with the outcome: "Resize images to exact pixel dimensions."
- Always true to the product promise: free, no signup, no upload, runs in the browser.
- No hype or superlatives, no exclamation marks, no emoji in UI.
- **No em dashes or en dashes** anywhere (UI, docs, code comments). Use a hyphen with spaces, a colon or a comma. A test fails on em and en dashes in site copy.

### 13.2 Privacy statements (use these exact phrasings)
- "Runs locally in your browser."
- "Your files never leave your device."
- "100% client-side. No uploads, no signup."
Never claim server-side processing, never add upload-to-server flows to a tool without changing this copy and the About block.

### 13.3 Heading formulas on tool pages
| Section | File converter | Code or calculator tool |
|---|---|---|
| H2 1 | Why Use Our [Tool Name]? | Why Use Our [Tool Name]? |
| H2 2 | When to Convert [A] to [B] | Common Use Cases for [Tool Name] |
| H2 3 | Understanding How to Convert [A] to [B] | Understanding [Subject] |
| H2 4 | Related Tools | Related Tools |
| H2 5 | Frequently Asked Questions | Frequently Asked Questions About [Tool Name] |

### 13.4 Microcopy patterns
- Loading labels: present participle with an ellipsis character, one per action ("Converting…", "Calculating…", "Generating…", "Analyzing…"). Use "…" (U+2026) consistently.
- Buttons: verb first, specific ("Convert to JPG", "Calculate Tip", "Copy", "Download", "Clear").
- Copy feedback: "Copy" becomes "Copied" for 2 seconds.
- Counts: from `TOTAL_TOOL_COUNT` via `formatToolCount(locale)` or `Intl.NumberFormat`. The exact count shows in the sidebar footer, the homepage subline, the hero search placeholder and the browse link; taglines, meta descriptions and marketing round to **"3,000+"**. Never hardcode a tool count.
- Sponsors: "Your brand here" for open slots, "Sponsored" and "Featured sponsor" labels, prices as "$19/mo".
- Empty states: say what will appear and the first step ("Upload an image to see the resized preview.").
- Errors: what happened plus how to fix it ("This file is not a valid PNG. Choose a .png file and try again.").

### 13.5 Localization
- Locales: English (root, no prefix), Spanish, French, Portuguese (`pt-BR`), German, Russian, Indonesian. All left-to-right; RTL is not supported, so new components should still prefer logical properties (`ms-`, `me-`, `ps-`, `pe-`) to stay RTL-ready.
- The homepage hero and chrome are translated into all 7. New tools land in English only for now; the owner translates later.
- Every visible string in shared chrome must come from i18n (`useT`). Sponsor labels and "Your brand here" are English today (Appendix A).
- Allow 30% text expansion (German, Russian): no fixed-width buttons with text, truncate with `title` in lists, wrap in toolbars.
- Dates use `Intl.DateTimeFormat` with the full locale; numbers use `Intl.NumberFormat`.
- "Ask AI" prompts stay in English by design.

---

## 14. Accessibility

Full WCAG validation requires manual testing with assistive technologies and expert review; the rules below are the design-level requirements. Aback UI runs an axe check on every component; prefer its components where accessibility is hard (dialogs, menus, listboxes).

### 14.1 Structure
- One H1 per page; heading levels never skip.
- Landmarks: `header` (navbar), `aside` (sidebar, rail, sponsor bar `aria-label="Sponsors"`), `main#main-content`, `footer`, `nav` for breadcrumbs, the navbar sections and the hub jump list. A skip link is the first focusable element.
- Static export pages keep all SEO-relevant text in the DOM (closed FAQ answers, collapsed sidebar links) and hide it accessibly.

### 14.2 Contrast
| Pair | Light | Dark | Status |
|---|---|---|---|
| Ink on canvas | 16.97:1 | 19.26:1 | AAA |
| Ink on card | 17.74:1 | | AAA |
| Mute on canvas | 5.74:1 | 8.33:1 | AA |
| Mute on card | 6.00:1 | 7.59:1 | AA |
| Mute on solid muted | 5.43:1 | 7.02:1 | AA (fixed by the revamp; was 4.3:1) |
| Action button label | 4.54:1 | 8.44:1 | AA / AAA |
| Action text on canvas | 4.34:1 | 9.30:1 | Light: large text, icons, hover only |
| Active nav (action on 10% tint) | 3.80:1 | 8.39:1 | **Light fails AA** (R1) |
| Link (primary-700 / primary-400) | 6.70:1 | 9.36:1 | AA |
| Destructive text on canvas | 4.56:1 | 7.27:1 | AA |
| Ring on card | 3.31:1 | 7.34:1 | Passes 3:1 non-text |
| "Tools" in the wordmark (ink at 55%) | 3.96:1 | 5.84:1 | Logotype, exempt |
| Hairline / input on card | 1.29:1 / 1.43:1 | 1.29:1 | Decorative structure; controls also carry labels |

### 14.3 Focus (normative)
- Every interactive element shows a visible focus indicator with at least 3:1 contrast.
- Base: `:focus-visible { outline-color: var(--ring) }` with `outline-ring/50` on `*` from the base layer. Cards that are links use `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`. Search fields use `focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15` (the border carries the 3:1).
- Standard for new controls: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-primary-400`, or Aback UI's `--focus-ring` 2px outline with 2px offset.
- The shadcn default (`ring-[3px] ring-ring/50`) is too faint at 50% and should be migrated in `ui/button` and `ui/input`.
- Use `focus-visible`, not `focus`, so mouse clicks do not show rings.

### 14.4 Interaction
- Minimum target 32px (36px standard) for controls; footer and inline text links get padding to reach 24px.
- Everything reachable and operable by keyboard: dropzones, chips, accordions, menus (arrow keys), dialogs (focus trap, Escape, focus return), the theme toggle.
- Never open UI on focus alone.
- No hover-only affordances: per-row copy and remove buttons also appear on focus and on touch devices.
- Icon-only buttons require `aria-label`; decorative icons are `aria-hidden`.
- Status and error messages use `role="status"` / `role="alert"`; live counters (usage lines) use `aria-live="polite"`; progress uses `role="progressbar"` with values.
- Do not convey meaning by colour alone (status icons and words, ✓/✗ glyphs plus colour, a category accent is never the only label).
- Respect `prefers-reduced-motion` (Section 10).

---

## 15. Performance-Driven Design Rules

These come from real Lighthouse and CLS fixes and are binding:
1. **Reserve space for anything that loads late**: lazily loaded grids use `content-visibility:auto` with `contain-intrinsic-size`; the sidebar skeleton keeps its 256px width; sponsor slots keep their 88px / 44px / 48px heights while `/api/sponsors` loads; the sponsor bar has an in-flow 44px spacer; the hero usage line and footer usage line keep their height before the numbers arrive.
2. **Apply layout state before hydration** (sidebar margin, theme class).
3. **No animation on repeated elements**: directory cards and tiles change colour on hover with no transition (Lighthouse flags animated non-composited properties).
4. **Heavy UI loads on intent or idle**: the search dialog and its index mount after `requestIdleCallback` or on ⌘K.
5. **Fonts are self-hosted** with a metric-matched fallback.
6. **Images**: logo source 128px for 2-3x DPR with `fetchPriority="high"`, favicons at 32 and 256px, `loading="lazy"` and explicit dimensions below the fold. Sponsor logos are fixed-size.
7. **Hub pages stay light**: name-only link lists or slim cards instead of heavy cards for large catalogues.
8. **Blur only on fixed chrome** (navbar, sponsor bar, dialog overlay); no large box-shadow animations; no `transition-all` on repeated elements.
9. **Theme switch**: the reveal runs through the View Transitions API only; no JavaScript animation loop.
10. **New dependencies** (Aback UI included) are measured for bundle size and CLS before they land in a 3,000+ page static export.

---

## 16. Implementation Reference

| Concern | Location |
|---|---|
| Shared design system | **abackui.com**; npm `@aback-ui/ui`, `@aback-ui/tokens`, `aback-ui`; source `~/aback-ui` (`DESIGN.md`, `AGENTS.md`, `packages/tokens/src/tokens.css`, `CHANGELOG.md`, `docs/provenance.md`) |
| Colour, radius and font tokens, global overrides, scrollbars, sidebar mask, marquee | `src/app/globals.css` |
| Category accents | `src/config/category-accents.ts` |
| Fonts, theme-color, root metadata | `src/app/layout.tsx` |
| Theme init script / toggle (reveal) | `src/components/common/CriticalScriptInjector.tsx`, `src/components/common/ThemeToggle.tsx`, test `src/components/common/__tests__/theme-default.test.tsx` |
| Logo lockup | `src/components/common/Logo.tsx` |
| Z-index scale | `src/config/theme.ts` |
| Icon registry; category icons | `src/config/icons.ts`; `src/config/tools-nav.ts` |
| Layout primitives | `src/components/layout-primitives/index.tsx` |
| Shell | `src/components/layout/{MainLayout,Navbar,Sidebar,RightRail,Footer}.tsx` |
| Search | `src/components/common/{SearchBar,SearchDialog,LazySearchDialog}.tsx` |
| Homepage | `src/app/(site)/page-content.tsx`, `src/components/home/{HomeHero,HeroUsage}.tsx`, `src/i18n/messages/home.ts`, `src/components/tools/PopularTools.tsx` |
| Directory | `src/components/tools/{ToolCard,CategoryHeader,ToolCategoryGridView,ToolSubcategoryGridView,AllToolsGridView}.tsx` |
| Sponsors | `src/components/sponsors/SponsorCards.tsx`, `src/config/sponsors.ts`, `src/lib/sponsors/useSponsors.ts`, `functions/lib/sponsors.js` |
| Usage counts | `src/lib/usage/useUsageStats.ts`, `functions/lib/usage.js` |
| Ad anchors and agent markers | `src/components/ads/*`, `src/lib/agent/markers.ts` |
| shadcn primitives | `src/components/ui/*` |
| Aback building blocks | `src/components/common/*` (barrel `@/components/common`) |
| Tool page spec | `docs/tools/tools-structure.md`; audit `bun run audit:ui` |
| How a tool looks and behaves; files and templates | `docs/tools/TOOL-DESIGN.md`, `docs/tools/TOOL-STRUCTURE.md` (on `wave-1-tools`). On classes and colours this file wins; on tool behaviour they win |
| Blog and guide content rules | `docs/guides/BLOG-POST-CREATION-GUIDE.md`, `GUIDE-CREATION-MANUAL.md`, `FORMAT-COMPARISON-PAGES-SPEC.md` |
| OG art | `scripts/generate-og-image.py` |
| Living status | `docs/STATUS.md` |

Engineering rules: Tailwind utilities only (no CSS modules except complex animation), `cn()` for conditional classes, no inline styles except data-driven values (sponsor colours, the hero streak), every light colour paired with a `dark:` value, Tabler icons only, bun as the package manager. Verify with scoped tests; do not run full builds or lint on this repo.

**New tool checklist**
- [ ] `page.tsx` follows 12.5 exactly; schema FAQ array matches the visible FAQ.
- [ ] Workbench uses the canonical Card, ActionButton, shared inputs and status messages.
- [ ] Primary action is the default (blue) Button; selected options use `bg-primary text-primary-foreground`.
- [ ] Icons are bare: no `bg-primary-100` boxes around icons.
- [ ] No hex colours, no `gray-*`/`slate-*`/`zinc-*`/`neutral-*` in chrome; resting text links use the link recipe.
- [ ] No radius classes, no shadows beyond Level 1 on cards, no gradients.
- [ ] Text 12px minimum, no opacity on readable muted text, `tabular-nums` on numbers.
- [ ] Keyboard and focus verified on every control, including the dropzone.
- [ ] Icon registered in `src/config/icons.ts`.
- [ ] Light and dark checked (true black); 1024px and 375px widths checked.

---

## 17. Do's and Don'ts

### Do
- Keep every corner square.
- Use the action blue (`bg-primary`) for the one primary action, the current page and selection; outline for secondary actions.
- Draw icons bare: category accent for directory icons, `text-primary-600 dark:text-primary-400` for editorial icons.
- Let a card's hover take its own category colour.
- Use `text-primary-700 dark:text-primary-400` for resting body links.
- Build structure with 1px hairlines and white cards on the cool canvas; reserve Separator for shell chrome.
- Use `Stack gap="lg"` as the only wrapper on tool pages and keep the canonical section order.
- Reuse `@/components/common` and `@/components/ui`, and check Aback UI (abackui.com) before writing a new shared component.
- Pair every light colour with its dark value and test both themes, dark being true black.
- Use Geist Mono for code, data, file names, sizes, hex values and locale codes; `tabular-nums` for numbers.
- State the local-processing promise on every tool page.
- Reserve space for anything that loads late, sponsors included.
- Update this file, Appendix D and `docs/STATUS.md` with every design change.

### Don't
- Don't write `rounded`, `rounded-xs`, `rounded-*-full` or inline `borderRadius` in UI chrome.
- Don't put icons in tinted boxes, or colour titles and body text with a category accent.
- Don't use a different category's colour (or brand blue) for a card's hover.
- Don't put white text on `primary-500`, or use `primary-500`/`primary-600` for small text.
- Don't hardcode hex values (including `#009bf9`, `#007cc7`, legacy `#2596be`) or use raw gray families in chrome.
- Don't use Lucide or hand-drawn SVG icons.
- Don't animate directory cards (no lift, no transition), and don't use `transition-all`, glass cards, gradient buttons, multi-hue gradients, grids or meshes behind the hero.
- Don't set readable text below 12px or fade muted text with opacity modifiers.
- Don't wrap tool pages in `<main>`, `min-h-screen`, `max-w-*` or margin wrappers, and don't render a second H1.
- Don't nest Cards or add a subtitle under editorial H2s.
- Don't remove ad anchors or agent markers, hide open sponsor slots, or style content like sponsors.
- Don't fork Aback UI token names or copy its components by hand; install or `add` them.
- Don't introduce emoji, exclamation marks, em dashes or en dashes.
- Don't add server uploads or claims that contradict "runs locally in your browser".

---

## Appendix A. Findings and Migration Backlog

Prioritise shared components first: one fix there propagates to thousands of pages.

### A.1 From the 2026-11-15 revamp (checked 2026-11-17)

| # | Finding | Fix |
|---|---|---|
| R1 | Current-page tint `bg-primary/10 text-primary` measures 3.80:1 in light (navbar items, sidebar tool row, FeedbackModal choices); 14px text needs 4.5:1 | `text-primary-700 dark:text-primary` on the tint, as Aback UI's header does |
| R2 | Resting `text-primary` text on the canvas is 4.34:1 (hub "View all", some links) | Link recipe (`text-primary-700 dark:text-primary-400`), or `--link` once `tokens.css` is adopted |
| R3 | `@aback-ui/ui` and `@aback-ui/tokens` are not dependencies of this repo; theme values are mirrored by hand | With the owner's go-ahead: install both at 0.6.0, import `tokens.css` before the Aback Tools layer, delete duplicated role values, measure bundle and CLS (0.3, 15.10) |
| R4 | Inert radius classes in revamped code (`rounded-lg`/`rounded-md` in `Sidebar.tsx`, `SponsorCards.tsx`; `rounded-2xl`/`rounded-full` in `not-found.tsx`; `rounded-lg` in the `AdSlotT1` noscript notice) | Remove when touched |
| R5 | `--radius-xs` is not zeroed (`rounded-xs` renders 2px); no global reduced-motion rule | Zero it in `@theme inline` (as `tokens.css` does); adopt the tokens' reduced-motion rule |
| R6 | 404 hero keeps a gradient wash and explicit `bg-primary-500 text-white` / dark `bg-primary-600` button classes | Brand-rule card and the default Button |
| R7 | `.bg-dot-grid` utility in `globals.css` is unused and contradicts the no-grid rule | Delete |
| R8 | Search overlay uses a raw `bg-slate-950/50` | An `--overlay` role (Aback UI has one) |
| R9 | Sponsor labels and "Your brand here" are hardcoded English | Move to i18n |
| R10 | Search shows "⌘K" on every platform; the input lacks `aria-activedescendant` | Platform-aware label (Aback UI `SearchTrigger` does it); wire the active descendant |
| R11 | The revamp lives on `production`; `main` and `wave-1-tools` still have the October tokens and shell | Bring `ui-revamp` into the next branch that ships; the owner decides how branches are combined |
| R12 | About 6,900 bare `text-primary` usages written when `primary` was ink now render blue; most are icons (fine), some are body text on the canvas (R2) | Audit text uses when files are touched |
| R13 | `docs/tools/TOOL-DESIGN.md` calls the default `ActionButton` and selected `OptionChips` "ink" and lists icon chips as a brand-blue use; since the revamp the default variant is blue and icons are bare | Update its wording when `wave-1-tools` takes the revamp; the classes it prescribes stay the same |

### A.2 October 2026 audit (counts from a token scan of `src/` then; not re-measured)

| # | Finding | Scale (Oct 2026) | Standard / fix | Status |
|---|---|---|---|---|
| A1 | Bare `primary` rendered neutral ink, not blue | text-primary 6,895; bg-primary* 3,339; border-primary* 2,778 | Was: replace with ramp steps | **Changed**: `--primary` is now blue; see R12 |
| A2 | Bare `rounded` renders 4px; `rounded-xs` 2px; `rounded-*-full` pills; inline `borderRadius` | 5,712; 1; 36; 87 in 34 files | Remove, zero `--radius-xs`, add `.rounded { border-radius: 0 }` globally | Open (R5) |
| A3 | White labels on primary-500 brand buttons | ~80 class strings | Default Button | **Fixed globally** by the 4.4 override |
| A4 | Links in primary-600 (4.46:1) | ~2,300 text-primary-600 | primary-700 for text, 600 for icons | Open |
| A5 | Opacity-reduced readable text | muted-foreground /70 1,360, /60 1,139, /50 872, /40 547, /30 172 | Plain `text-muted-foreground` | Open |
| A6 | Micro type | text-[10px] 5,784; [9px] 919; [8px] 123; below 8px 43 | 12px floor; 10-11px only as uppercase labels | Open |
| A7 | Hardcoded hex | #009bf9 554 in 191 files; #007cc7 168; #2596be 28 | Ramp utilities; hex only for data/user colours | Open |
| A8 | Raw gray families in chrome | ~1,900 text, ~1,400 bg, ~1,100 border; off-scale shades | Semantic tokens | Open |
| A9 | Lucide icons | 46 files | Tabler equivalents; then remove `lucide-react` | Open |
| A10 | Shadows beyond the scale | 2,596 utilities; workbench `shadow-lg` (116); glass card (348) | Card level for cards | Open |
| A11 | Focus styling | focus: 4,222 vs focus-visible: 1,482 | 14.3 | Open |
| A12 | Control heights | Input/Button 36px vs Select, LabeledSelect, LabeledNumberInput 40px | 36px | Open |
| A13 | Hand-rolled buttons | raw `<button` in 1,558 tool files | ActionButton / Button variants | Open |
| A14 | Duplicate components | Two Stacks, two InfoBlocks, three accordions, three breadcrumb names, three share implementations, two reading-progress bars, two ToCs | Keep the canonical one named in Section 11, or the Aback UI equivalent | Open |
| A15 | Dead or legacy | ToolLayout, ToolPageLayout, ToolPageShell (unused), CompactRelatedTools, SubcategorySection | Delete or adopt deliberately | Open |
| A16 | Heading drift | Features/UseCases H2 `text-xl` inside Cards; hubs repeated the H1 | Standard sizes (5.2) | Hubs **fixed** (jump list); Cards open |
| A17 | Success colour split | green and emerald both used for success | Green for success | Open |
| A18 | Accessibility gaps | Search opened on focus, rows were clickable divs, ⌘ on all OSes, ErrorMessage lacks `role="alert"`, FAQ clips at 384px, fixed slider label, hover-only remove buttons, hand-rolled FeedbackModal and LocaleSwitcher, guide mobile ToC unreachable | Section 14 | Search rows now `role="option"`; rest open (R10) |
| A19 | Hardcoded English in localized chrome | DropZone copy, TextInputBox/TextOutputBox labels, ToC, Share label, code-block Copy, callout titles, 404, RelatedTools names | Move to i18n | Open (plus R9) |
| A20 | Layout width at 1024-1279px | 3-column grids at ~149-218px per card | Container queries or `xl:` | Open |
| A21 | Long-form measure | Blog paragraphs ~130 characters per line | `max-w-[72ch]` | Open |
| A22 | Brand constants | `themeColor` `#009af9`; OG counts; `#2596be` in instructions | `#009bf9`; "3,000+" from `TOTAL_TOOL_COUNT` | Copy **fixed** ("3,000+"); colour constants open |
| A23 | Bugs noticed | BlogStep connector never hides; BlogComparison `last:border-b-0` on cells; featured hero printed the raw category id; sidebars without max-height | Fix in place | Featured hero rebuilt; rest open |
| A24 | Misc. | z-[9999]/z-[200] progress bars; `flex-shrink-0` and `bg-gradient-to-*` v3 spellings; `IconBrandTwitter`; emoji empty state | Section standards | Popular Tools **fixed** (real favourites); rest open |

---

## Appendix B. Token Quick Reference

| Token | CSS / Tailwind |
|---|---|
| Canvas / Surface / Muted / Accent | `bg-background` / `bg-card` / `bg-muted` / `bg-accent` |
| Ink / Mute | `text-foreground` / `text-muted-foreground` |
| Action fill | `bg-primary text-primary-foreground hover:bg-primary/90` |
| Current page | `bg-primary/10 text-primary` (light text: prefer `text-primary-700`) |
| Hairline / Separator / Input | `border` / `border-separator` / `border-input` |
| Link | `text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 hover:underline` |
| Brand icon | `text-primary-600 dark:text-primary-400`, bare |
| Category icon / hover | `categoryAccent(id).text` / `categoryAccent(id).hover` |
| Card shadow / lift | `shadow-card` / `shadow-lift` |
| Focus ring | `focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-primary-400` |
| Page rhythm | `Stack gap="lg"` (24px), homepage `gap="xl"` (32px) |
| Card | `Card` (border, `shadow-sm`, `py-6 gap-6`, `px-6`) with `CardTitle className="text-lg"` |
| Tool card | `flex gap-3 border bg-card p-4` + bare 20px accent icon + `text-[15px] font-semibold` title + `text-[13px]` description |
| Panel | `border bg-muted/20 p-4` |
| Chip | `inline-flex h-8 items-center gap-2 border bg-card px-3 text-sm font-medium hover:border-foreground/30` |
| Eyebrow | `text-xs font-medium uppercase tracking-wide text-muted-foreground` |
| Overline | `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground` |
| Micro caps | `text-[10px] font-medium uppercase tracking-wide text-muted-foreground` |
| Motion | chrome `transition-colors`; directory hover colour only |

---

## Appendix C. The Aback Product Family

All Aback products share Geist, square corners, the Aback Blue ramp, Tabler icons and the theming mechanism (Aback UI, 0.1). Each product keeps a short layer of its own. Status as read from each repository on 2026-11-17:

| Product | Repo / design doc | Aback UI | Canvas (light / dark) | `--primary` (light / dark) | Product layer |
|---|---|---|---|---|---|
| **Aback Tools** (abacktools.com) | `aback-tools/DESIGN.md` (this file) | Not installed; values mirror 0.6.0 | `#f9fafb` / `#000000` | Aback Blue `#007bc4` / `#3bb7f7` | App shell, category accents, tool anatomy, sponsors (this file) |
| **Aback UI** (abackui.com) | `aback-ui/DESIGN.md` (forked from this file and updated to 0.6.0), `AGENTS.md` | Source of the packages | `#f9fafb` / `#000000` | `#007bc4` / `#3bb7f7` | Docs site: centred search hero over the action-blue streak, category tiles, boxed header navigation (as on Aback PDF) |
| **Aback Group** (aback.group) | `aback-group/DESIGN.md` Appendix C (Group site layer) | Not installed | `#f9fafb` / `#000000` | **Ink** `#131824` / `#f5f5f5`; the deep `primary-700` is the one brand fill | Editorial company site: `type-` scale (display weights 500), ruled lists instead of cards, one blue stage per page, real product screenshots, an inverted band; takes the Tools revamp shell pieces (lockup with "Group" lighter, reveal toggle, ⌘K search field, top-pinned search dialog, hero streak) |
| **Aback Launch** (abacklaunch.com) | `aback-launch/docs/design/DESIGN.md` (October 2026 copy of this file) | Not installed | `#ffffff` / `#0a0a0a` | **Deep blue** `#005d95` / `#33b7ff` | Pre-revamp neutrals; text-carrying ramp steps darkened (`primary-500` `#0070ac`, `primary-600` `#0068a7`) so blue text passes AA; the blue hero backdrop that Aback UI 0.4.0 borrowed |
| Aback Chess, Analytics, Audit, DR, Inspect, Skills, Social | each repo | `@aback-ui/ui` and `@aback-ui/tokens` **0.2.2** | 0.2.2 theme (pre-revamp) | 0.2.2 (ink) | Chess rounds its controls on purpose; the others follow the package |

Family rules:
- A change to a shared rule (a token, a base component, geometry) is made in Aback UI first, released, then taken by products. A product that diverges on purpose (Group's ink action, Launch's deep blue, Chess's rounded controls) records it in its own `DESIGN.md`.
- The `DESIGN.md` files in `aback-group` and `aback-launch` started as copies of this file. When this file changes a shared section, check whether their copies should follow, and say so in Appendix D.
- Products on 0.2.2 move to 0.6.0 by upgrading both packages together; 0.6.0 turns `bg-primary` blue (set `--primary` back after the import to keep ink).

---

## Appendix D. Design Change Log

Newest first. Every design change adds a line here in the same commit.

| Date | Change | Where |
|---|---|---|
| 2026-11-17 | This file rewritten for the revamp: Aback UI (abackui.com, `@aback-ui/ui`, `@aback-ui/tokens`, `aback-ui` CLI, 0.6.0) named as the system with install rules and this repo's adoption status; new token values; category accents; bare icons; new shell, search, homepage, hub and sponsor specs; contrast re-measured; backlog split into revamp findings and the October audit; product family appendix | `DESIGN.md` |
| 2026-11-15 | Boxed current-page link in the navbar; Developers unlinked from navbar and footer | `production` (`afe462fee`) |
| 2026-11-15 | Interface revamp: cool neutrals and white cards, Aback Blue `--primary`, true black dark mode, category accents, bare icons, search-first navbar, top-pinned search dialog, centred homepage hero with the blue streak, category tiles, hub jump lists, breadcrumbs above titles, flat blog cards with a brand rule, light by default with the reveal toggle, new logo lockup, filled-blue override for legacy buttons | `ui-revamp`, merged into `production` |
| 2026-11-15 | Aback UI 0.5.0 and 0.6.0 take the revamp upstream (`SearchTrigger`, `Item accent`, reveal toggle, `search-hero` block, `ThemeScript defaultTheme`, the 0.6.0 theme) | `aback-ui` |
| 2026-11-12 | Mediavine removed from the code; site-wide sponsor slots (featured, standard, bottom bar), `/advertise`, usage counts in the footer; Support Us card leaves the rail; "3,000+" in copy | `workers-sponsors` |
| 2026-10-09 | First full design audit and system document | `DESIGN.md` |
