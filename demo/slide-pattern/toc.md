---
marp: true
theme: default
paginate: true
footer: scss/canvas/slide-pattern/_toc.scss
style: |
  section {
    --color-primary: #3b91c4;
  }
---

<!-- _class: toc -->

## Table of Contents

1. First Section
1. Second Section
   - Subsection 1
   - Subsection 2
1. Third Section

---

## Usage

```markdown
<!-- _class: toc -->

## Table of Contents

1. First Section
1. Second Section
   - Subsection 1
   - Subsection 2
1. Third Section
```

---

## Structure

- **h2**: Table of contents heading
- **ol/ul**: Table of contents items
  - Larger font, loose line height
  - Nested items at normal size

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--toc-list-font-size` | `var(--font-size-xl)` (52px) |
| `--toc-list-line-height` | `var(--line-height-loose)` (2) |

---

<!-- _class: toc -->

<style scoped>
section.toc {
  --toc-list-font-size: 1.5em;
  --toc-list-line-height: 1.8;
}
</style>

## Customized TOC

1. Introduction
2. Main Content
3. Summary

---

## Customization Example

```yaml
---
style: |
  section.toc {
    --toc-list-font-size: 1.5em;
    --toc-list-line-height: 1.8;
  }
---
```

Override list font size and line height.
