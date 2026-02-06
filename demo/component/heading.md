---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_heading.scss
style: |
  section {
    --color-primary: #3b91c4;
  }
---

## Heading Preview

# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)
##### Heading 5 (H5)
###### Heading 6 (H6)

This is normal paragraph text.

---

## CSS Variables - Font Size

| CSS Variable | Default |
|--------------|---------|
| `--h1-font-size` | `var(--font-size-xxl)` (80px) |
| `--h2-font-size` | `var(--font-size-xl)` (52px) |
| `--h3-font-size` | `var(--font-size-l)` (46px) |
| `--h4-font-size` | `var(--font-size-m)` (40px) |
| `--h5-font-size` | `var(--font-size-m)` (40px) |
| `--h6-font-size` | `var(--font-size-m)` (40px) |

---

## CSS Variables - Font Weight

| CSS Variable | Default |
|--------------|---------|
| `--h1-font-weight` | `var(--font-weight-bold)` (700) |
| `--h2-font-weight` | `var(--font-weight-bold)` (700) |
| `--h3-font-weight` | `var(--font-weight-bold)` (700) |
| `--h4-font-weight` | `var(--font-weight-bold)` (700) |
| `--h5-font-weight` | `var(--font-weight-normal)` (400) |
| `--h6-font-weight` | `var(--font-weight-normal)` (400) |

---

## CSS Variables - Line Height & Color

| CSS Variable | Default |
|--------------|---------|
| `--h1-line-height` | `var(--line-height-tight)` (1.2) |
| `--h2-line-height` | `var(--line-height-tight)` (1.2) |
| `--h3-line-height` | `var(--line-height-tight)` (1.2) |
| `--h1-color-text` | inherit |
| `--h2-color-text` | `var(--color-primary)` |
| `--h3-color-text` | inherit |

---

## Customization Example

<style scoped>
section {
  --h2-color-text: #e74c3c;
  --h2-font-size: 2.5em;
}
</style>

Override H2 color and size:

```yaml
---
style: |
  :root {
    --h2-color-text: #e74c3c;
    --h2-font-size: 2.5em;
  }
---
```

## This H2 is red and larger
