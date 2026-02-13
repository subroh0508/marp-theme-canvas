# Step 4: Update README.md and README.ja.md

Update both `README.md` (English) and `README.ja.md` (Japanese) to reflect the SCSS changes.

## Procedure

1. Review the SCSS changes from Step 1.

2. Read both `README.md` and `README.ja.md`.

3. Update based on the type of changes:

### CSS Variables Added

Add new variables to the appropriate table in the "Customization" / "カスタマイズ" section:

- Color variables → "Colors" / "色" table
- Font variables → "Fonts" / "フォント" table
- Size/layout variables → "Size & Layout" / "サイズ・レイアウト" table

**README.md**:
```markdown
| `--variable-name` | Description | `default` |
```

**README.ja.md**:
```markdown
| `--variable-name` | Japanese description | `default` |
```

### CSS Variables Removed

Remove the variable(s) from the corresponding table in both files.

### CSS Variables Renamed

Update the variable name in the corresponding table in both files.

### Feature Behavior Changed

Update the relevant description in the "Features" / "特徴" section.

### Page Style Behavior Changed (slide-pattern)

Update the corresponding subsection in "Page Styles" / "ページスタイル":
- Update the description text
- Update the code example if the usage changed
- Update the class name if it was renamed

### Class Name Changed (common-layout / decorator)

Update the relevant bullet in "Features" / "特徴" if the class name is mentioned.

## Important Notes

- Always update **both** `README.md` and `README.ja.md`
- Maintain consistent terminology between the two files
- Only update sections that are actually affected by the changes
- Do not modify unrelated sections

## Commit

After updating the README files, commit and push:

```
docs: update README for {name} changes
```

## Summary

After all steps are complete, display a summary of all changes made:

```
=== Documentation Update Summary ===

Modified SCSS file(s): {list of files with change types}

Changes made:
- [Step 2] Updated demo file: demo/{category}/{name}.md
- [Step 3] Updated scss/canvas/{category}/CLAUDE.md
- [Step 4] Updated README.md and README.ja.md

All changes have been committed and pushed.
```
