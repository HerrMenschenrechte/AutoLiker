let profilePage = document.getElementById('profilePage');

let scriptDetails = {
  file: "contentScript.js"
}

  chrome.storage.sync.get('color', function(data) {
    profilePage.style.backgroundColor = data.color;
    profilePage.setAttribute('value', data.color);
  });

  

  profilePage.onclick = chrome.tabs.executeScript(scriptDetails);

