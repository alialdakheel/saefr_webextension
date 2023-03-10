"use strict";

// loader-code: wait until gmailjs has finished loading, before triggering actual extensiode-code.
const loaderId = setInterval(() => {
    if (!window._gmailjs) {
        return;
    }

    clearInterval(loaderId);
    startExtension(window._gmailjs);
}, 100);

// actual extension-code
// Getting the Email Message automaically when a user opens an email
function startExtension(gmail) {
    window.gmail = gmail;

    gmail.observe.on("load", () => {

        gmail.observe.on("view_email", (domEmail) => {
            var body = domEmail.body();
            var message = body.replace(/<[^>]+>/g, '');
            console.log("Email Message Body:", message);

            // TO DO: 
            //Send the message to model.js to calculate score? (or just calculate it here).
            //View the message score to user frontend. 

        });

    });
}
