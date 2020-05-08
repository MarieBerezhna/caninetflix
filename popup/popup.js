let activeNetflix;


const enableExtension = () => {
    chrome.runtime.sendMessage({ 
        command: 'enable', 
        message: "start" 
      });  
  };
const updateStatus = () => {
    let status = activeNetflix? "busy": "free";
    $("#status").attr('status', status).text(status);
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
    console.log(activeNetflix);
    updateStatus();
  });
};
enableExtension();
requestStatus();

chrome.runtime.onStartup.addListener(() => {
    requestStatus();
  });
chrome.tabs.onUpdated.addListener(() => {
    requestStatus();
});