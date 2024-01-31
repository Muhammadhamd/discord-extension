

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === "gettabledata") {
        console.log("haha");

        try {
            // const trElements = document.querySelectorAll("#dataTable tbody > tr");
            console.log()
            
            var h2Element = document.querySelector(".privateChannels__93473 ul h2");

  if (h2Element) {
    // Find all <li> elements that come after the <h2> element
    var liElementsAfterH2 = [];
    var nextElement = h2Element.nextElementSibling;

    while (nextElement) {
      if (nextElement.tagName.toLowerCase() === 'li') {
        liElementsAfterH2.push(nextElement);
      }
      nextElement = nextElement.nextElementSibling;
    }

    // Print the text content of the <li> elements
    liElementsAfterH2.forEach((liElement)=> {
      const link = liElement.querySelector("div a").href

              chrome.runtime.sendMessage({ action: "openNewTab", url: link }, function(response) {
                        if (response.status === "Success") {
                            const tabId = response.tabId;
                            console.log("New tab created with ID:", tabId, "and message", response.message);


                        } else {
                            console.error("Error opening new tab:", response.message);
                        }
                    });



    });
  } else {
    console.log("No <h2> element found.");
  }
            // trElements.forEach((each) => {
            //     if (each.classList.contains("odd") || each.classList.contains("even")) {
            //         const link = each.querySelector("td:nth-child(3) a").href;


            

            sendResponse({ status: "Success!" });
        } catch (error) {
            console.error(error);
            sendResponse({ status: "Exception occurred!" });
        }

    }
});