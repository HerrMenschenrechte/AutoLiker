const scriptDetails = {
  file: "contentScript.js"
};

    
  document.addEventListener('DOMContentLoaded', function() {
    var startLikes = document.getElementById('startLikes');
    var stopLikes = document.getElementById('stopLikes')
    // onClick's logic below:
    startLikes.addEventListener('click', function() {
      chrome.tabs.executeScript(scriptDetails);  
      });

    stopLikes.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currTab = tabs[0];
        console.log(currTab)
        chrome.tabs.remove(currTab.id)
      });

        });
});
