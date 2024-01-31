document.addEventListener("DOMContentLoaded", (e) => {

    /* Auto fill form */
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "filldata",
        }, function(response) {
            console.log(response);
        });
    });
})