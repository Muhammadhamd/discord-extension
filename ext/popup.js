document.getElementById("click").addEventListener("click", () => {
    /* Auto fill form */
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "gettabledata"
            // name: document.getElementById('name').value
        }, function(response) {
            console.log(response);
        });
    });
});