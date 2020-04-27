const enableExtension = () => {
    chrome.runtime.sendMessage({ command: 'enable' });  
  };

  enableExtension();

console.log("whatafuck");

chrome.runtime.sendMessage({message: "checkTabs"}, (response) => {
  console.log(response.message);
});