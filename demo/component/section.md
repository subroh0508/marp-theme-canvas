---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_section.scss
---

## Section Component

The section component defines the base layout for the entire slide.

- **Width**: 1920px
- **Height**: 1080px
- **Padding**: `var(--slide-padding-y)` / `var(--slide-padding-x)`
- **Display**: Flexbox (column direction)
- **Overflow**: Hidden

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--base-padding-x` | `var(--slide-padding-x)` |
| `--base-padding-y` | `var(--slide-padding-y)` |
| `--base-color-bg` | `var(--color-white)` |
| `--base-color-text` | `var(--color-grey-darkest)` |
| `--base-font-family` | `var(--font-family-base)` |
| `--base-font-size` | `var(--font-size-base)` (40px) |
| `--base-line-height` | `var(--line-height-normal)` (1.45) |

---

## Customization Example

<style scoped>
section {
  --base-color-bg: #f8fafc;
  --base-color-text: #1e293b;
  --base-font-size: 36px;
}
</style>

Override background, text color, and font size:

```yaml
---
style: |
  :root {
    --base-color-bg: #f8fafc;
    --base-color-text: #1e293b;
    --base-font-size: 36px;
  }
---
```

This slide has a light grey background with smaller text.
