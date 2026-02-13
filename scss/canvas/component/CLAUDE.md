# component

Manages styles applied without explicit class specification, targeting individual HTML elements and combinations of multiple HTML elements

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names
- Styles are applied automatically to HTML element selectors (no class specification required)

## File Structure Template

```scss
// ===== _filename.scss =====
// Component description

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --component-arg1: #{$arg1};
    --component-arg2: #{$arg2};
    --component-arg3: #{$arg3};
  }

  selector {
    property: var(--component-arg1);
  }
}
```

## CSS Variable Naming Convention

CSS variable name: `--{component-name}-{argument-name}`

Special prefix rules:
- `_section.scss`: `--base-*` (padding/color/font/line-height)

Examples:
- `_heading.scss`'s `$h1-font-size` → `--h1-font-size` (heading level as prefix)
- `_blockquote.scss`'s `$color-text` → `--blockquote-color-text`
- `_pagination.scss`'s `$margin-x` → `--pagination-margin-x`
- `_header.scss`'s `$font-size` → `--header-font-size`
- `_section.scss`'s `$padding-x` → `--base-padding-x`
- `_section.scss`'s `$color-bg` → `--base-color-bg`

## Existing Components

| File | Selector | Purpose |
|------|----------|---------|
| `_section.scss` | `section` | Slide body (width/height/padding/colors/font) |
| `_header.scss` | `header` | Header |
| `_footer.scss` | `footer` | Footer |
| `_pagination.scss` | `section::after` | Page number |
| `_heading.scss` | `h1`-`h6` | Headings |
| `_paragraph.scss` | `p` | Paragraphs |
| `_list.scss` | `ul`, `ol` | Lists |
| `_table.scss` | `table`, `th`, `td`, `tr` | Tables |
| `_code.scss` | `code`, `pre` | Code blocks |
| `_blockquote.scss` | `blockquote` | Blockquotes |
| `_link.scss` | `a` | Links |
| `_hr.scss` | `hr` | Horizontal rules |
| `_text-decorator.scss` | `strong`, `mark`, `rp` | Text decoration |
| `_image-caption.scss` | `img + br + em` | Image caption |
| `prettylights/` | `.hljs-*` | Syntax highlighting |
