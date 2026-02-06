---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_pagination.scss
---

## Pagination Preview

The page number is displayed at the bottom-right of the slide.

Enable pagination in the frontmatter:

```yaml
---
paginate: true
---
```

Page numbers are rendered using `section::after` pseudo-element.

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--pagination-margin-x` | `var(--outer-margin-x)` |
| `--pagination-margin-y` | `var(--outer-margin-y)` |
| `--pagination-font-size` | `var(--font-size-xs)` (28px) |
| `--pagination-color-text` | `var(--color-grey-medium)` |

---

<!-- _paginate: false -->

## Hide Pagination

Use `_paginate: false` to hide on specific slides:

```markdown
<!-- _paginate: false -->
```

This slide has no page number.

---

## Customization Example

<style scoped>
section {
  --pagination-font-size: 1.2em;
  --pagination-color-text: #3b91c4;
}
</style>

Override font size and color:

```yaml
---
style: |
  :root {
    --pagination-font-size: 1.2em;
    --pagination-color-text: #3b91c4;
  }
---
```

The page number on this slide is larger and blue.
