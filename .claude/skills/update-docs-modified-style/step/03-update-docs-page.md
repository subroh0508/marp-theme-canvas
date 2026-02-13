# Step 3: Update Docs Page

Update the docs page if the number of slides in the demo file has changed.

## Procedure

1. Count the number of slides in the updated demo file (`demo/{category}/{name}.md`).
   - Count the number of `---` slide separators to determine the slide count.
   - The slide count = number of `---` separators (excluding the frontmatter closing `---`).

2. Read the corresponding `docs/{category}/{name}.md` file.

3. Count the current number of image references for each theme (white-canvas, black-canvas).
   - Image references follow the pattern: `![](/white-canvas/{category}/{name}.NNN.png)`

4. If the slide count differs from the image count, update the docs page:

### Slides Added

Add new image references after the last existing one for each theme section:

```markdown
![](/{theme}/{category}/{name}.NNN.png)
```

Image numbers use zero-padded 3-digit format (`.001.png`, `.002.png`, etc.).

### Slides Removed

Remove excess image references from the end of each theme section.

### No Change

If the slide count matches the image count, no update is needed. Skip this step.

## Commit

After updating the docs page, commit and push:

```
docs: update docs page for {name} to reflect slide changes
```
