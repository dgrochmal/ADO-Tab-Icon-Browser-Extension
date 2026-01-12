// Default settings
const DEFAULT_SETTINGS = {
  enableBug: true,
  enablePR: true,
  enableStory: true,
  enablePipeline: true,
  enableFeature: true,
  enableEpic: true,
  enableReadiness: true,
  enableSearch: true,
  enableBoard: true,
  enableWiki: true,
  enableRepos: true,
  enableLibrary: true,
  enableRelease: true,
  enableDashboard: true,
  enableArtifacts: true,
  enableQueries: true,
  enableSettings: true,
  enableDecision: true,
};

// Function to get the appropriate icon based on title and URL
async function getIconForTitle(title) {
  // Check if extension context is still valid
  if (!chrome.runtime?.id) {
    return null;
  }
  
  try {
    // Get user settings
    const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
    const currentUrl = window.location.href;
    
    // Check URL-based patterns first (more specific)
    if (currentUrl.includes('_wiki/wikis') && settings.enableWiki) {
      return chrome.runtime.getURL('icons/wiki.png');
    }
    if (currentUrl.includes('/_library') && settings.enableLibrary) {
      return chrome.runtime.getURL('icons/independent-variable.png');
    }
    if (currentUrl.includes('/_pulls') && settings.enableLibrary) {
      return chrome.runtime.getURL('icons/pr.png');
    }
    if (currentUrl.includes('/_release') && settings.enableRelease) {
      return chrome.runtime.getURL('icons/release.png');
    }
    if (currentUrl.includes('/_dashboards') && settings.enableDashboard) {
      return chrome.runtime.getURL('icons/dashboard.png');
    }
    if (currentUrl.includes('/_artifacts') && settings.enableArtifacts) {
      return chrome.runtime.getURL('icons/vase.png');
    }
    if (currentUrl.includes('/_queries') && settings.enableQueries) {
      return chrome.runtime.getURL('icons/query.png');
    }
    if (currentUrl.includes('/_settings') && settings.enableSettings) {
      return chrome.runtime.getURL('icons/settings.png');
    }
    
    // Check title-based patterns
    if (title.startsWith('Bug') && settings.enableBug) {
      return chrome.runtime.getURL('icons/bug.png');
    } else if (title.startsWith('Pull request') && settings.enablePR) {
      return chrome.runtime.getURL('icons/pr.png');
    } else if (title.startsWith('User Story') && settings.enableStory) {
      return chrome.runtime.getURL('icons/story.png');
    } else if (title.startsWith('Pipelines') && settings.enablePipeline) {
      return chrome.runtime.getURL('icons/release.png');
    } else if (title.startsWith('Feature') && settings.enableFeature) {
      return chrome.runtime.getURL('icons/feature.png');
    } else if (title.startsWith('Epic') && settings.enableEpic) {
      return chrome.runtime.getURL('icons/epic.png');
    } else if (title.startsWith('Release Readiness') && settings.enableReadiness) {
      return chrome.runtime.getURL('icons/readiness.png');
    } else if (title.startsWith('Decision') && settings.enableDecision) {
      return chrome.runtime.getURL('icons/gavel.png');
    } else if (title.endsWith('- Search') && settings.enableSearch) {
      return chrome.runtime.getURL('icons/mag.png');
    } else if (title.endsWith('- Boards') && settings.enableBoard) {
      return chrome.runtime.getURL('icons/board.png');
    } else if (title.endsWith('- Repos') && settings.enableRepos) {
      return chrome.runtime.getURL('icons/code.png');
    } 
    return null;
  } catch (error) {
    // Extension context invalidated, stop execution gracefully
    console.log('Extension context invalidated, stopping icon updates');
    return null;
  }
}

// Function to check if we're on an Azure DevOps page
function isAzureDevOpsPage() {
  return window.location.hostname.includes('dev.azure.com') || 
         window.location.hostname.includes('visualstudio.com');
}

// Function to update the favicon
async function updateFavicon() {
  try {
    // Check if extension context is still valid
    if (!chrome.runtime?.id) {
      cleanup();
      return;
    }
    
    const title = document.title;
    const iconUrl = await getIconForTitle(title);
    
    // Only process if we're on an Azure DevOps page
    if (isAzureDevOpsPage()) {
      // Remove existing favicon links
      const existingLinks = document.querySelectorAll("link[rel*='icon']");
      existingLinks.forEach(link => link.remove());
      
      // Create new favicon link
      const link = document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      
      // Use custom icon if pattern matches, otherwise use default ADO icon
      link.href = iconUrl || chrome.runtime.getURL('icons/ado.png');
      
      // Add the new favicon to the document head
      document.head.appendChild(link);
    }
  } catch (error) {
    // Extension context invalidated, cleanup
    cleanup();
  }
}

// Cleanup function to stop observers and intervals
let observer = null;
let titleCheckInterval = null;

function cleanup() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (titleCheckInterval) {
    clearInterval(titleCheckInterval);
    titleCheckInterval = null;
  }
}

// Run on page load
updateFavicon();

// Watch for title changes using MutationObserver
observer = new MutationObserver(() => {
  updateFavicon();
});

// Observe the title element for changes
const titleElement = document.querySelector('title');
if (titleElement) {
  observer.observe(titleElement, {
    childList: true,
    characterData: true,
    subtree: true
  });
}

// Also watch for direct title changes via document.title
let lastTitle = document.title;
titleCheckInterval = setInterval(() => {
  if (document.title !== lastTitle) {
    lastTitle = document.title;
    updateFavicon();
  }
}, 500);

