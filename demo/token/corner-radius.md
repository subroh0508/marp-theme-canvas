---
marp: true
theme: default
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# Corner Radius Token

`scss/canvas/token/_corner-radius.scss`

---

## CSS Variables

| CSS Variable | Default Value |
|--------------|---------------|
| `--corner-radius-s` | 4px |
| `--corner-radius-m` | 8px |
| `--corner-radius-l` | 12px |

---

## Corner Radius Preview

<div style="display: flex; gap: 24px; align-items: center;">
<div style="width: 120px; height: 120px; background: var(--color-grey-medium, #666); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white;">
S (4px)
</div>
<div style="width: 120px; height: 120px; background: var(--color-grey-medium, #666); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
M (8px)
</div>
<div style="width: 120px; height: 120px; background: var(--color-grey-medium, #666); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
L (12px)
</div>
</div>

---

## Usage

Corner radius tokens are used in:

- **Blockquote**: `--corner-radius-m` (8px)
- **Table**: `--corner-radius-m` (8px)
- **Code block**: `--corner-radius-m` (8px)
- **Inline code**: `--corner-radius-s` (4px)
- **Mark**: `--corner-radius-s` (4px)

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
