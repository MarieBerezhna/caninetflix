const enableExtension = () => {
    chrome.runtime.sendMessage({ command: 'enable' });  
  };

let setBusy = () => {
  chrome.runtime.sendMessage({ message: "changeIcon", "newIconPath" : "icons/red128.png" });
 //document.getElementById("status")[0].innerText = "busy"; //change popup message
};

let setFree = () => {
  chrome.runtime.sendMessage({ message: "changeIcon", "newIconPath" : "icons/green128.png" });
  // document.getElementById("status")[0].innerText = "free";
};

let checkTabs = (tabs) => {
  if (tabs.length) {
    for (var i = 0; i < tabs.length; i++) {
      let title = tabs[i].title;
      if (title === "Netflix") {
        setBusy();
        console.log("active");
      } else {
        setFree();
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


enableExtension();
requestTabs();
