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
  enableSettings: true
};

// Load saved settings
function loadSettings() {
  chrome.storage.sync.get(DEFAULT_SETTINGS, (items) => {
    document.getElementById('enableBug').checked = items.enableBug;
    document.getElementById('enablePR').checked = items.enablePR;
    document.getElementById('enableStory').checked = items.enableStory;
    document.getElementById('enablePipeline').checked = items.enablePipeline;
    document.getElementById('enableFeature').checked = items.enableFeature;
    document.getElementById('enableEpic').checked = items.enableEpic;
    document.getElementById('enableReadiness').checked = items.enableReadiness;
    document.getElementById('enableSearch').checked = items.enableSearch;
    document.getElementById('enableBoard').checked = items.enableBoard;
    document.getElementById('enableWiki').checked = items.enableWiki;
    document.getElementById('enableRepos').checked = items.enableRepos;
    document.getElementById('enableLibrary').checked = items.enableLibrary;
    document.getElementById('enableRelease').checked = items.enableRelease;
    document.getElementById('enableDashboard').checked = items.enableDashboard;
    document.getElementById('enableArtifacts').checked = items.enableArtifacts;
    document.getElementById('enableQueries').checked = items.enableQueries;
    document.getElementById('enableSettings').checked = items.enableSettings;
  });
}

// Save settings
function saveSettings() {
  const settings = {
    enableBug: document.getElementById('enableBug').checked,
    enablePR: document.getElementById('enablePR').checked,
    enableStory: document.getElementById('enableStory').checked,
    enablePipeline: document.getElementById('enablePipeline').checked,
    enableFeature: document.getElementById('enableFeature').checked,
    enableEpic: document.getElementById('enableEpic').checked,
    enableReadiness: document.getElementById('enableReadiness').checked,
    enableSearch: document.getElementById('enableSearch').checked,
    enableBoard: document.getElementById('enableBoard').checked,
    enableWiki: document.getElementById('enableWiki').checked,
    enableRepos: document.getElementById('enableRepos').checked,
    enableLibrary: document.getElementById('enableLibrary').checked,
    enableRelease: document.getElementById('enableRelease').checked,
    enableDashboard: document.getElementById('enableDashboard').checked,
    enableArtifacts: document.getElementById('enableArtifacts').checked,
    enableQueries: document.getElementById('enableQueries').checked,
    enableSettings: document.getElementById('enableSettings').checked
  };
  
  chrome.storage.sync.set(settings, () => {
    // Show success message
    const status = document.getElementById('status');
    status.textContent = 'Settings saved successfully!';
    status.className = 'status success show';
    
    // Hide message after 3 seconds
    setTimeout(() => {
      status.className = 'status success';
    }, 3000);
  });
}

// Load settings when page opens
document.addEventListener('DOMContentLoaded', loadSettings);

// Save settings when button is clicked
document.getElementById('save').addEventListener('click', saveSettings);

