# theme

Theme modules (white-canvas and black-canvas, importable via @use)

## Required CSS Variables

The following CSS variables have no default values and must be defined when used.

| Variable | Description | Used in |
|----------|-------------|---------|
| `--color-primary` | Primary color | h2 text color |
| `--color-accent` | Accent color | mark tag background |

## CSS Variables Reference

### Colors (Basic)

| Variable | Description | Used in | white-canvas | black-canvas |
|----------|-------------|---------|--------------|--------------|
| `--color-black` | Black | - | `#000` | `#000` |
| `--color-white` | White | Slide background (white) | `#fff` | `#fff` |
| `--color-grey-lightest` | Grey (lightest) | Table header background (white) | `#cbd5e1` (slate-300) | `#f8fafc` (slate-50) |
| `--color-grey-lighter` | Grey (lighter) | - | `#94a3b8` (slate-400) | `#f1f5f9` (slate-100) |
| `--color-grey-light` | Grey (light) | Title metadata (white), page number/header/footer (black) | `#64748b` (slate-500) | `#e2e8f0` (slate-200) |
| `--color-grey-medium` | Grey (medium) | Page number/header/footer (white), blockquote text/mark, title metadata (black) | `#475569` (slate-600) | `#cbd5e1` (slate-300) |
| `--color-grey-dark` | Grey (dark) | Table header background (black) | `#334155` (slate-700) | `#1e293b` (slate-800) |
| `--color-grey-darker` | Grey (darker) | - | `#1e293b` (slate-800) | `#0f172a` (slate-900) |
| `--color-grey-darkest` | Grey (darkest) | Body text (white), slide background (black) | `#0f172a` (slate-900) | `#020617` (slate-950) |
| `--color-link` | Link color | a tag | `#2563eb` (blue-600) | `#60a5fa` (blue-400) |

### Colors (Component)

| Variable | Description | white-canvas | black-canvas |
|----------|-------------|--------------|--------------|
| `--color-blockquote-background` | Blockquote background | `color-mix(grey-light 10%)` | `color-mix(grey-light 15%)` |
| `--color-blockquote-mark` | Blockquote mark color | `grey-medium` | `grey-medium` |
| `--color-blockquote-text` | Blockquote text color | `grey-medium` | `grey-medium` |
| `--color-table-row-bg` | Table row background | `white` | `grey-darkest` |
| `--color-table-row-bg-header` | Table header background | `grey-lightest` | `grey-dark` |
| `--color-table-border` | Table border color | `grey-light` | `grey-medium` |
| `--color-code-bg` | Code block background | `color-mix(grey-light 10%)` | `color-mix(grey-light 15%)` |
| `--color-code-fg` | Code block text color | `grey-darkest` | `grey-lightest` |

### Fonts

| Variable | Description | Used in | Default |
|----------|-------------|---------|---------|
| `--font-family-base` | Base font | Entire slide | `'Noto Sans JP', sans-serif` |
| `--font-family-mono` | Monospace font | Code blocks | `ui-monospace, SFMono-Regular, ...` |
| `--font-size-base` | Base font size | Entire slide | `40px` |
| `--font-size-display` | Display size | title page, display page | `2.5em` |
| `--font-size-title` | Title size | h1, section page | `2em` |
| `--font-size-heading` | Heading size | h2, toc page, agenda page heading | `1.3em` |
| `--font-size-medium` | Medium size | h3 | `1.15em` |
| `--font-size-body` | Body size | agenda page body, blockquote | `1em` |
| `--font-size-small` | Small size | - | `0.85em` |
| `--font-size-note` | Note size | Page number, header, footer | `0.7em` |
| `--font-weight-normal` | Normal weight | h5, h6, agenda page body | `400` |
| `--font-weight-bold` | Bold weight | h1-h4, agenda page heading, display page emphasis | `700` |
| `--font-weight-black` | Black weight | - | `900` |

### Line Heights

| Variable | Description | Used in | Default |
|----------|-------------|---------|---------|
| `--line-height-tight` | Tight line height | Headings, blockquote | `1.2` |
| `--line-height-normal` | Normal line height | Entire slide, agenda page body | `1.45` |
| `--line-height-loose` | Loose line height | toc page, agenda page heading | `2` |

### Layout

| Variable | Description | Default |
|----------|-------------|---------|
| `--slide-padding-x` | Slide horizontal padding | `80px` |
| `--slide-padding-y` | Slide vertical padding | `80px` |
| `--header-footer-margin-x` | Header/footer/page number horizontal margin | `80px` |
| `--header-footer-margin-y` | Header/footer/page number vertical margin | `20px` |
| `--border-radius` | Border radius (blockquote) | `8px` |

## Available Mixins

| Mixin | Description |
|-------|-------------|
| `apply()` | Apply CSS variables and styles at once. Can add/override CSS variables via `@content` |
| `variables()` | Output CSS variables only. Can add/override CSS variables via `@content` |
| `styles()` | Output styles only (excludes CSS variables) |

## Usage Example

```scss
/*!
 * @theme my-custom-theme
 */

@use '@subroh0508/marp-theme-canvas/scss/white-canvas' as white-canvas;

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');

@include white-canvas.apply() {
  --color-primary: #e11d48;
  --color-accent: #fde047;
}
```

## File Structure

| File | Description |
|------|-------------|
| `_white-canvas.scss` | Light theme module |
| `_black-canvas.scss` | Dark theme module |
