// 1- Interfaces

interface SmartphoneApp {
  appName: string;
  openApp(): void;
  closeApp(): void;
}

class WhatsApp implements SmartphoneApp {
  appName: string;
  constructor(appName: string) {
    this.appName = appName;
  }

  openApp(): void {
    console.log(`${this.appName} is open!`);
  }

  closeApp(): void {
    console.log(`${this.appName} is closed!`);
  }
}

class YouTube implements SmartphoneApp {
  public appName: string = "YouTube";

  openApp(): void {
    console.log(`${this.appName} is open!`);
  }

  closeApp(): void {
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

// So one more example let's see that

interface SearchSystem {
  search(query: string): void;
}

class GoogleSearch implements SearchSystem {
  search(query: string, pageNumber?: number): void {
    if (pageNumber) {
      console.log(`${query} on page ${pageNumber}`);
    } else {
      console.log(`${query} on page 1 (Default)`);
    }
  }
}

const web = new GoogleSearch();
web.search("TypeScript");
web.search("TypeScript", 5);

export {}