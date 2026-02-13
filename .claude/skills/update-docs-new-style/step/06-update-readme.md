# Step 6: Update README.md and README.ja.md

Update both `README.md` (English) and `README.ja.md` (Japanese) based on the category of the new SCSS file.

## Procedure by Category

### slide-pattern

Add a new subsection to the "Page Styles" / "ページスタイル" section:

**README.md**:
```markdown
### {class-name}

{Description of the pattern.}

\```markdown
<!-- _class: {class-name} -->

{Example Markdown content}
\```
```

**README.ja.md**:
```markdown
### {class-name}

{Japanese description of the pattern.}

\```markdown
<!-- _class: {class-name} -->

{Japanese example Markdown content}
\```
```

Also update the "Features" / "特徴" section:
- Update the page style count: e.g., "**5 Page Styles**" → "**6 Page Styles**"
- Add the new style name to the list: e.g., "title, section, toc, agenda, display, **{new-name}**"

### common-layout / decorator

Add a new bullet to the "Features" / "特徴" section:

**README.md**:
```markdown
- **{Feature Name}**: {Brief description}
```

**README.ja.md**:
```markdown
- **{Japanese Feature Name}**: {Japanese brief description}
```

### component / token

If the new file introduces user-facing CSS variables, add them to the "Customization" / "カスタマイズ" section's CSS Variables tables.

Determine which table the variable belongs to:
- Color variables → "Colors" / "色" table
- Font variables → "Fonts" / "フォント" table
- Size/layout variables → "Size & Layout" / "サイズ・レイアウト" table

**README.md** table format:
```markdown
| `--variable-name` | Description | `default` |
```

**README.ja.md** table format:
```markdown
| `--variable-name` | Japanese description | `default` |
```

## Important Notes

- Always update **both** `README.md` and `README.ja.md`
- Maintain consistent terminology between the two files
- Place new entries in a logical order (alphabetical or grouped by function)
- For slide-pattern, insert the new subsection in the order that makes most sense contextually

## Commit

After updating the README files, commit and push:

```
docs: update README for {name}
```

## Summary

After all steps are complete, display a summary of all changes made:

```
=== Documentation Update Summary ===

New SCSS file(s): {list of files}

Changes made:
- [Step 2] Created demo file: demo/{category}/{name}.md
- [Step 3] Updated scss/canvas/{category}/CLAUDE.md
- [Step 4] Updated demo/README.md directory structure
- [Step 5] Updated README.md and README.ja.md

All changes have been committed and pushed.
```
