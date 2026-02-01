---
marp: true
theme: default
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# List

`scss/canvas/element/_list.scss`

---

## Unordered List

- List item 1
- List item 2
  - Nested item 2-1
  - Nested item 2-2
    - Deeply nested item
- List item 3

---

## Ordered List

1. First item
2. Second item
   1. Nested numbered item 1
   2. Nested numbered item 2
3. Third item

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--ul-indent` | 1.1em |
| `--ol-indent` | 1.1em |
| `--ul-li-padding-left` | 0.2em |
| `--ol-li-padding-left` | 0.2em |

---

## Customization Example

<style scoped>
:root {
  --ul-indent: 2em;
  --ul-li-padding-left: 0.5em;
}
</style>

Override indent and padding:

```yaml
---
style: |
  :root {
    --ul-indent: 2em;
    --ul-li-padding-left: 0.5em;
  }
---
```

- This list has larger indent
  - Nested items are also affected
  - More spacing from bullet

---

## Fragment List (Click to reveal)

Use `*` instead of `-` for unordered lists to reveal items one by one:

* First item (appears first)
* Second item (click to reveal)
* Third item (click to reveal)
