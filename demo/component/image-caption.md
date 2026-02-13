---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_image-caption.scss
---

## Image Caption Preview

![width:480px](https://picsum.photos/480/270?image=50)
*This is a caption for the image above*

Normal *italic text* remains styled as italic when not preceded by an image.

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--image-caption-font-size` | `var(--font-size-s)` (0.85em) |

---

## Customization Example

<style scoped>
section {
  --image-caption-font-size: 0.7em;
}
</style>

![width:480px](https://picsum.photos/480/270?image=50)
*Smaller caption with custom font size*

```yaml
---
style: |
  :root {
    --image-caption-font-size: 0.7em;
  }
---
```

Override the caption font size to make it smaller.
