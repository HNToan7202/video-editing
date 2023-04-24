const allure = require("allure-commandline");
export const config = {
  runner: [
    "browser",
    {
      // runner options
      preset: "svelte", // setup WebdriverIOs Vite server for a Svelte project
      // define code coverage options, see more https://webdriver.io/docs/runner#coverage-options
      coverage: {
        enabled: true,
        statements: 100,
        branches: 50,
        functions: 100,
        lines: 100,
      },
    },
    "local",
  ],
  specs: ["./**/*.js"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: process.env.CI ? ["headless", "disable-gpu"] : [],
      },
    },
  ],

  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost:8888/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,
  services: [
    "chromedriver",
    process.env.EXAMPLE_RECIPE
      ? [
          "static-server",
          {
            port: 8888,
            folders: [
              {
                mount: "/",
                path: `./${process.env.EXAMPLE_RECIPE}`,
              },
            ],
          },
        ]
      : undefined,
  ].filter(Boolean),
  framework: "mocha",
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterStep: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
