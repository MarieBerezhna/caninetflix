let msg;


chrome.tabs.query({"audible": true}, function (tabs) {
  console.log(tabs);
  msg = tabs;
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    if (request.message === "checkTabs")
    sendResponse({message: msg});
    return true;
  });
