---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_columns.scss
---

<!-- _class: cols -->

<div class="col">

## Usage 1: `_class: cols`

The entire slide becomes a column layout.

- Specify `<!-- _class: cols -->`
- Only write `<div class="col">`
- Useful for full-slide splits

</div>
<div class="col">

## Right Column

`<div class="cols">` wrapper is not needed.

- Item A
- Item B
- Item C

</div>

---

## Usage 2: `<div class="cols">`

> You can place content before and after columns

<div class="cols">
<div class="col">

**Left Column**

- Item A
- Item B

</div>
<div class="col">

**Right Column**

- Item C
- Item D

</div>
</div>

> Content continues after the columns

---

## Column Width Specification

<div class="cols">
<div class="col-4">

![](https://picsum.photos/1200/800?image=50)

</div>
<div class="col-6">

**Text Content**

Layout for placing images and text side by side.

- `col-4`: Ratio of 4
- `col-6`: Ratio of 6

Available: `col-1` to `col-10`

</div>
</div>

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--cols-gap` | 1em |

### Available Classes

| Class | Description |
|-------|-------------|
| `.cols` | Container for columns |
| `.col` | Equal-width column |
| `.col-N` | Ratio-based width (N = 1-10) |

---

## Customization Example

<style scoped>
:root {
  --cols-gap: 2em;
}
</style>

Override gap between columns:

```yaml
---
style: |
  :root {
    --cols-gap: 2em;
  }
---
```

<div class="cols">
<div class="col">

**Left Column**

Larger gap

</div>
<div class="col">

**Right Column**

Larger gap

</div>
</div>
