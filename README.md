# ADO Tab Icons Chrome Extension

This Chrome extension automatically changes the browser tab icon (favicon) for Azure DevOps pages based on the tab title or URL:
- **Bug** → Shows bug icon
- **Pull Request** → Shows pull request icon  
- **User Story** → Shows story icon
- **Pipeline** → Shows pipeline icon
- **Feature** → Shows feature icon
- **Epic** → Shows epic icon
- **Release Readiness** → Shows readiness icon
- **Decision** → Shows gavel icon
- **Search** → Shows magnifying glass icon
- **Boards** → Shows board icon
- **Wikis** → Shows wiki/documentation icon
- **Repos** → Shows code icon
- **Releases** → Shows release icon
- **Dashboards** → Shows dashboard icon
- **Artifacts** → Shows artifacts icon
- **Queries** → Shows query icon
- **Settings** → Shows settings icon
- **Library** → Shows library icon
- **Other ADO pages** → Shows default ADO icon

## Features

- Automatically detects Azure DevOps page types based on tab titles and URLs
- Replaces the favicon with the appropriate custom icon
- Smart domain detection - only processes Azure DevOps websites
- Monitors for dynamic title changes during navigation
- Default icon fallback for ADO pages that don't match any pattern
- **Customizable options** - Enable or disable any icon type via the options page with icon previews
- Settings are saved and synced across Chrome browsers

## Installation

### For Development/Testing

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top-right corner
3. Click "Load unpacked"
4. Select the folder containing this extension
5. The extension is now installed and active!

## Usage

The extension works automatically on Azure DevOps pages. Simply navigate to any ADO page and the appropriate icon will be displayed!

Examples of titles/URLs that will trigger icons:
- **Bug icon**: "Bug #1234: Login issue", "Bug Report", "Bug: Navigation broken"
- **PR icon**: "Pull request #456: Feature XYZ", "Pull request Review", or URLs containing "/_pulls"
- **Pipeline icon**: "Pipelines - My Team", "Pipeline Review"
- **Story icon**: "User Story: As a user...", "User Story #789"
- **Feature icon**: "Feature #123: New Dashboard", "Feature Planning"
- **Epic icon**: "Epic #456: Q4 Improvements", "Epic Details"
- **Readiness icon**: "Release Readiness - Sprint 42"
- **Decision icon**: "Decision: Architecture Review", "Decision Log"
- **Search icon**: "Work Items - Search", "Code - Search"
- **Board icon**: "Work Items - Boards", "Sprint 42 - Boards"
- **Wiki icon**: Any page with "_wiki/wikis" in the URL (e.g., wiki documentation pages)
- **Repos icon**: "MyProject - Repos", "Code Repository - Repos"
- **Release icon**: URLs containing "/_release" (classic release management pages)
- **Dashboard icon**: URLs containing "/_dashboards" (project dashboards)
- **Artifacts icon**: URLs containing "/_artifacts" (package feeds)
- **Queries icon**: URLs containing "/_queries" (work item queries)
- **Settings icon**: URLs containing "/_settings" (project/organization settings)
- **Library icon**: URLs containing "/_library" (variable groups, secure files)
- **Default ADO icon**: For any other ADO page that doesn't match the above patterns

### Options Page

You can customize which icons are enabled:

1. Go to `chrome://extensions/`
2. Find "ADO Tab Icons" extension
3. Click on "Details"
4. Scroll down and click "Extension options"
5. See previews of all available icons
6. Toggle which icon types you want to enable/disable
7. Click "Save Settings"

Your preferences will be saved and synced across your Chrome browsers!

**Note:** When an icon type is disabled, the extension will fall back to the default ADO icon for those pages.

## Testing

To test the extension:
1. Navigate to an Azure DevOps page (dev.azure.com or visualstudio.com)
2. For title-based icons, open the browser console (F12) and type one of these commands:
   - `document.title = "Bug Test"`
   - `document.title = "Pull request #123"`
   - `document.title = "Pipelines - Testing"`
   - `document.title = "User Story: Testing"`
   - `document.title = "Feature: New Feature"`
   - `document.title = "Epic: Major Initiative"`
   - `document.title = "Release Readiness - Sprint 1"`
   - `document.title = "Decision: Architecture Choice"`
   - `document.title = "Work Items - Search"`
   - `document.title = "Sprint Planning - Boards"`
   - `document.title = "MyProject - Repos"`
