chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL("background/background.html");
    let tab = await chrome.tabs.create({ url });
    console.log(tab.id);

});



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openNewTab") {
        const url = request.url;

        chrome.tabs.create({ url }, function(tab) {
            if (chrome.runtime.lastError) {
                sendResponse({ status: "Error", message: chrome.runtime.lastError });
            } else {
                chrome.scripting
                    .executeScript({
                        target: { tabId: tab.id },
                        files: ["getdata.js"],
                    })
                    .then(() => { sendResponse({ status: "Success", tabId: tab.id, message: "hofaya" }); })
                    .catch((e) => {
                        console.log(e)
                        sendResponse({ status: "Success", tabId: tab.id, message: e.message });
                    })



                // executeGetdata(tab.id);
            }
        });

        return true;
    }

  


});

// function executeGetdata(id) {
//     chrome.runtime.sendMessage({ action: "executeGetDataJS" }, function(response) {

//     })
// }




chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action === "openFormTab") {
        const dataofuser = request;
        
      
        function consoledata(requestData) {
            let data = requestData?.data
            let index = data?.case_name_number.indexOf('/');
// let valueBeforeSlash = index !== -1 ? originalString.substring(0, index).trim() : originalString.trim();

document.getElementById("caseName").value =index !== -1 ? data?.case_name_number.substring(0, index).trim() : data?.case_name_number.trim();
document.getElementById("caseId").value =index !== -1 ? data?.case_name_number.substring(index + 1).trim() : "";
document.getElementById("p_first_name").value = data?.first_name;        
document.getElementById("p_last_name").value = data?.last_name;        
document.getElementById("p_email").value = data?.email;        


// for gender selection

         

for (let i = 0; i < document.getElementById("participant-gender").options.length; i++) {
    if (document.getElementById("participant-gender").options[i].value === data?.gender) {
        document.getElementById("participant-gender").options[i].selected = true;
        break;
    }else{
        document.getElementById("participant-gender").options[2].selected = true;

    }
}
// for gender selection

         
// for (let i = 0; i < document.getElementById("Program").options.length; i++) {
//     if (document.getElementById("Program").options[i].innerHTML === data?.service_type) {
//         document.getElementById("Program").options[i].selected = true;
//         break;
//     }
// }

document.getElementById("select2-Program-container").click()

// ... (rest of your code)

}
        // Get the extension URL for "ext/form.html"
        const url = "https://phpstack-868574-4083298.cloudwaysapps.com/case-information/create";

        // Create a new tab with the form.html URL
        chrome.tabs.create({ url }, function(tab) {
            if (chrome.runtime.lastError) {
                sendResponse({ status: "Error", message: chrome.runtime.lastError });
            } else {
                chrome.scripting
                    .executeScript({
                        target: { tabId: tab.id },
                        func: consoledata,
                        args: [request], // Pass the request data as an argument
                    })
                    .then(() => { sendResponse({ status: "Success", tabId: tab.id, message: "done" }); })
                    .catch((e) => {
                        console.log(e);
                        sendResponse({ status: "Success", tabId: tab.id, message: e.message });
                    });
            }
        });

        return true;
    }
});
