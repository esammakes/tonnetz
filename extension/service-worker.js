// when user clicks extension icon, find active tab.
// if it's a Youtube Watch page
// send message to that tab to toggle panel
// otherwise, send message that content script will no go

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.id) return;

  chrome.tabs.sendMessage(tab.id, { type: "TONNETZ_TOGGLE_PANEL" });
});
