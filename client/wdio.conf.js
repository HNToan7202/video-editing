export const config = {
  runner: "local",
  specs: ["./src/test/**/TestLogin.js"],
  exclude: [],
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        binary: '/path/to/chrome', // Path to the Chrome binary
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "junit",
      {
        outputDir: "junit-reports",
        outputFileFormat: function (options) {
          return `results-${options.cid}.xml`;
        },
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
