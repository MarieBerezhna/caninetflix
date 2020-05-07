$(document).ready(function () {
    $("#status").text("busy");
    console.log("popup, " + Date.now());
});
const enableExtension = () => {
    chrome.runtime.sendMessage({ 
        command: 'enable', 
        message: "start" 
      });  
  };

let checkTabs = (tabs) => {
  console.log(tabs);
  if (tabs.length) {
    for (var i = 0; i < tabs.length; i++) {
      let title = tabs[i].title;
      chrome.runtime.sendMessage({ 
        message: "changeIcon", 
        "newIconPath" : title === "Netflix"? "icons/red128.png" : "icons/green128.png" 
      });
    }
  }
};

let requestTabs = () => {
  console.log("here");
  chrome.runtime.sendMessage({
    message: "checkTabs"
  }, (response) => {
    debugger;
    console.log(response.message);
    let tabs = response.message;
    checkTabs(tabs);
  });
};


enableExtension();
requestTabs();

