// 1- Interfaces
class WhatsApp {
    appName;
    constructor(appName) {
        this.appName = appName;
    }
    openApp() {
        console.log(`${this.appName} is open!`);
    }
    closeApp() {
        console.log(`${this.appName} is closed!`);
    }
}
class YouTube {
    appName = "YouTube";
    openApp() {
        console.log(`${this.appName} is open!`);
    }
    closeApp() {
        console.log(`${this.appName} is closed!`);
    }
}
// Now creating an object of WhatApp class
const whatsApp = new WhatsApp("WhatApp");
whatsApp.openApp();
whatsApp.closeApp();
// The other one is YouTube
const youTube = new YouTube();
youTube.openApp();
youTube.closeApp();
class GoogleSearch {
    search(query, pageNumber) {
        if (pageNumber) {
            console.log(`${query} on page ${pageNumber}`);
        }
        else {
            console.log(`${query} on page 1 (Default)`);
        }
    }
}
const web = new GoogleSearch();
web.search("TypeScript");
web.search("TypeScript", 5);
export {};