3. Watch the tab icon change to the appropriate icon
4. For URL-based icons, navigate directly to these pages:
   - Wiki pages (URLs with "_wiki/wikis")
   - Release pages (URLs with "/_release")
   - Dashboard pages (URLs with "/_dashboards")
   - Artifacts pages (URLs with "/_artifacts")
   - Query pages (URLs with "/_queries")
   - Settings pages (URLs with "/_settings")
   - Library pages (URLs with "/_library")

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that detects title changes and updates the favicon
- `options.html` - Options page UI
- `options.js` - Options page logic for saving/loading preferences
- `icons/bug.png` - Bug icon image
- `icons/pr.png` - Pull Request icon image
- `icons/release.png` - Pipeline and Release icon image
- `icons/story.png` - User Story icon image
- `icons/feature.png` - Feature icon image
- `icons/epic.png` - Epic icon image
- `icons/readiness.png` - Release Readiness icon image
- `gavel.png` - Decision icon image
- `icons/mag.png` - Search icon image
- `icons/board.png` - Board icon image
- `icons/wiki.png` - Wiki icon image
- `icons/code.png` - Repos icon image
- `icons/dashboard.png` - Dashboard icon image
- `icons/vase.png` - Artifacts icon image
- `icons/query.png` - Queries icon image
- `icons/settings.png` - Settings icon image
- `icons/independent-variable.png` - Library icon image
- `icons/ado.png` - Default Azure DevOps icon image
- `CHANGELOG.md` - Version history and changes
- `README.md` - This file

## How It Works

The extension:
1. Detects when you're on an Azure DevOps domain (dev.azure.com or visualstudio.com)
2. Monitors the page title and URL for changes using MutationObserver and polling
3. Matches the title or URL against known patterns (Bug, Pull request, Feature, Epic, Boards, Wikis, Releases, Dashboards, Artifacts, Queries, Settings, Library, etc.)
4. Checks URL patterns first (more specific), then falls back to title patterns
5. Replaces the favicon with the corresponding custom icon
6. Falls back to the default ADO icon for pages that don't match any pattern

## Notes

- The extension only processes pages on Azure DevOps domains
- All icons use PNG format for consistent, professional appearance
- Icon changes persist during navigation within ADO
- Default ADO icon ensures all ADO pages have a recognizable icon

## Icon Credits

### Flaticon Icons

The following icons are sourced from [Flaticon](https://www.flaticon.com) and are used under their licensing terms:

- **Story Icon**: [Book icons created by kmg design - Flaticon](https://www.flaticon.com/free-icons/book)
- **Board Icon**: [Kanban icons created by bearicons - Flaticon](https://www.flaticon.com/free-icons/kanban)
- **Bug Icon**: [Bug icons created by andinur - Flaticon](https://www.flaticon.com/free-icons/lady)
- **Dashboard Icon**: [Layout icons created by Vector Bazar - Flaticon](https://www.flaticon.com/free-icons/layout)
- **Epic Icon**: [Crown icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/crown)
- **Feature Icon**: [Trophy icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/trophy)
- **Variable Icon**: [Variable icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/variable)
- **Query Icon**: [Query icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/query)
- **Release Icon**: [Rocket icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/rocket)
- **Settings Icon**: [Settings icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/settings)
- **Story Icon (Alt)**: [Book icons created by smashicons - Flaticon](https://www.flaticon.com/free-icons/book)
- **Wiki Icon**: [Wiki icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/wiki)
- **Pull Request Icon**: [Git commit icons created by Cap Cool - Flaticon](https://www.flaticon.com/free-icons/commit-git)
- **Gavel Icon**: [Gavel icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/gavel)

### Other Icons

All other icons used in this extension are open source emojis.

---

*We appreciate the work of these talented designers and the Flaticon platform for providing high-quality icons.*
