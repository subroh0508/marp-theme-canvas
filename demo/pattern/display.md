---
marp: true
theme: default
paginate: true
footer: scss/canvas/pattern/_display.scss
---

<!-- _class: display -->
<!-- _footer: "" -->

Display short text prominently

---

<!-- _class: display -->

![](https://picsum.photos/720?image=70)

Caption below the image

---

## Usage

```markdown
<!-- _class: display -->

Display short text prominently
```

```markdown
<!-- _class: display -->

![](image.jpg)

Optional caption text
```

---

## Structure

- **Text only**: Large font, bold, centered
- **With image/iframe**: Normal font size, media centered
- **Caption**: Paragraph below media at normal size

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--display-font-size` | `var(--font-size-3xl)` (100px) |
| `--display-font-weight` | bold |

Note: Font size is only applied when no image or iframe is present.

---

<!-- _class: display -->

<style scoped>
section.display {
  --display-font-size: 3em;
  --display-font-weight: 900;
}
</style>

Customized Display

---

## Customization Example

```yaml
---
style: |
  section.display {
    --display-font-size: 3em;
    --display-font-weight: 900;
  }
---
```

Override font size and weight.

---

<!-- _class: display -->

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/4fEBChYDmfbCjnItjY8KRq?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

iframes are also supported
