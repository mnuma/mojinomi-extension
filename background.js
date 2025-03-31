
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "downloadText") {
    const { title, text } = message.payload;
    const encoded = encodeURIComponent(text);
    const dataUrl = "data:text/plain;charset=utf-8," + encoded;

    chrome.downloads.download({
      url: dataUrl,
      filename: title + ".txt",
      saveAs: false
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
