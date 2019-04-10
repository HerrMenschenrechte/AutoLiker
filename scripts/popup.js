const scriptDetails = {
  file: "scripts/contentScript.js"
};

    
  document.addEventListener('DOMContentLoaded', function() {
    var startLikes = document.getElementById('startLikes');
    var stopLikes = document.getElementById('stopLikes')
    // onClick's logic below:
    startLikes.addEventListener('click', function() {
      chrome.tabs.executeScript(scriptDetails);
      startLikes.innerHTML = "Liking...";
      });

    stopLikes.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currTab = tabs[0];
        startLikes.innerHTML = "Start Liking";
        chrome.tabs.reload(currTab.id);
      });

        });
});
