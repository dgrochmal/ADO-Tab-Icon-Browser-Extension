// Listen for tab updates (page loads)
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act when the page has finished loading
  if (changeInfo.status === "complete" && tab.url) {
    console.log('=== Tab Icon Changer (Background) ===');
    console.log('Tab ID:', tabId);
    console.log('Tab Title:', tab.title);
    console.log('Tab URL:', tab.url);
    console.log('Hostname:', new URL(tab.url).hostname);
    console.log('======================================');
    
    // Change the favicon for the tab
    changeFavicon(tabId, tab.url);
  }
});

// Function to change the favicon
function changeFavicon(tabId, url) {
  // You can customize this logic based on URL patterns or other criteria
  // For now, we'll inject a script to change the favicon
  
  const code = `
    (function() {
      // Only process if we're on an Azure DevOps page
      const hostname = window.location.hostname;
      if (!hostname.includes('dev.azure.com') && !hostname.includes('visualstudio.com') && !hostname.includes('dev.azure.com.mcas.ms')) {
        return;
      }
      
      // Remove existing favicons
      const existingIcons = document.querySelectorAll('link[rel*="icon"]');
      existingIcons.forEach(icon => icon.remove());
      
      // Create new favicon
      const link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      
      // Example: Change icon based on domain
      const pageTitle = document.title;
      const pageUrl = window.location.href;
      
      // Log information for debugging
      console.log('=== Tab Icon Changer ===');
      console.log('Hostname:', hostname);
      console.log('Page Title:', pageTitle);
      console.log('Page URL:', pageUrl);
      console.log('========================');
      
      // You can customize this to use different icons based on URL patterns
      // For demonstration, we'll use a simple colored data URI favicon
      if (pageTitle.startsWith('Bug')) {
        link.href = browser.runtime.getURL('icons/bug.png');
      } else if (pageTitle.startsWith('Pipelines')) {
        link.href = browser.runtime.getURL('icons/release.png');
      } else if (pageTitle.startsWith('User Story')) {
        link.href = browser.runtime.getURL('icons/story.png');
      } else if (pageTitle.startsWith('Feature')) {
        link.href = browser.runtime.getURL('icons/feature.png');
      } else if (pageTitle.startsWith('Epic')) {
        link.href = browser.runtime.getURL('icons/epic.png');
      } else if (pageTitle.startsWith('Release Readiness')) {
        link.href = browser.runtime.getURL('icons/readiness.png');
      } else if (pageTitle.includes(' - Search')) {
        link.href = browser.runtime.getURL('icons/mag.png');
      } else if (pageTitle.includes(' - Boards')) {
        link.href = browser.runtime.getURL('icons/board.png');
      } else if (pageTitle.startsWith('Pull request')) {
        link.href = browser.runtime.getURL('icons/pr.png');
      } else if (pageUrl.includes('_wiki/wikis')) {
        link.href = browser.runtime.getURL('icons/wiki.png');
      } else if (pageUrl.includes('/_library')) {
        link.href = browser.runtime.getURL('icons/independent-variable.png');
      } else if (pageUrl.includes('/_pulls')) {
        link.href = browser.runtime.getURL('icons/pr.png');
      } else if (pageTitle.includes(' - Repos')) {
        link.href = browser.runtime.getURL('icons/code.png');
      } else if (pageUrl.includes('/_release')) {
        link.href = browser.runtime.getURL('icons/release.png');
      } else if (pageUrl.includes('/_dashboards')) {
        link.href = browser.runtime.getURL('icons/dashboard.png');
      } else if (pageUrl.includes('/_artifacts')) {
        link.href = browser.runtime.getURL('icons/vase.png');
      } else if (pageUrl.includes('/_queries')) {
        link.href = browser.runtime.getURL('icons/query.png');
      } else if (pageUrl.includes('/_settings')) {
        link.href = browser.runtime.getURL('icons/settings.png');
      } else {
        // Default custom icon for all other sites
        link.href = browser.runtime.getURL('icons/ado.png');
      }
      
      document.head.appendChild(link);
    })();
  `;
  
  // Execute the script in the tab
  browser.tabs.executeScript(tabId, {
    code: code,
    runAt: "document_end"
  }).catch(error => {
    console.error(`Error changing favicon for tab ${tabId}:`, error);
  });
}

// Listen for when the extension is installed or updated
browser.runtime.onInstalled.addListener(() => {
  console.log("Tab Icon Changer extension installed!");
});

