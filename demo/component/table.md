---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_table.scss
---

## Table Preview (Basic)

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

| Item | Description | Notes |
|------|-------------|-------|
| Marp | Markdown presentations | Open source |
| VS Code | Editor | Extension support |
| CLI | Command line | PDF export available |

---

## Table Preview (Alignment)

| Left | Center | Right |
|:-----|:------:|------:|
| A | B | C |
| Left aligned | Center aligned | Right aligned |
| 123 | 456 | 789 |

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--table-color-row-bg` | `var(--color-white)` |
| `--table-color-header-bg` | `var(--color-grey-lightest)` |
| `--table-color-even-row-bg` | `var(--color-white)` |
| `--table-color-border-vert` | `var(--color-grey-light)` |
| `--table-color-border-horz` | `var(--color-grey-light)` |

---

## Customization Example

<style scoped>
section {
  --table-color-header-bg: #3b91c4;
  --table-color-border-vert: #3b91c4;
  --table-color-border-horz: #3b91c4;
}
th {
  color: white;
}
</style>

Override header and border colors:

```yaml
---
style: |
  :root {
    --table-color-header-bg: #3b91c4;
    --table-color-border-vert: #3b91c4;
    --table-color-border-horz: #3b91c4;
  }
---
```

| Column A | Column B | Column C |
|----------|----------|----------|
| Data 1 | Data 2 | Data 3 |
| Data 4 | Data 5 | Data 6 |
