---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_link.scss
---

## Link Preview

- [Marp Official Site](https://marp.app/)
- [GitHub - Marp](https://github.com/marp-team/marp)
- Auto-link: https://marp.app/

Links are underlined by default and the underline disappears on hover.

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--link-color-text` | `var(--color-blue)` |

### Styles Applied

```scss
a {
  color: var(--link-color-text);
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
```

---

## Customization Example

<style scoped>
:root {
  --link-color-text: #e74c3c;
}
</style>

Override link color:

```yaml
---
style: |
  :root {
    --link-color-text: #e74c3c;
  }
---
```

- [This link is red](https://example.com)
- [Another red link](https://example.com)
