import allure from "allure-commandline";
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
  baseUrl: "http://localhost:3000/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,
  services: [
    "chromedriver",
    process.env.EXAMPLE_RECIPE
      ? [
          "static-server",
          {
            port: 3000,
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
  reporterOptions: {
    allure: {
      outputDir: "./allure-results",
    },
  },
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
};
