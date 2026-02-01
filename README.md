# Canvas

[日本語](./README.ja.md) | English

[![npm version](https://img.shields.io/npm/v/@subroh0508/marp-theme-canvas)](https://www.npmjs.com/package/@subroh0508/marp-theme-canvas)
[![license](https://img.shields.io/npm/l/@subroh0508/marp-theme-canvas)](./LICENSE)

A simple and minimal Marp theme. A design that eliminates unnecessary decorations and lets you focus on your content.

## Docs

https://subroh0508.github.io/marp-theme-canvas/

## Features

- **2 Theme Variants**: Light mode (white-canvas) and dark mode (black-canvas)
- **5 Page Styles**: title, section, toc, agenda, display
- **CSS Variable Customization**: Easily change colors and fonts from frontmatter
- **SCSS Modules**: Import only the styles you need
- **GitHub-style Syntax Highlighting**: Code highlighting based on prettylights
- **Multi-column Layout**: Support for 2-column and 3-column layouts

## Installation

### npm

```bash
npm install @subroh0508/marp-theme-canvas
```

### CDN / Direct Usage

You can also reference the CSS files directly via GitHub raw URL:

```
https://raw.githubusercontent.com/subroh0508/marp-theme-canvas/main/css/white-canvas.css
https://raw.githubusercontent.com/subroh0508/marp-theme-canvas/main/css/black-canvas.css
```

## Usage

### Basic Setup

Specify the theme in the frontmatter of your Markdown file:

```markdown
---
marp: true
theme: white-canvas
paginate: true
style: |
  :root {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---
```

`--color-primary` and `--color-accent` are required. The primary color is used for headings (h2), and the accent color is used for highlights (`<mark>`).

### Theme Selection

| Theme Name | Description |
|------------|-------------|
| `white-canvas` | Light theme with white background |
| `black-canvas` | Dark theme with black background |

### Building with Marp CLI

```bash
marp --theme node_modules/@subroh0508/marp-theme-canvas/css/white-canvas.css slides.md
```

## Page Styles

Use `<!-- _class: style-name -->` to switch styles for each page.

### title

Style for title pages. h1 becomes the main title, and other text is displayed as metadata (presenter name, date, etc.).

```markdown
<!-- _class: title -->

# Presentation Title

Presenter Name
January 2026
```

### section

Style for section dividers. Text is displayed large and centered on the screen.

```markdown
<!-- _class: section -->

Section 1: Introduction
```

### toc

Style for table of contents pages. Lists are styled for better readability.

```markdown
<!-- _class: toc -->

## Table of Contents

1. Introduction
2. Main Topic
3. Summary
```

### agenda

Style for agenda or topics list. Items and detailed descriptions can be displayed hierarchically.

```markdown
<!-- _class: agenda -->

## Today's Topics

- Topic 1
  - Detailed description
- Topic 2
  - Detailed description
```

### display

Style for displaying short text or images prominently.

```markdown
<!-- _class: display -->

Your emphasized message here
```

When an image is present, the font size doesn't increase, and the image is centered.

## Customization

You can override CSS variables in the frontmatter style.

### Key CSS Variables

#### Colors

| Variable | Description | white-canvas | black-canvas |
|----------|-------------|--------------|--------------|
| `--color-primary` | Primary color (h2, etc.) | Required | Required |
| `--color-accent` | Accent color (mark) | Required | Required |
| `--color-black` | Black | `#000` | `#000` |
| `--color-white` | White | `#fff` | `#fff` |
| `--color-grey-lightest` | Grey (lightest) | `#cbd5e1` (slate-300) | `#f8fafc` (slate-50) |
| `--color-grey-lighter` | Grey (lighter) | `#94a3b8` (slate-400) | `#f1f5f9` (slate-100) |
| `--color-grey-light` | Grey (light) | `#64748b` (slate-500) | `#e2e8f0` (slate-200) |
| `--color-grey-medium` | Grey (medium) | `#475569` (slate-600) | `#cbd5e1` (slate-300) |
| `--color-grey-dark` | Grey (dark) | `#334155` (slate-700) | `#1e293b` (slate-800) |
| `--color-grey-darker` | Grey (darker) | `#1e293b` (slate-800) | `#0f172a` (slate-900) |
| `--color-grey-darkest` | Grey (darkest) | `#0f172a` (slate-900) | `#020617` (slate-950) |
| `--color-blue` | Link color | `#2563eb` (blue-600) | `#60a5fa` (blue-400) |

#### Fonts

| Variable | Description | Default |
|----------|-------------|---------|
| `--font-family-base` | Base font | `'Noto Sans JP', sans-serif` |
| `--font-family-mono` | Monospace font | `ui-monospace, ...` |
| `--font-size-base` | Base font size | `40px` |

#### Size & Layout

| Variable | Description | Default |
|----------|-------------|---------|
| `--slide-padding-x` | Slide horizontal padding | `80px` |
| `--slide-padding-y` | Slide vertical padding | `80px` |
| `--ul-indent` | Bullet list (ul) indent | `1.1em` |
| `--ol-indent` | Numbered list (ol) indent | `1.1em` |
| `--ul-li-padding-left` | Bullet list item (li) padding | `0.2em` |
| `--ol-li-padding-left` | Numbered list item (li) padding | `0.2em` |

### Customization Example

```markdown
---
marp: true
theme: white-canvas
style: |
  :root {
    --color-primary: #e11d48;
    --color-accent: #fde047;
    --font-size-base: 36px;
    --slide-padding-x: 60px;
  }
---
```

## SCSS Modules

Canvas styles are modularized and can be imported individually when creating custom themes.

### Module Structure

```
scss/
├── canvas/                 # Base mixins (importable via @use)
│   ├── token/              # Design tokens (color, typography)
│   ├── element/            # HTML element styles (heading, table, code, etc.)
│   ├── component/          # Composite components (section, header, footer, etc.)
│   └── pattern/            # Page layout patterns (title, toc, agenda, etc.)
├── white-canvas/           # Light theme configuration
│   ├── token/              # Theme-specific tokens
│   ├── element/            # Element configurations
│   ├── component/          # Component configurations
│   └── pattern/            # Pattern configurations
├── black-canvas/           # Dark theme configuration
│   └── (same structure as white-canvas)
├── white-canvas.scss       # Light theme entry point
└── black-canvas.scss       # Dark theme entry point
```

### Using Base Mixins

Import base mixins from `canvas/` to create custom themes:

```scss
/*!
 * @theme my-custom-theme
 */

// Import base mixins
@use '@subroh0508/marp-theme-canvas/scss/canvas/element/heading' as heading;
@use '@subroh0508/marp-theme-canvas/scss/canvas/component/section' as section;
@use '@subroh0508/marp-theme-canvas/scss/canvas/pattern/title' as title;

// Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');

// Apply styles with your values
@include heading.configure(
  $h1-font-size: 2em,
  $h2-font-size: 1.5em,
  $h1-font-weight: 700,
  $h2-font-weight: 700,
  $h3-font-weight: 700,
  $h4-font-weight: 700,
  $h5-font-weight: 400,
  $h6-font-weight: 400,
  $h1-line-height: 1.2,
  $h2-line-height: 1.2,
  $h3-line-height: 1.2,
  $h4-line-height: 1.2,
  $h5-line-height: 1.2,
  $h6-line-height: 1.2,
  $h2-color-text: var(--color-primary)
);

@include section.configure(
  $width: 1920px,
  $height: 1080px,
  $padding-x: 80px,
  $padding-y: 80px,
  $color-bg: #fff,
  $color-text: #0f172a,
  $font-family: 'Noto Sans JP', sans-serif,
  $font-size: 40px,
  $line-height: 1.45
);

@include title.configure(
  $font-size-title: 2.5em,
  $color-metadata-text: #64748b
);
```

### Importing Theme Configuration Files

You can also import pre-configured theme files:

```scss
// Import theme configuration files
@use '@subroh0508/marp-theme-canvas/scss/white-canvas/element/heading';
@use '@subroh0508/marp-theme-canvas/scss/white-canvas/component/section';
```

### Using CSS Files Directly

```js
// Import CSS in JavaScript/TypeScript
import '@subroh0508/marp-theme-canvas/white-canvas.css'
import '@subroh0508/marp-theme-canvas/black-canvas.css'

// Import individual CSS modules
import '@subroh0508/marp-theme-canvas/white-canvas/element/heading.css'
```

## Development

### Clone the Repository

```bash
git clone https://github.com/subroh0508/marp-theme-canvas.git
cd marp-theme-canvas
pnpm install
```

### Commands

```bash
# Build CSS
pnpm build

# Start demo server
pnpm serve
```

## License

[MIT License](./LICENSE)
