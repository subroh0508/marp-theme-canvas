# CSS Extension

Build a custom Marp theme by overriding CSS variables — no build step required. This is the quickest way to create your own color scheme and add custom styles on top of `white-canvas` or `black-canvas`.

## Prerequisites

- [Node.js](https://nodejs.org/) (for npm setup) or a browser (for direct download)
- [@marp-team/marp-cli](https://github.com/marp-team/marp-cli)

## Project Setup

### Option A: npm dependency (Recommended)

Using npm keeps the base theme version-locked and easy to update.

```bash
mkdir my-theme && cd my-theme
npm init -y
npm install -D @marp-team/marp-cli @subroh0508/marp-theme-canvas
```

The base CSS file is located at:

```
node_modules/@subroh0508/marp-theme-canvas/css/white-canvas.css
```

### Option B: Direct Download

If you prefer not to use npm, download the CSS files directly:

```bash
mkdir -p my-theme/theme
cd my-theme

# Download the base theme
curl -o theme/white-canvas.css \
  https://raw.githubusercontent.com/subroh0508/marp-theme-canvas/main/css/white-canvas.css
```

Your directory structure will look like:

```
my-theme/
├── theme/
│   ├── white-canvas.css   # Downloaded base theme
│   └── my-theme.css       # Your custom theme (created next)
└── slides.md
```

::: tip
Replace `white-canvas.css` with `black-canvas.css` for the dark theme variant.
:::

## Creating Your Theme

Create a CSS file (e.g. `theme/my-theme.css`) with the following structure:

```css
/*!
 * @theme my-theme
 */

@import "white-canvas";

:root {
  --color-primary: #c2410c;
  --color-accent: #d4a574;
}
```

Key points:

- **`/*! @theme my-theme */`** — The `/*!` comment is required by Marp to register the theme name. Use `/*!` (not `/*`) so it is preserved in the output.
- **`@import "white-canvas"`** — Imports the base theme. Marp CLI resolves this name when the base CSS is provided via `--theme-set`.
- **`:root { ... }`** — Override CSS variables to customize colors, fonts, and layout.
- **`--color-primary`** and **`--color-accent`** are required. The primary color is used for headings (h2), and the accent color is used for highlights (`<mark>`).

## Available CSS Variables

### Colors

| Variable | Description | white-canvas | black-canvas |
|----------|-------------|--------------|--------------|
| `--color-primary` | Primary color (h2, etc.) | Required | Required |
| `--color-accent` | Accent color (mark) | Required | Required |
| `--color-white` | White | `#fff` | `#fff` |
| `--color-grey-lightest` | Grey (lightest) | `#cbd5e1` | `#f8fafc` |
| `--color-grey-lighter` | Grey (lighter) | `#94a3b8` | `#f1f5f9` |
| `--color-grey-light` | Grey (light) | `#64748b` | `#e2e8f0` |
| `--color-grey-medium` | Grey (medium) | `#475569` | `#cbd5e1` |
| `--color-grey-dark` | Grey (dark) | `#334155` | `#1e293b` |
| `--color-grey-darker` | Grey (darker) | `#1e293b` | `#0f172a` |
| `--color-grey-darkest` | Grey (darkest) | `#0f172a` | `#020617` |
| `--color-blue` | Link color | `#2563eb` | `#60a5fa` |

### Fonts

| Variable | Description | Default |
|----------|-------------|---------|
| `--font-family-base` | Base font | `'Noto Sans JP', sans-serif` |
| `--font-family-mono` | Monospace font | `ui-monospace, ...` |
| `--font-size-base` | Base font size | `40px` |

### Size & Layout

| Variable | Description | Default |
|----------|-------------|---------|
| `--slide-padding-x` | Slide horizontal padding | `80px` |
| `--slide-padding-y` | Slide vertical padding | `80px` |
| `--ul-indent` | Bullet list indent | `1.1em` |
| `--ol-indent` | Numbered list indent | `1.1em` |

## Adding Custom Styles

Beyond variable overrides, you can add any CSS rules to your theme file — custom components, decorators, slide patterns, etc.

For a complete example including h2 underlines, pagination formatting, a `.card` decorator, and a custom `case-studies` slide pattern, see [warm.css](https://github.com/subroh0508/marp-theme-canvas/blob/main/example/css-extension/theme/warm.css).

## Preview

### Option A: npm dependency

```bash
npx marp \
  --allow-local-files --html \
  --theme-set node_modules/@subroh0508/marp-theme-canvas/css/white-canvas.css \
  --theme theme/my-theme.css \
  -wp slides.md
```

- **`--theme-set`** registers the base CSS so that `@import "white-canvas"` resolves correctly.
- **`--theme`** registers your custom theme file.

### Option B: Direct Download

```bash
npx marp \
  --allow-local-files --html \
  --theme-set theme/white-canvas.css \
  --theme theme/my-theme.css \
  -wp slides.md
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

[example/css-extension](https://github.com/subroh0508/marp-theme-canvas/tree/main/example/css-extension)

## Next Steps

For more advanced customization with nesting, partials, and the Sass module system, see the [SCSS Extension](/extension/scss) guide.
