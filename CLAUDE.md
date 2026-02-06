# Marp Theme Canvas

Simple and minimal Marp theme

## Project Structure

```
scss/
├── canvas/                 # Base mixins (importable via @use)
│   ├── token/              # Design tokens (color, typography)
│   ├── element/            # HTML element styles (heading, table, code, etc.)
│   ├── component/          # Styles for HTML elements and their combinations (no class required)
│   ├── layout/             # Reusable layout definitions referenced by multiple patterns
│   ├── decorator/          # Decorative styles requiring explicit class specification
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

## Commands

| Command | Description |
|---------|-------------|
| `pnpm serve` | Start Marp dev server for demo (`demo/` directory) |
| `pnpm build` | Compile SCSS files to CSS (`scss/*.scss` → `css/*.css`) |

## Naming Conventions

- File names: `_name.scss` (underscore prefix for Sass partials)
- Names: kebab-case (e.g., `title`, `text-decorator`)

## @mixin configure() Convention

All style files are encapsulated with `@mixin configure()`.

### Argument Design

- **Required arguments**: No default value, placed at the beginning of the list
- **Optional arguments**: Has default value, placed at the end of the list
- **Naming**: Use semantic names

### Argument Naming Patterns

| Prefix | Purpose | Example |
|--------|---------|---------|
| `$font-size-*` | Font size | `$font-size-title`, `$font-size-body` |
| `$font-weight-*` | Font weight | `$font-weight-bold`, `$font-weight-normal` |
| `$font-family` | Font family | `$font-family`, `$font-mono` |
| `$color-*` | Color | `$color-text`, `$color-bg`, `$color-border` |
| `$line-height-*` | Line height | `$line-height-heading`, `$line-height-body` |
| `$margin-*` | Margin | `$margin-x`, `$margin-y` |
| `$padding-*` | Padding | `$padding-x`, `$padding-y` |
| `$border-radius` | Border radius | `$border-radius` |

## Implementation Rules

- **CSS variable declaration/reference only in theme files**: `var(--*)` declaration and reference is only allowed in:
  - Theme entry points (`white-canvas.scss`, `black-canvas.scss`)
  - Theme configuration files (`white-canvas/*/`, `black-canvas/*/`)
  - Reason: To allow flexible customization of styles per slide by overriding variables as inline styles in Marp Markdown frontmatter
  - Example:
    ```markdown
    ---
    theme: white-canvas
    style: |
      :root {
        --color-primary: #3b91c4;
        --color-accent: #ead7a4;
      }
    ---
    ```
- **Forbidden in canvas/**: Base mixin files in `canvas/` should not directly reference CSS variables. All required values should be received as arguments to `@mixin configure()`
  - Reason: To maintain loose coupling between themes and base styles
  - Theme configuration files pass CSS variables as arguments when calling `@include`

## Comment Conventions

- **Theme entry points** (`white-canvas.scss`, `black-canvas.scss`): Comments at the beginning should start with `/*!` (because Marp metadata like `@theme`, `@size`, etc. need to be output to CSS)
- **Other files** (`_index.scss`, files under `canvas/`, `white-canvas/`, `black-canvas/`): Use `//` comments (not output to CSS)
