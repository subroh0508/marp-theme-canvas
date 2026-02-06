---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_hr.scss
---

## Horizontal Rule (Default / Solid)

Content above the line

<hr>

Content below the line

---

<!-- _class: hr-dashed -->

## Horizontal Rule (Dashed)

Use `<!-- _class: hr-dashed -->` for dashed style.

Content above the line

<hr>

Content below the line

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--hr-height` | 1px |
| `--hr-width` | 100% |
| `--hr-color` | `var(--color-grey-light)` |

---

## Style Classes

| Class | Style |
|-------|-------|
| (default) | Solid line |
| `hr-solid` | Solid line (explicit) |
| `hr-dashed` | Dashed line |

---

## Customization Example

<style scoped>
:root {
  --hr-height: 3px;
  --hr-color: #3b91c4;
}
</style>

Override height and color:

```yaml
---
style: |
  :root {
    --hr-height: 3px;
    --hr-color: #3b91c4;
  }
---
```

Content above

<hr>

Content below (thicker blue line)
