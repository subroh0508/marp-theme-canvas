---
marp: true
theme: default
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# Blockquote

`scss/canvas/element/_blockquote.scss`

---

## Blockquote Preview

> This is a blockquote.
> It can span multiple lines with italic styling and a decorative quotation mark.

Normal text after blockquote.

> Nested blockquote
> > A quote within a quote

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--blockquote-font-size` | `var(--font-size-m)` |
| `--blockquote-line-height` | `var(--line-height-tight)` |
| `--blockquote-color-text` | `var(--color-grey-medium)` |
| `--blockquote-color-bg` | 10% grey-light |
| `--blockquote-color-mark` | `var(--color-grey-medium)` |
| `--blockquote-border-radius` | `var(--corner-radius-m)` (8px) |

---

## Features

- Italic font style
- Top-left decorative quotation mark (`"`)
- Rounded corners with background color
- Left padding for quotation mark space

---

## Customization Example

<style scoped>
:root {
  --blockquote-color-text: #2563eb;
  --blockquote-color-bg: #dbeafe;
  --blockquote-color-mark: #2563eb;
  --blockquote-border-radius: 16px;
}
</style>

Override colors and border radius:

```yaml
---
style: |
  :root {
    --blockquote-color-text: #2563eb;
    --blockquote-color-bg: #dbeafe;
    --blockquote-color-mark: #2563eb;
    --blockquote-border-radius: 16px;
  }
---
```

> This blockquote has blue styling and larger rounded corners.
