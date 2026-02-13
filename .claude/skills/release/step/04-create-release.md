# Step 4: Create Tag and GitHub Release

Create a git tag and publish a GitHub release.

## Procedure

1. Create a git tag:
   ```bash
   git tag v<next-version>
   ```

2. Push the tag to origin:
   ```bash
   git push origin v<next-version>
   ```

3. Create a GitHub release using the tag and release notes from Step 2:
   ```bash
   gh release create v<next-version> \
     --title "v<next-version>" \
     --notes "<release-notes>" \
     --latest
   ```
   - Do NOT use the `--draft` flag. The release should be published immediately.
   - Use `--latest` to mark this release as the latest.

4. Display the release URL to the user.
