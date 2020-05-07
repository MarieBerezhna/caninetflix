
let msg; 

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    switch (request.message) {

      case "start":
        console.log("start");
      break;
      case "checkTabs":
        chrome.tabs.query({"audible": true, "active": true}, function (tabs) {
            console.log(tabs);
            msg = tabs;
            sendResponse({message: msg});
          });
      break;
      case "changeIcon":
        chrome.browserAction.setIcon({
          path: request.newIconPath
      });
      console.log("icon");
      break;
      default:
        console.log("No request message");
      break;
    }
    return true;
  });