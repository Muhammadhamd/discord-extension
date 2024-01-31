
setTimeout(() => {
// const targetElement = document.querySelector('.textArea__74543 div');
//     // targetElement.innerHTML = `<div role="textbox" aria-multiline="true" spellcheck="true" onfocus="" aria-haspopup="listbox" aria-invalid="false" aria-autocomplete="list" class="markup_a7e664 editor__66464 slateTextArea__0661c fontSize16Padding__48818" autocorrect="off" data-can-focus="true" aria-label="Message @hamd" data-slate-editor="true" data-slate-node="value" contenteditable="true" zindex="-1" style="position: relative; outline: none; white-space: pre-wrap; overflow-wrap: break-word;"><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" class=""><span data-slate-string="true">dda</span></span></span></div></div>`
//     //   document.querySelector(".form__13a2c").submit()
//     // targetElement.querySelector("[role='textbox'] div").focus()
//     // console.log(targetElement.querySelector("[role='textbox'] div"));
// Your Discord API endpoint
const apiUrl = "https://discord.com/api/v9/channels/1202336629575143436/messages";

// Your Discord authorization token
const authToken = "MTIwMjMyOTc5MTUwNDU4ODgyMw.GVXbJ7.pdPplNnql_r3GHWIV3ZgyVVskfWQ4RD7zAvtgk";

// Construct the headers for the request
const headers = new Headers({
  "Content-Type": "application/json",
  "Authorization": authToken,
  // Add any other necessary headers
});

// Construct the data payload for the request
const data = {
  content: "hamd bhai",  // Replace with your actual message content
  nonce: "1202383645713629184",  // Replace with your actual nonce
  tts: false,
  flags: 0,
  mobile_network_type: "unknown",
};

// Make the POST request using the Fetch API
fetch(apiUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Message sent successfully:", data);
  })
  .catch(error => {
    console.error("Error sending message:", error);
  });
}, 10000);
 
 // let dataArray = {};
// let streetCounter = {}; // To store counters for each key
// let stateCounter = {}; // To store counters for each key
// let cityCounter = {}; // To store counters for each key
// let zipcounter = {}; // To store counters for each key
// let countrycounter = {}; // To store counters for each key
// let addresscounter = {}; // To store counters for each key

try {
    // const dataelement = document.querySelectorAll(".fild-value-row");
    //   document.querySelector("#parent-tab6 div .table tbody td a")
    // dataelement.forEach((each) => {
    //     const keyElement = each.querySelector(".fild-column");
    //     let key = getPlainText(keyElement.innerHTML);
        
    //     // Remove anything within parentheses and the parentheses themselves
    //     key = key.replace(/\([^)]*\)/g, '').trim();
    //     console.log(key)
    //     // If the key is "street", append the streetCounter
    //     if (key === "Street") {
    //         console.log(key)
    //         let counter = (streetCounter[key] || 0) + 1;
    //         streetCounter[key] = counter;
    //         key = key + counter;
    //     }else if (key === "State") {
    //         console.log(key)
    //         let counter = (stateCounter[key] || 0) + 1;
    //         stateCounter[key] = counter;
    //         key = key + counter;
    //     }else if (key === "City") {
    //         console.log(key)
    //         let counter = (cityCounter[key] || 0) + 1;
    //         cityCounter[key] = counter;
    //         key = key + counter;
    //     }else if (key === "Zip") {
    //         console.log(key)
    //         let counter = (zipcounter[key] || 0) + 1;
    //         zipcounter[key] = counter;
    //         key = key + counter;
    //     }
    //     else if (key === "Country") {
    //         console.log(key)
    //         let counter = (countrycounter[key] || 0) + 1;
    //         countrycounter[key] = counter;
    //         key = key + counter;
    //     }else if (key === "Address Type") {
    //         console.log(key)
    //         let counter = (addresscounter[key] || 0) + 1;
    //         addresscounter[key] = counter;
    //         key = key + counter;
    //     }

    //     const formattedKeyReplaced = key.replace(/[\/\s]+/g, '_').toLowerCase();

    //     const valueElement = each.querySelector(".value-column");
    //     const value = getPlainText(valueElement.innerHTML);

    //     dataArray[formattedKeyReplaced] = value;
    // });

    // const buttonis = document.querySelector(".userActions__8fade")


      
    //   chrome.runtime.sendMessage({ action: "openFormTab", data: dataArray , link: document.querySelector("#parent-tab6 div .table tbody td a").href}, function (response) {
    //     console.log(response);
    // });
} catch (error) {
    console.error(error);
}

// function getPlainText(html) {
//     const tempElement = document.createElement("div");
//     tempElement.innerHTML = html;

//     const plainText = tempElement.textContent || tempElement.innerText;

//     tempElement.remove();

//     return plainText.trim();
// }
