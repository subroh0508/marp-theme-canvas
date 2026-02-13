# Step 4: Update demo/README.md

Add the new demo file entry to the `demo/README.md` directory structure.

## Procedure

1. Read `demo/README.md`.

2. In the "Directory Structure" section, find the appropriate category directory in the tree.

3. Add the new demo file entry in alphabetical order within its category:

   ```
   │   ├── {name}.md            # {brief description}
   ```

   Use the same tree characters (`├──` for middle items, `└──` for last items) and alignment as the existing entries.

4. If adding the last item in a category, update the previous last item from `└──` to `├──`.

## Commit

After updating `demo/README.md`, commit and push:

```
docs: add {name} to demo/README.md directory structure
```
