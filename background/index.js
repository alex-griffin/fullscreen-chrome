chrome.windows.onCreated.addListener((window) => {
  chrome.windows.update(window.id, { state: "fullscreen" })
})
