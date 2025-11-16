This folder holds the project screenshots referenced by README.md.

Expected filenames:
- home.png      -> Home screen (search + trending)
- trending.png  -> Trending / featured row
- latest.png    -> Latest movies row

To add files on macOS (zsh) from the pasteboard paths you mentioned, run from project root:

mkdir -p assets/screenshots
cp \
  "/Users/yourname/Library/Group Containers/group.com.apple.coreservices.useractivityd/shared-pasteboard/items/0A449F4E-5AAE-46BE-A601-D90AE6C14466/IMG_6955.png" \
  assets/screenshots/home.png
cp \
  "/Users/yourname/Library/Group Containers/group.com.apple.coreservices.useractivityd/shared-pasteboard/items/C2C5A988-DEA9-4E1C-933C-04C5E6B6555C/IMG_6956.png" \
  assets/screenshots/trending.png
cp \
  "/Users/yourname/Library/Group Containers/group.com.apple.coreservices.useractivityd/shared-pasteboard/items/8EAFB437-BEDD-402A-AC7F-1DE4CD98B367/IMG_6957.png" \
  assets/screenshots/latest.png

After copying, commit the added images:

git add assets/screenshots/*.png
git commit -m "Add README screenshots"
