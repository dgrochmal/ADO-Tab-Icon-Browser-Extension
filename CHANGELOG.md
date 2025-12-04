# Changelog

All notable changes to the ADO Tab Icons extension will be documented in this file.

## [1.4.0] - 2025-10-16

### Added
- Support for Repos icon detection (tabs ending with "- Repos")
- New icon: code.png for repository/code pages
- Options page checkbox for Repos icons
- New icons added for pipeline, bug, story, etc

## [1.3.0] - 2025-10-15

### Added
- Support for Board icon detection (tabs ending with "- Boards")
- Support for Wiki icon detection (URLs containing "_wiki/wikis")
- New icons: board.png and wiki.png
- Icon previews on the options page - see each icon before enabling/disabling
- Options page checkboxes for Board and Wiki icons

### Improved
- Enhanced options page UI with visual icon previews for better user experience

## [1.2.0] - 2025-10-15

### Added
- Support for Search icon detection (tabs ending with "- Search")
- New icon: mag.png for search pages
- Default ADO icon fallback (ado.png) for pages that don't match any pattern
- Azure DevOps domain detection to only process ADO pages

### Fixed
- Icon now properly reverts to default ADO icon when navigating from a custom icon page to a non-matching ADO page
- Improved reliability of icon switching during navigation

## [1.0.1] - 2025-10-10

### Added
- Support for Feature, Epic, and Release Readiness icon detection (tabs starting with "Feature", "Epic", or "Release Readiness")
- New icons: feature.png, epic.png, readiness.png
- Options page checkboxes for Feature, Epic, and Release Readiness icons
- Saved preferences for all new icon types

### Fixed
- Improved icon detection for dynamic title changes on all sites


## [1.0.0] - 2025-10-08

### Added
- Initial release
- Support for Bug icon detection (tabs starting with "Bug")
- Support for Pull request icon detection (tabs starting with "Pull request")
- Support for User Story icon detection (tabs starting with "User Story")
- Dynamic title monitoring with MutationObserver and polling
- PNG-based icons for consistent appearance across platforms
- Options page to enable/disable individual icon types
- User preferences saved and synced via Chrome Storage
- CHANGELOG.md to track version history

