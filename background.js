//Wait for click

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
  	"file": "popup.js"
  }, function(){ 
  	"popup.js";
  	console.log("Script Executed ...");
  });
})

chrome.commands.onCommand.addListener(function(command) {

  chrome.tabs.executeScript(null, {
  	"file": "popup.js"
  }, function(){ 
  	"popup.js";
  	console.log("Script Executed ...");
  });

});