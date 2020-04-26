// class BackgroundScript {
//     constructor () {

//     }
//     tabs () { 
//         return chrome.tabs;
//     }
// }
// var backScript = new BackgroundScript();
// console.log("stigidish");
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs);
  });
  chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.pageAction.show(tab.id);
    chrome.tabs.executeScript(null, {"file": "path/to/extension.js"});
});
