import TESTING from "./varlocal.js";
describe("Search Match", () => {
  // case success
  it("should Search Video full option successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    const loginButtonError = await browser.$("#login-button");
    await loginButtonError.click();
    await browser.pause(4000);

    // tạo biến chứa id của các element
    const SEARCH = "button[type=submit]";
    const BUTTON_OPEN = "button[title=Open]";
    const BUTTON = "button[type=button]";
    const INPUT_DATE = "input[type=tel]";
    const LEAGUE_NAME = "input[placeholder='Select league name']";
    const EVENT_NAME = "input[placeholder='Select Event Name']";
    // thực hiện các bước test
    await browser.url(TESTING + "/highlight");

    await browser.$(BUTTON).click();
    await browser.pause(1000);
    await browser.$$(BUTTON)[11].click();
    await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

    await browser.$$(BUTTON)[1].click();
    await browser.pause(1000);
    await browser.$$(BUTTON)[40].click();
    await browser.$$(INPUT_DATE)[1].setValue("30/05/2023");
    // await browser.$$(BUTTON_OPEN)[0].click();
    // await browser.pause(1000);
    await browser.$(LEAGUE_NAME).setValue("V League");
    await browser.pause(1000);
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    // await browser.$$(BUTTON)[4].click();
    // await browser.pause(1000);
    await browser.$(EVENT_NAME).setValue("highlight");
    await browser.pause(1000);
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    await browser.$(SEARCH).click();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/SearchMatch/caseSuccess.png");
    expect(browser).toHaveTitle("SearchMatch");
  });

  // case success 2
  it("should Search Video nodata", async () => {
    await browser.refresh();
    await browser.pause(4000);
    // tạo biến chứa id của các element
    const SEARCH = "button[type=submit]";
    const BUTTON_OPEN = "button[title=Open]";
    const BUTTON = "button[type=button]";
    const INPUT_DATE = "input[type=tel]";
    const LEAGUE_NAME = "input[placeholder='Select league name']";
    const EVENT_NAME = "input[placeholder='Select Event Name']";
    // thực hiện các bước test

    // await browser.$(BUTTON).click();
    // await browser.pause(1000);
    // await browser.$$(BUTTON)[11].click();
    // await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

    // await browser.$$(BUTTON)[1].click();
    // await browser.pause(1000);
    // await browser.$$(BUTTON)[22].click();
    // await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
    // await browser.$$(BUTTON_OPEN)[0].click();
    // await browser.pause(1000);
    await browser.$(LEAGUE_NAME).setValue("V League");
    await browser.pause(1000);
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    // await browser.$$(BUTTON)[4].click();
    // await browser.pause(1000);
    await browser.$(EVENT_NAME).setValue("highlight");
    await browser.pause(1000);
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    await browser.$(SEARCH).click();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/SearchMatch/FailMissData.png");
    expect(browser).toHaveTitle("SearchMatch");
  });
});

after(() => {
  // allure.generateReport();
});
