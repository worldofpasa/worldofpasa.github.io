---
name: "SpecPasa"
description: "A precise collaborative-spec workbench shaped as a freeze-gate control room."
colors:
  paper: "light-dark(#f3f5f7, #11181e)"
  paper-deep: "light-dark(#e9eef0, #182229)"
  sheet: "light-dark(#ffffff, #1b252d)"
  ink: "light-dark(#17212d, #edf3f4)"
  ink-soft: "light-dark(#536172, #aebdc5)"
  graphite-line: "light-dark(#d2dbe2, #34434c)"
  graphite-line-strong: "light-dark(#aebbc5, #56666f)"
  mint: "light-dark(#1f7a6d, #7ecfc0)"
  mint-deep: "light-dark(#165c53, #9adecf)"
  mint-soft: "light-dark(#dff1eb, #1e3a36)"
  mint-wash: "light-dark(#edf7f3, #172b29)"
  on-mint: "light-dark(#ffffff, #10201d)"
  focus: "light-dark(#0d5f53, #8fe0d1)"
  on-dark: "#f4f8f8"
  on-dark-soft: "#b3c0c7"
  mint-on-dark: "#7ecfc0"
  terminal: "#0a1014"
typography:
  display:
    fontFamily: "SpecPasa Sans, sans-serif"
    fontSize: "clamp(3rem, 4vw, 3.9rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "SpecPasa Sans, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.8rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.038em"
  title:
    fontFamily: "SpecPasa Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "SpecPasa Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "SpecPasa Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  mark: "2px"
  compact: "7px"
  control-sm: "8px"
  control: "10px"
  panel: "12px"
  frame: "14px"
  pill: "999px"
spacing:
  dense: "6px"
  compact: "8px"
  control: "12px"
  inset: "16px"
  standard: "20px"
  roomy: "24px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.on-mint}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.mint-deep}"
    textColor: "{colors.on-mint}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-small:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "40px"
  tab-active:
    backgroundColor: "{colors.mint-soft}"
    textColor: "{colors.mint-deep}"
    rounded: "{rounded.control-sm}"
    padding: "9px 13px"
  gate-active:
    backgroundColor: "{colors.mint-soft}"
    textColor: "{colors.mint-deep}"
    rounded: "{rounded.panel}"
    padding: "18px 22px"
    height: "96px"
  sheet-frame:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
  metadata-chip:
    backgroundColor: "transparent"
    textColor: "{colors.mint-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 11px"
---

# Design System: SpecPasa

## Overview

**Creative North Star: "The Freeze Gate Control Room"**

SpecPasa feels like a durable shared workbench where product, design, and engineering teams build agreement together. Cool paper fields hold white specification sheets, graphite rules expose structure, and compact enterprise controls keep the interface precise without becoming severe. The visual language is quiet enough for sustained reading and explicit enough that state, provenance, and handoff are never ambiguous.

The lifecycle rail, responsive code-native product views, provenance ledger, and self-host terminal all express one system: work advances through visible checkpoints. Mint is the sole active signal; mono type appears only where content behaves like operational data. Light and dark themes preserve the same hierarchy, while borders lead and shadows appear only when a surface genuinely floats.

**Key Characteristics:**

- Cool paper fields and specification-sheet surfaces
- Dark ink, graphite rules, and mint-only active states
- Dense, legible controls with 7–14px corner radii
- Inter for reading; IBM Plex Mono for phases, IDs, revisions, and commands
- Code-native illustrative product views that remain explicitly labeled
- Border-led depth with restrained floating shadows
- Semantically paired light and dark themes

## Colors

The palette is a cool neutral workbench with one disciplined teal-mint signal. Theme-aware semantic roles switch together; stable on-dark colors keep ink sections and the terminal legible regardless of the page theme.

### Primary

- **Control Mint:** Marks current lifecycle gates, selected tabs, available states, status dots, focus-adjacent affordances, and primary actions.
- **Deep Mint:** Carries mint-colored text and hover emphasis on light sheets; its dark-mode pair becomes a lighter readable mint.
- **Soft Mint:** Washes selected or resolved surfaces without competing with content.
- **Mint Wash:** Identifies the current ledger row with the quietest active tint.

