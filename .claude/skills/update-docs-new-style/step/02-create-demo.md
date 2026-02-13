# Step 2: Create Demo File

Create a demo Markdown file for each newly added SCSS file.

## Procedure

1. Read the new SCSS file and understand:
   - `@mixin configure()` arguments (names, default values, required/optional)
   - CSS selectors used in the mixin body
   - CSS variables declared (in `:root` or scoped under a class)

2. Reference an existing demo file in the same category as a template:
   - **token**: `demo/token/typography.md`
   - **component**: `demo/component/text-decorator.md`
   - **common-layout**: `demo/common-layout/flex.md`
   - **decorator**: `demo/decorator/hr.md`
   - **slide-pattern**: `demo/slide-pattern/title.md`

3. Create `demo/{category}/{name}.md` following the format below.

## Demo File Format

### Frontmatter

```yaml
---
marp: true
theme: default
paginate: true
footer: scss/canvas/{category}/_{name}.scss
---
```

- If the style requires `--color-primary` or `--color-accent`, add a `style` block:
  ```yaml
  style: |
    section {
      --color-primary: #3b91c4;
      --color-accent: #ead7a4;
    }
  ```

### Slide Structure

Follow the 4-part structure established in the existing demos:

#### Part 1: Default Preview

Show the element/pattern with its default styling. Use representative content that demonstrates the style's purpose.

- **component**: Show the HTML element(s) with typical content
- **common-layout**: Show the layout applied to a section with example content
- **decorator**: Show the decoration applied with example content
- **slide-pattern**: Use `<!-- _class: {class-name} -->` to apply the pattern with sample content
- **token**: Show the token values in a table and visual preview

#### Part 2: CSS Variables Table

```markdown
---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--variable-name` | `default-value` |
```

List all CSS variables that users can customize. Include the default value from the theme configuration.

#### Part 3: Customization Example (Visual)

Show a live customization using `<style scoped>`:

```markdown
---

## Customization Example

<style scoped>
section {
  --variable-name: custom-value;
}
</style>

[Content demonstrating the customized style]
```

For **slide-pattern**, scope the style to the class:

```markdown
<style scoped>
section.{class-name} {
  --variable-name: custom-value;
}
</style>
```

#### Part 4: Customization Example (Code)

Show the YAML frontmatter users would write:

```markdown
---

## Customization Example

\```yaml
---
style: |
  :root {
    --variable-name: custom-value;
  }
---
\```

Description of the customization.
```

For **slide-pattern**, use the class selector instead of `:root`:

```markdown
\```yaml
---
style: |
  section.{class-name} {
    --variable-name: custom-value;
  }
---
\```
```

## Commit

After creating the demo file(s), commit and push:

```
docs: add demo file for {name}
```
