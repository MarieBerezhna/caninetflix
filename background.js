chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    switch (request.message) {

      case "start":
        console.log("start");
      break;
      case "checkTabs":
      let users = [];
      //get data from database add to users
        chrome.tabs.query({"audible": true, "active": true, "title": "Netflix"}, function (tabs) {
            console.log(tabs);
            
            sendResponse({
              message: tabs.length? true : false
              
            });
          });
      break;
      case "updateStatus":
        chrome.browserAction.setIcon({
          path: request.newIconPath
      });
      console.log("icon");

      // send new data to server (local user active/inactive)
      break;
      default:
        console.log("No request message");
      break;
    }
    return true;
  });