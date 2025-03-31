
(function() {
  const title = document.querySelector("title")?.innerText || "untitled";
  const text = document.body.innerText;

  chrome.runtime.sendMessage({
    type: "downloadText",
    payload: { title, text }
  });
})();
