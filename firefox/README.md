# Firefox Tab Icon Changer

A Firefox extension that automatically changes browser tab icons when pages load.

## Features

- Automatically detects when a page loads in a tab
- Changes the favicon based on the website domain
- Customizable icon logic based on URL patterns
- Works with all websites

## Installation

### For Development/Testing

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on..."
4. Navigate to this extension's folder and select the `manifest.json` file
5. The extension is now loaded and active!

### For Distribution

To create a signed extension for permanent installation:

1. Package the extension as a ZIP file (include all files)
2. Submit to [addons.mozilla.org](https://addons.mozilla.org/developers/)
3. Follow Mozilla's review process

## How It Works

The extension uses the following components:

- **manifest.json**: Defines the extension's metadata, permissions, and structure
- **background.js**: Contains the logic to listen for tab updates and change favicons

### Current Behavior

The extension changes tab icons based on domain patterns:
- GitHub sites: 🟢 (green circle)
- Stack Overflow sites: 🔵 (blue circle)
- Reddit sites: 🔴 (red circle)
- All other sites: ⭐ (star)

## Customization

You can customize the icon-changing logic by editing `background.js`:

### Option 1: Use Different Emojis

Modify the emoji in the SVG data URI:

```javascript
link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎯</text></svg>';
```

### Option 2: Use Custom PNG/ICO Files

Replace the data URI with a path to your custom icon:

```javascript
link.href = browser.runtime.getURL('icons/custom-icon.png');
```

Then add the icon file to your extension folder and update `manifest.json` to include it in `web_accessible_resources`.

### Option 3: Add More URL Patterns

Add more conditions to match different websites:

```javascript
if (hostname.includes('yoursite')) {
  link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎨</text></svg>';
}
```

## Permissions

The extension requires the following permissions:

- **tabs**: To detect when tabs are updated
- **activeTab**: To access the active tab's content
- **<all_urls>**: To change icons on any website

## Browser Compatibility

- Firefox 57+ (Quantum and later)
- Firefox for Android 57+ (with WebExtensions support)

## Troubleshooting

### Icons Not Changing

1. Check the browser console for error messages (F12 > Console)
2. Ensure the extension has proper permissions
3. Try reloading the extension from `about:debugging`

### Icons Reverting

Some websites may dynamically update their favicons. The extension will override them when the page loads, but if the site changes it afterward, you may need to add additional logic to prevent that.

## License

MIT License - Feel free to modify and distribute as needed.

## Contributing

Feel free to submit issues or pull requests to improve this extension!

Majority of icons come from flaticon.com

