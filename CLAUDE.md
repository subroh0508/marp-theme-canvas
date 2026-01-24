# Marp Theme Canvas

Simple and minimal Marp theme

## Project Structure

```
scss/
├── theme/              # Theme modules (importable via @use)
│   ├── _white-canvas.scss
│   └── _black-canvas.scss
├── page/               # Page styles (title, section, toc, agenda, display)
├── component/          # Common components (heading, table, code, blockquote, etc.)
├── white-canvas.scss   # Light theme output file
└── black-canvas.scss   # Dark theme output file
```

## Naming Conventions

- File names: `_name.scss` (underscore prefix required, Sass partial)
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

- **CSS variable declaration/reference only in theme files**: `var(--*)` declaration and reference is only allowed in the following files:
  - Theme output files directly under `scss/` (`white-canvas.scss`, `black-canvas.scss`)
  - Theme modules under `scss/theme/` (`_white-canvas.scss`, `_black-canvas.scss`)
  - Reason: To allow flexible customization of styles per slide by overriding variables as inline styles in the frontmatter of Marp Markdown files
  - Example: Overriding `--color-primary` in a Markdown file
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
- **Forbidden in page/ and component/**: Style files in subdirectories should not directly reference CSS variables. All required values should be received as arguments to `@mixin configure()`
  - Reason: To maintain loose coupling between themes and styles
  - The theme passes CSS variables as arguments when calling `@include`

## Comment Conventions

- **Theme output files** (`white-canvas.scss`, `black-canvas.scss`): Comments at the beginning should start with `/*!` (because Marp metadata like `@theme`, `@size`, etc. need to be output to CSS)
- **Other files** (`_index.scss`, files under `theme/`, `page/`, `component/`): Use `//` comments (not output to CSS)
