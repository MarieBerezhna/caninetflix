let activeNetflix;

const enableExtension = () => {
    chrome.runtime.sendMessage({ 
        command: 'enable', 
        message: "start" 
      });  
  };
const updateStatus = () => {
    $("#status").text(activeNetflix? "busy": "free");
    chrome.runtime.sendMessage({ 
        message: "updateStatus", 
        "newIconPath" : activeNetflix? "icons/red128.png" : "icons/green128.png",
        "users" : activeNetflix? 1 : 0
    });

};
let requestStatus = () => {
  chrome.runtime.sendMessage({
    message: "checkTabs"
  }, (response) => {
    activeNetflix = response.message; //true : false
    updateStatus();
  });
};
enableExtension();
requestStatus();

chrome.runtime.onStartup.addListener(() => {
    requestStatus();
  });
chrome.tabs.onActiveChanged.addListener(() => {
    requestStatus();
});
chrome.tabs.onUpdated.addListener(() => {
    requestStatus();
});

