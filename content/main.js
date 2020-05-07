const enableExtension = () => {
    chrome.runtime.sendMessage({ command: 'enable', message: "start" });  
  };

let checkTabs = (tabs) => {
  if (tabs.length) {
    for (var i = 0; i < tabs.length; i++) {
      let title = tabs[i].title;
      chrome.runtime.sendMessage({ message: "changeIcon", "newIconPath" : title === "Netflix"? "icons/red128.png" : "icons/green128.png" });
    }
  }
};

let requestTabs = () => {
  chrome.runtime.sendMessage({message: "checkTabs"}, (response) => {
    console.log(response.message);
    let tabs = response.message;
    checkTabs(tabs);
  });
};


enableExtension();
requestTabs();
