const enableExtension = () => {
    chrome.runtime.sendMessage({ command: 'enable' });  
  };

enableExtension();

let setBusy = () => {
  chrome.runtime.sendMessage({ "newIconPath" : "icons/red128.png" });
  // document.getElementById("status")[0].innerText = "busy"; //change popup message
};

let setFree = () => {
  chrome.runtime.sendMessage({ "newIconPath" : "icons/green128.png" });
  // document.getElementById("status")[0].innerText = "free";
};

let checkTabs = (tabs) => {
  if (tabs.length) {
    for (var i = 0; i < tabs.length; i++) {
      let url = tabs[i].url;
      if (url.indexOf("netflix") !== -1) {
        setBusy();
        console.log("active");
      }
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

requestTabs();
