# common-layout

Manages reusable layout definitions referenced by multiple slide patterns

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names
- Classes must be explicitly specified in Markdown to apply

## File Structure Template

```scss
// ===== _filename.scss =====
// Layout description

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --layout-arg1: #{$arg1};
    --layout-arg2: #{$arg2};
    --layout-arg3: #{$arg3};
  }

  section.classname {
    property: var(--layout-arg1);
  }
}
```

## CSS Variable Naming Convention

CSS variable name: `--{layout-name}-{argument-name}`

Examples:
- `_columns.scss`'s `$gap` → `--cols-gap`

## Existing Layouts

| File | Selector | Purpose |
|------|----------|---------|
| `_columns.scss` | `section.cols`, `.cols`, `.col`, `.col-N` | Multi-column layout |
