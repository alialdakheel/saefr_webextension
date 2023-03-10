
# SAEFR Email Security Risk Score Extension

This repo contains a google chrome extension that calculates the Security Risk of an email message. 


## Retreving the message body of an email:

Based on the project: https://github.com/josteink/gmailjs-node-boilerplate

that Uses the Gmail.js API: [gmail.js](https://github.com/KartikTalwar/gmail.js/) library.

## Usage


````
# get code by cloning it. 

# get deps and build
cd Saefr
npm install
npm update
npm run build
````

On Chrome: 

* Go to chrome://extensions.
* Enable Developer Mode.
* Click the Load unpacked and select the project folder. 
* Now you can pin and use the extension. 

for more info: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/


* The extension only print the message body to developer console (for now) when a user open a gmail message. 
* etension.js is where you need to edit for message handling, viewing, etc. 


To Do: 
* Send the message to a file "model.js" to calculate score? (or just calculate it in extension.js):
    - Decide which APIs we will be using in model.js. (I think we have a couple of ones in notion)
    - Setup Sagemaker and use AWS for the SPAM or HAM UCI dataset? 
    - Decide the scoring methodology.. :)
    
* View the message score to user frontend. this ref can help: https://github.com/picopalette/phishing-detection-plugin




