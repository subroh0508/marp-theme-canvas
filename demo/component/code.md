---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_code.scss
---

## Inline Code

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

Text containing `inline code`.

A sentence combining normal text, **bold**, *italic*, and `code`.

Use `npm install` to install dependencies.

---

## Code Block

```javascript
// JavaScript sample
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("World");
```

---

## Code Block (Multiple Languages)

```python
# Python sample
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

```bash
# Shell script
echo "Hello, Marp!"
```

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--code-font-mono` | `var(--font-family-mono)` |
| `--code-color-bg` | 10% grey-light |
| `--code-color-fg` | `var(--color-grey-darkest)` |
| `--code-border-radius` | `var(--corner-radius-m)` (8px) |

---

## Customization Example

<style scoped>
:root {
  --code-color-bg: #1e293b;
  --code-color-fg: #e2e8f0;
}
</style>

Override to dark theme colors:

```yaml
---
style: |
  :root {
    --code-color-bg: #1e293b;
    --code-color-fg: #e2e8f0;
  }
---
```

```javascript
// Dark theme code block
const message = "Hello, World!";
console.log(message);
```
