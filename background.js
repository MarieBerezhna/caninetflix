
let msg; 

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    if (request.message === "checkTabs")
    chrome.tabs.query({"audible": true}, function (tabs) {
      console.log(tabs);
      msg = tabs;
      sendResponse({message: msg});
    });

    return true;
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "changeIcon") {
        chrome.browserAction.setIcon({
          path: request.newIconPath
      });
      }
    });