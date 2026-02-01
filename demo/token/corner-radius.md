---
marp: true
theme: default
paginate: true
footer: scss/canvas/token/_corner-radius.scss
---

## CSS Variables

| CSS Variable | Default Value |
|--------------|---------------|
| `--corner-radius-s` | 4px |
| `--corner-radius-m` | 8px |
| `--corner-radius-l` | 12px |

---

## Corner Radius Preview

<style scoped>
blockquote { flex: 1; font-style: normal; padding: 0.5em; text-align: center; }
blockquote::before { display: none; }
</style>

<div style="display: flex; gap: 24px; align-items: flex-start;">
<blockquote style="border-radius: var(--corner-radius-s);">
S (4px)
</blockquote>
<blockquote style="border-radius: var(--corner-radius-m);">
M (8px)
</blockquote>
<blockquote style="border-radius: var(--corner-radius-l);">
L (12px)
</blockquote>
</div>

---

## Usage

Corner radius tokens are currently used in:

- **Blockquote**: `--corner-radius-m` (8px)
- **Inline code**: `--corner-radius-m` (8px)
- **Code block**: `--corner-radius-m` (8px)

Note: `--corner-radius-s` and `--corner-radius-l` are defined but not yet used in the theme.

---

## Customization Example

<style scoped>
:root {
  --corner-radius-m: 24px;
}
</style>

Override `--corner-radius-m` to `24px`:

```yaml
---
style: |
  :root {
    --corner-radius-m: 24px;
  }
---
```

> This blockquote now has rounded corners with 24px radius.
