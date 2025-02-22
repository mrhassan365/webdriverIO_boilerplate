const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.amazon.com/',  
  specs: ["./examples/Amazon/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Amazon/E2E/cartExample.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 6,
  services: ["browserstack"],
  browserstackLocal: true,  
  capabilities: [
    {
      "project": `Amazon Example`,
      "browserstack.debug": true,
      "browser": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      },
      "resolution": '1280x1024',
      "os": "Windows",
      "os_version": "10",
      "browserstack.local": true,
      "browserstack.console": "errors",
      "browserstack.networkLogs": true
    }
  ],
  //browserstack credentials
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
});
