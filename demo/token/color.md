---
marp: true
theme: default
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# Color Token

`scss/canvas/token/_color.scss`

---

## CSS Variables

| Variable | Description |
|----------|-------------|
| `--color-black` | Black |
| `--color-white` | White |
| `--color-grey-lightest` | Lightest grey |
| `--color-grey-lighter` | Lighter grey |
| `--color-grey-light` | Light grey |
| `--color-grey-medium` | Medium grey |
| `--color-grey-dark` | Dark grey |
| `--color-grey-darker` | Darker grey |
| `--color-grey-darkest` | Darkest grey |
| `--color-blue` | Blue (links, etc.) |

---

## White Canvas Color Palette

Based on Tailwind CSS slate 300-900.

<div style="display: flex; gap: 8px; flex-wrap: wrap;">
<div style="width: 80px; height: 80px; background: #cbd5e1; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #94a3b8; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #64748b; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #475569; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #334155; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #1e293b; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #0f172a; border-radius: 8px;"></div>
</div>

`grey-lightest` → `grey-darkest`

---

## Black Canvas Color Palette

Based on Tailwind CSS slate 50-300, 800-950.

<div style="display: flex; gap: 8px; flex-wrap: wrap;">
<div style="width: 80px; height: 80px; background: #f8fafc; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #f1f5f9; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #e2e8f0; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #cbd5e1; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #1e293b; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #0f172a; border-radius: 8px;"></div>
<div style="width: 80px; height: 80px; background: #020617; border-radius: 8px;"></div>
</div>

`grey-lightest` → `grey-darkest`

---

## User-Defined Variables

Users must define the following variables:

| Variable | Purpose |
|----------|---------|
| `--color-primary` | Primary color (h2 text, etc.) |
| `--color-accent` | Accent color (mark background, etc.) |

```yaml
---
style: |
  :root {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---
```
