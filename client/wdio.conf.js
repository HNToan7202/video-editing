// import allure from "allure-commandline";
export const config = {
  runner: "local",

  specs: ["./src/test/**/TestLogin.js"],

  exclude: [],

  maxInstances: 5,

  capabilities: [
  
    {
      maxInstances: 5,
      browserName: "firefox",
      acceptInsecureCerts: true,
      'moz:firefoxOptions': {
        binary: '/usr/bin/firefox', // Đường dẫn đến tệp nhị phân của Firefox
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  baseUrl: "http://localhost",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [ "geckodriver"],

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
