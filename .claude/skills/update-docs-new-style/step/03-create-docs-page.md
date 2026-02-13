# Step 3: Create Docs Page

Create a docs page for each newly added demo file and register it in the VitePress sidebar.

## Procedure

1. Count the number of slides in the demo file (`demo/{category}/{name}.md`).
   - Count the number of `---` slide separators to determine the slide count.
   - The slide count = number of `---` separators (excluding the frontmatter closing `---`).

2. Reference an existing docs page in the same category as a template (e.g., `docs/component/text-decorator.md`).

3. Create `docs/{category}/{name}.md` following the format below.

## Docs Page Format

```markdown
# {Title}

## white-canvas

:::details Embedded Slide

<iframe src="/marp-theme-canvas/white-canvas/{category}/{name}.html"></iframe>

:::

![](/white-canvas/{category}/{name}.001.png)

![](/white-canvas/{category}/{name}.002.png)

... (one image per slide)

## black-canvas

:::details Embedded Slide

<iframe src="/marp-theme-canvas/black-canvas/{category}/{name}.html"></iframe>

:::

![](/black-canvas/{category}/{name}.001.png)

![](/black-canvas/{category}/{name}.002.png)

... (one image per slide)
```

### Notes

- The title should be the component/pattern name in Title Case (e.g., "Image Caption", "Text Decorator")
- Image references use zero-padded 3-digit numbering (`.001.png`, `.002.png`, etc.)
- The number of image references must match the number of slides in the demo file

## Update VitePress Sidebar

4. Read `docs/.vitepress/config.ts`.

5. Add a new entry to the appropriate category in the `sidebar` array:
   ```typescript
   { text: '{name}', link: '/{category}/{name}' }
   ```

   Insert the new entry in the same position relative to other items as it appears in `demo/README.md`.

## Commit

After creating the docs page and updating the sidebar, commit and push:

```
docs: add docs page for {name}
```
