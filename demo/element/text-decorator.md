---
marp: true
theme: default
paginate: true
footer: scss/canvas/element/_text-decorator.scss
style: |
  :root {
    --color-accent: #ead7a4;
  }
---

## Text Decoration Preview

**Bold** text.

*Italic* text.

***Bold and italic*** text.

~~Strikethrough~~ text.

A sentence containing <mark>highlighted text</mark>.

You can add <ruby>**ruby text**<rp>(</rp><rt>furigana</rt><rp>)</rp></ruby> annotations.

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--strong-font-weight` | `var(--font-weight-bold)` (700) |
| `--mark-font-weight` | `var(--font-weight-bold)` (700) |
| `--mark-color-bg` | `var(--color-accent)` |
| `--rp-font-weight` | `var(--font-weight-normal)` (400) |

---

## Elements

| Element | Style |
|---------|-------|
| `<strong>` / `**text**` | Bold weight |
| `<mark>` | Bold + accent background |
| `<rp>` | Ruby parentheses (normal weight) |

---

## Customization Example

<style scoped>
:root {
  --mark-color-bg: #fef3c7;
  --mark-font-weight: 900;
}
</style>

Override mark background and weight:

```yaml
---
style: |
  :root {
    --mark-color-bg: #fef3c7;
    --mark-font-weight: 900;
  }
---
```

This sentence has <mark>highlighted text with black weight</mark>.
