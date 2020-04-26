const enableExtension = () => {
    chrome.runtime.sendMessage({ command: 'enable' });  
  };

  enableExtension();

console.log("whatafuck");