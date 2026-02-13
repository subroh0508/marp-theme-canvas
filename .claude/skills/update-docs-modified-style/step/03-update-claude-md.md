# Step 3: Update CLAUDE.md

Update the CLAUDE.md files to reflect the SCSS changes.

## Procedure

1. Read the modified SCSS file's diff to understand what changed.

2. Read the existing `scss/canvas/{category}/CLAUDE.md` file.

3. Update the documentation based on the type of changes:

### Selector/Class Name Changed

Update the corresponding table row:

- **component**: Update the "Selector" column in "Existing Components" table
- **common-layout**: Update the "Selector" column in "Existing Layouts" table
- **decorator**: Update the "Class" column in "Existing Decorators" table
- **slide-pattern**: Update the "Class Name" column in "Pattern List" table, and update the CSS Variable Naming Convention table if the class prefix changed

### Purpose/Description Changed

Update the "Purpose" column in the corresponding table.

### Mixin Arguments Changed (slide-pattern only)

Update the "Argument to CSS Variable Mapping" section:

- **Argument added**: Add a new row to the mapping table
- **Argument removed**: Remove the corresponding row
- **Argument renamed**: Update the "Argument" and potentially "CSS Variable" columns

### CSS Variable Naming Changed

- **component**: Update the "CSS Variable Naming Convention" examples if applicable
- **slide-pattern**: Update the mapping table and the "CSS Variable Naming Convention" table

## Commit

After updating the CLAUDE.md file(s), commit and push:

```
docs: update CLAUDE.md for {name} changes
```
