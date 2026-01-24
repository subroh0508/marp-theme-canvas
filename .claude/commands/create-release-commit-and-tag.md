# Release Command

Create a release commit and tag.

## Steps

1. Read `package.json` and display the current version
2. Ask the user what the next version should be (e.g., "0.0.4", "0.1.0", "1.0.0")
3. Verify you are on the `main` branch. If not, switch to `main` branch
4. Update version in the following files:
   - `package.json`: Update the `"version"` field
   - `demo/white_canvas_demo.md`: Update `Version vX.Y.Z` on the title page
   - `demo/black_canvas_demo.md`: Update `Version vX.Y.Z` on the title page
5. Stage the changes and create a commit with message:
   ```
   Release vX.Y.Z

   Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
   ```
6. Push the commit to origin
7. Create a git tag named `vX.Y.Z`
8. Push the tag to origin

## Important

- Make sure all version strings use the same format (e.g., if user says "0.0.4", use "0.0.4" in package.json and "Version v0.0.4" in demo files)
