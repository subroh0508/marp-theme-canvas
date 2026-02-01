---
marp: true
theme: default
paginate: true
footer: scss/canvas/element/prettylights/
---

## Syntax Highlighting

Syntax highlighting colors for code blocks using highlight.js classes.

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

---

## JavaScript

```javascript
// Comment
const greeting = "Hello, World!";
const number = 42;
const isActive = true;

function greet(name) {
  return `Hello, ${name}!`;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}
```

---

## Python

```python
# Comment
def factorial(n):
    """Calculate factorial."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

class Calculator:
    def add(self, a, b):
        return a + b

result = factorial(5)  # 120
```

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <h1 class="title">Hello</h1>
  <p id="content">World</p>
</body>
</html>
```

---

## CSS Variables

| CSS Variable | Description |
|--------------|-------------|
| `--pl-color-comment` | Comments |
| `--pl-color-constant` | Constants, attributes |
| `--pl-color-entity` | Functions, classes |
| `--pl-color-entity-tag` | Tag names |
| `--pl-color-keyword` | Keywords |
| `--pl-color-string` | Strings |
| `--pl-color-variable` | Built-in functions |

---

## CSS Variables (Markup)

| CSS Variable | Description |
|--------------|-------------|
| `--pl-color-storage-modifier` | Default text |
| `--pl-color-markup-heading` | Headings |
| `--pl-color-markup-list` | List markers |
| `--pl-color-markup-inserted-text` | diff: added text |
| `--pl-color-markup-inserted-bg` | diff: added bg |
| `--pl-color-markup-deleted-text` | diff: deleted text |
| `--pl-color-markup-deleted-bg` | diff: deleted bg |

---

## Diff Example

```diff
@@ -1,3 +1,3 @@
-const old = "removed";
+const new = "added";
 const unchanged = "same";
```
