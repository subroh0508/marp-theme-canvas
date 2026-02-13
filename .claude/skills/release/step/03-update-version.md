# Step 3: Update Version

Update version strings in the project files, then commit and push.

## Procedure

1. Update version in the following files:
   - `package.json`: Update the `"version"` field to the next version
   - `demo/index.md`: Update `Canvas v<current>` to `Canvas v<next>` in the footer

2. Stage the changes and create a commit:
   ```
   Release v<next-version>

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```

3. Push the commit to origin.