### Neutral

- **Cool Paper:** The page field and default product-canvas ground.
- **Deep Paper:** Separates demonstration canvases and muted structural zones.
- **Specification Sheet:** The primary reading and control surface.
- **Dark Ink:** The high-contrast text and dark-section field role.
- **Soft Ink:** Secondary copy, captions, and inactive labels.
- **Graphite Rule / Strong Graphite Rule:** Dividers, control outlines, rails, and structural boundaries.
- **Stable On-Dark / Soft On-Dark:** Fixed foregrounds for intentionally dark sections.
- **Terminal Black:** A dedicated command surface, darker than either theme's page field.

### Named Rules

**The One Active Color Rule.** Mint is the only chromatic interaction signal; do not introduce competing status, brand, or decorative hues.

**The Semantic Pair Rule.** Every theme-aware surface, foreground, border, and mint role must switch as a coordinated semantic pair rather than as an isolated color substitution.

**The Stable Dark Field Rule.** Sections designed as dark anchors use the stable on-dark roles, so their hierarchy remains constant in both themes.

## Typography

**Display Font:** SpecPasa Sans, a self-hosted Inter variable face (with sans-serif fallback)  
**Body Font:** SpecPasa Sans, a self-hosted Inter variable face (with sans-serif fallback)  
**Label/Mono Font:** SpecPasa Mono, self-hosted IBM Plex Mono (with monospace fallback)

**Character:** Inter provides dense, contemporary clarity with strong low-contrast reading performance. IBM Plex Mono adds an operational register without turning the whole page into a developer console.

### Hierarchy

- **Display:** Heavy, tightly tracked, near-solid line spacing; reserved for the opening statement.
- **Headline:** Large, tightly tracked section statements that can exceed the hero scale on wide screens.
- **Title:** Compact, firm labels for workflow stages and meaningful component headings.
- **Body:** Neutral reading text with a default line height of 1.55; supporting paragraphs stay near 58–66 characters where layouts permit.
- **Label:** Small mono text with measured tracking, often uppercase, for phases, IDs, versions, providers, and commands.

### Named Rules

**The Mono Means Data Rule.** Use IBM Plex Mono only when text behaves like metadata, a system state, an identifier, a revision, a provider/model value, or a command.

**The Tight Headline Rule.** Major headings use dense line spacing and negative tracking, but body copy keeps relaxed spacing and never inherits display compression.

## Layout

The system uses a centered fluid shell capped at 1440px. Desktop gutters are 32px per side, narrowing to 20px below 1050px and 14px below 760px. Major sections typically use 120–128px vertical spacing on desktop and 88–92px on mobile. Dense internal controls use 6–24px gaps and insets.

At wide sizes, the lifecycle is a four-column rail, product views preserve a three-pane workbench, and split sections use asymmetric grids. Below 1050px, navigation recedes, the workbench drops its review pane, workflow becomes two columns, and major layouts simplify. Below 760px, the lifecycle rail becomes horizontally scrollable, product controls collapse, the document becomes one pane, tabs form a two-by-two grid, ledgers stack their metadata, and calls to action become full-width. Code-native product illustrations reflow rather than scaling into unreadable miniatures.

**The Evidence Reflows Rule.** Product demonstrations must preserve readable controls and semantic structure at every breakpoint; hide secondary panes before shrinking core content below useful size.

## Elevation & Depth

The system is flat by default. Paper/sheet contrast, one-pixel graphite rules, and nested tonal fields establish most depth. Shadows are reserved for the product-tour frame, temporary illustrative overlays, and the dark terminal; they are broad, low-opacity, and tightly constrained.

### Shadow Vocabulary

- **Tour Float:** A wide, shallow ambient shadow under the product-tour frame.
- **Overlay Float:** A slightly tighter ambient shadow under Ask AI and provider sheets.
- **Terminal Float:** A deep black ambient shadow that separates the command surface from the dark section.

### Named Rules

**The Border Before Shadow Rule.** Establish hierarchy with surface tone and a one-pixel rule first; add a shadow only when the surface is visually floating above another plane.

