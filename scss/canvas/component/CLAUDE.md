# component

Manages combinations of multiple elements and highly reusable classes

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names

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

  .classname {
    property: var(--component-arg1);
  }
}
```

## CSS Variable Naming Convention

CSS variable name: `--{component-name}-{argument-name}`

Special prefix rules:
- `_section.scss`: `--base-*` (padding/color/font/line-height)
- `_columns.scss`: `--cols-*`

Examples:
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
| `_columns.scss` | `.cols`, `.col`, `.col-N` | Multi-column layout |

## Planned Components

| File | Class Name | Purpose |
|------|------------|---------|
| `_figure.scss` | `.figure` | Image with caption |
