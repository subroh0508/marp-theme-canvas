# SCSS Extension

Build a custom Marp theme using SCSS for advanced customization. Compared to the [CSS extension](/extension/css) approach, SCSS gives you:

- **Nesting** — write cleaner, more readable selectors
- **Partials** — split your theme into organized files
- **Module system** — import the base theme with `@use` and `pkg:` importer

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Sass](https://sass-lang.com/) (Dart Sass 1.71.0+ required for `pkg:` importer support)
- [@marp-team/marp-cli](https://github.com/marp-team/marp-cli)

## Project Setup

```bash
mkdir my-theme && cd my-theme
npm init -y
npm install -D sass @marp-team/marp-cli @subroh0508/marp-theme-canvas
```

## Creating Your Theme

### Entry point

Create your SCSS entry point (e.g. `theme/my-theme.scss`):

```scss
/*!
 * @theme my-theme
 *
 * @auto-scaling true
 * @size 16:9 1920px 1080px
 */

@use 'pkg:@subroh0508/marp-theme-canvas/white-canvas.scss';

:root {
  --color-primary: #7c3aed;
  --color-accent: #a78bfa;
}
```

Key points:

- **`/*! @theme my-theme */`** — Required by Marp to register the theme. The `/*!` comment is preserved in compiled output.
- **`@auto-scaling true`** and **`@size`** — Marp metadata that enables auto-scaling and defines the slide dimensions.
- **`@use 'pkg:...'`** — The `pkg:` importer resolves the package from `node_modules` during Sass compilation. This imports the entire base theme.
- **`:root { ... }`** — Override CSS variables just like the CSS approach. `--color-primary` and `--color-accent` are required.

::: tip
Replace `white-canvas.scss` with `black-canvas.scss` for the dark theme variant.
:::

### Adding custom partials

As your theme grows, split styles into partial files for better organization. The recommended directory structure follows the same conventions as the base theme:

```
theme/
├── token/                  # Design tokens (colors, typography, spacing)
├── component/              # Styles for HTML elements (heading, pagination, table, etc.)
│   ├── _heading.scss
│   └── _pagination.scss
├── common-layout/          # Reusable layout patterns shared across multiple slide patterns
├── decorator/              # Decorative styles applied via explicit class names
│   └── _card.scss
├── slide-pattern/          # Full-page layout patterns activated with <!-- _class: name -->
│   └── _case-studies.scss
└── my-theme.scss           # Entry point
```

| Directory | Purpose | Example |
|-----------|---------|---------|
| `token/` | Design tokens — variables for colors, typography, spacing, etc. | `_colors.scss`, `_typography.scss` |
| `component/` | Styles for HTML elements and their combinations | heading underline, pagination format, code block |
| `common-layout/` | Reusable layout definitions referenced by multiple slide patterns | column grid, centered layout |
| `decorator/` | Decorative styles that require an explicit class in Markdown | `.card`, `.badge`, `.highlight` |
| `slide-pattern/` | Page-level layout patterns, typically used with `<!-- _class: name -->` | `title`, `toc`, `case-studies` |

Import partials from your entry point with `@use`:

```scss
@use 'pkg:@subroh0508/marp-theme-canvas/white-canvas.scss';

// Custom components
@use 'component/heading';
@use 'component/pagination';

// Custom decorators
@use 'decorator/card';

// Custom slide patterns
@use 'slide-pattern/case-studies';

:root {
  --color-primary: #7c3aed;
  --color-accent: #a78bfa;
}
```

SCSS nesting makes partials especially powerful — for example, a slide pattern like `section.case-studies` can express parent-child relationships cleanly with nested selectors, whereas the equivalent CSS requires repeating the parent selector for every child rule.

For complete partial examples (heading, pagination, card, case-studies), see the [example theme directory](https://github.com/subroh0508/marp-theme-canvas/tree/main/example/scss-extension/theme).

## Building

Compile your SCSS to CSS using Sass:

```bash
npx sass --no-source-map --pkg-importer=node theme/my-theme.scss theme/my-theme.css
```

- **`--pkg-importer=node`** — Enables the `pkg:` protocol so that `@use 'pkg:@subroh0508/...'` resolves correctly from `node_modules`.
- **`--no-source-map`** — Omits the source map (not needed for Marp).

## Preview

```bash
npx marp --allow-local-files --html --theme theme/my-theme.css -wp slides.md
```

Unlike the CSS extension, you only need `--theme` (not `--theme-set`), because the base theme is already compiled into your CSS file.

You can combine the build and preview steps in `package.json`:

```json
{
  "scripts": {
    "build": "sass --no-source-map --pkg-importer=node theme/my-theme.scss theme/my-theme.css",
    "preview": "npm run build && marp --allow-local-files --html --theme theme/my-theme.css -wp slides.md"
  }
}
```

## Writing Slides

In your Markdown file, specify the custom theme name in the frontmatter:

```markdown
---
marp: true
theme: my-theme
paginate: true
---

# Hello World

Your slide content here.
```

The `theme` value must match the name declared in `/*! @theme my-theme */`.

## Complete Example

See the full working example on GitHub:

[example/scss-extension](https://github.com/subroh0508/marp-theme-canvas/tree/main/example/scss-extension)

## CSS vs. SCSS Extension

| | CSS | SCSS |
|---|---|---|
| Build step | None | Required (Sass) |
| Nesting | Not available | Supported |
| Partials | Not available | Supported |
| Import method | `@import "white-canvas"` | `@use 'pkg:...white-canvas.scss'` |
| Marp CLI flags | `--theme-set` + `--theme` | `--theme` only |
| Best for | Quick color/font changes | Large custom themes |

For simpler customizations that don't need a build step, see the [CSS Extension](/extension/css) guide.