## Shapes

Corners are gently technical, not pillowy. Small state controls use compact 7–8px radii, everyday controls use 10px, grouped controls and active gates use 12px, and major frames use 14px. Pills are reserved for metadata tags. Circles belong to status dots and lifecycle nodes; the wordmark's tiny mint square is the only deliberately sharp brand mark.

**The Radius Follows Scale Rule.** Increase radius with container size, but keep the 14px frame ceiling; only metadata pills and status circles become fully round.

## Components

Components feel compact, durable, and state-explicit. Borders and labels do most of the work; mint appears only when an element is actionable, selected, current, or confirmed.

### Buttons

- **Shape:** Gently rounded controls; standard actions use the control radius and a 48px minimum height, while header actions use a 40px minimum height.
- **Primary:** Solid mint with the semantic on-mint foreground and strong sans-serif labeling.
- **Hover / Focus:** Primary buttons deepen and rise by one pixel; secondary buttons shift their border and text to mint. All keyboard focus uses a three-pixel focus outline with a three-pixel offset.
- **Secondary / Ghost:** Specification-sheet fill, strong graphite border, and dark ink.

### Chips

- **Style:** Mono metadata inside fine mint-tinted rules; provider and deployment tags use pill geometry.
- **State:** Selected or current controls may use a soft mint fill. Chips do not introduce alternate status colors.

### Cards / Containers

- **Corner Style:** 12px for grouped controls and 14px for major sheets, ledgers, product frames, and terminal surfaces.
- **Background:** Sheet surfaces sit on paper or deep-paper fields.
- **Shadow Strategy:** Flat by default; only floating demonstrations and overlays use the documented ambient shadows.
- **Border:** One-pixel graphite rules remain visible in both themes.
- **Internal Padding:** Compact metadata uses 16–20px; content sheets and floating overlays use 24px or more.

### Navigation

Primary navigation uses compact semibold sans-serif labels in soft ink and shifts to mint on hover. The sticky header is a translucent paper layer with a graphite bottom rule and mild blur. Below 1050px the link row is removed while the wordmark, theme control, and compact GitHub action remain.

### Lifecycle Gates

The four-step rail is a static lifecycle map, not a carousel or stepper interaction. The active gate pairs a mint border with soft mint fill, completed gates receive a lighter mint wash, and waiting gates remain neutral. Numbers are mono; names are uppercase sans; status remains human-readable text.

### Product View Tabs

The tab group is a bordered sheet with individually rounded controls. The selected tab receives soft mint fill and deep mint text. The associated product surface is code-native and responsive, supports Workspace, Versions, Ask AI, and Providers modes, and always displays an “Illustrative product view” label.

### Provenance Ledger

Ledger rows prioritize version, human-authored change summary, and provider/model attribution. The current snapshot uses the quiet mint wash and a solid mint version badge; all other rows remain border-separated sheet content.

### Terminal

The self-host terminal is a dedicated near-black surface with mono labels and command text. Its copy action is outlined, its command is mint-on-dark, and the leading prompt remains visually subordinate.

## Do's and Don'ts

### Do:

- **Do** make collaborative authorship, review, version state, and lifecycle position visible in the interface.
- **Do** use code-native responsive product demonstrations and keep their illustrative label persistent.
- **Do** use mint sparingly for active, selected, current, available, and confirmed states.
- **Do** use graphite borders and tonal surface changes as the default depth mechanism.
- **Do** preserve semantic contrast and identical hierarchy across light and dark themes.
- **Do** respect keyboard focus, reduced motion, and mobile reading order.

### Don't:

- **Don't** use generic floating-dashboard compositions or detach feature cards from the workflow they explain.
- **Don't** add competing accent colors, gradients, glassy decoration, or ornamental glows.
- **Don't** use mono type for ordinary prose, headlines, or conversational labels.
- **Don't** shrink desktop product mockups into unreadable mobile screenshots; reflow or remove secondary panes.
- **Don't** use shadows to compensate for missing borders or unclear surface hierarchy.
- **Don't** present illustrative product UI as literal application capture; keep the disclosure visible.
