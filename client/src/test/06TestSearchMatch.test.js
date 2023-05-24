const { Builder, By,Key } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
const TESTING = "http://ec2-54-227-147-35.compute-1.amazonaws.com";
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});
it("should Search Video full option successfully", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("QuangHuy01");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("Huyvff@111");
  const loginButtonError = await driver.findElement(By.css("#login-button"));
  await loginButtonError.click();
  await driver.sleep(4000);

  // tạo biến chứa id của các element
  const SEARCH = "button[type=submit]";
  const BUTTON_OPEN = "button[title=Open]";
  const BUTTON = "button[type=button]";
  const INPUT_DATE = "input[type=tel]";
  const LEAGUE_NAME = "input[placeholder='Select league name']";
  const EVENT_NAME = "input[placeholder='Select Event Name']";

  // thực hiện các bước test
  await driver.get(TESTING + "/highlight");

  const openButton = await driver.findElement(By.css(BUTTON));
  await openButton.click();
  await driver.sleep(1000);
  const optionButton = await driver.findElements(By.css(BUTTON));
  await optionButton[12].click();
  const inputDate = await driver.findElements(By.css(INPUT_DATE));
  await inputDate[0].sendKeys("01/05/2023");

  await driver.sleep(2000);
  const closeButton = await driver.findElements(By.css(BUTTON));
  await closeButton[1].click();
  await driver.sleep(1000);
  const optionButton2 = await driver.findElements(By.css(BUTTON));
  await optionButton2[40].click();
  const inputDate2 = await driver.findElements(By.css(INPUT_DATE));
  await inputDate2[1].sendKeys("30/05/2023");

  const leagueName = await driver.findElement(By.css(LEAGUE_NAME));
  await leagueName.sendKeys("V League");
  await driver.sleep(1000);
  await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
  await driver.actions().sendKeys(Key.ENTER).perform();

  const eventName = await driver.findElement(By.css(EVENT_NAME));
  await eventName.sendKeys("highlight");
  await driver.sleep(1000);
  await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
  await driver.actions().sendKeys(Key.ENTER).perform();

  const searchButton = await driver.findElement(By.css(SEARCH));
  await searchButton.click();
  await driver.sleep(3000);
});
it("should Search Video nodata", async () => {
  await driver.navigate().refresh();
  await driver.sleep(4000);

  // tạo biến chứa id của các element
  const SEARCH = "button[type=submit]";
  const BUTTON_OPEN = "button[title=Open]";
  const BUTTON = "button[type=button]";
  const INPUT_DATE = "input[type=tel]";
  const LEAGUE_NAME = "input[placeholder='Select league name']";
  const EVENT_NAME = "input[placeholder='Select Event Name']";

  // thực hiện các bước test
  const leagueName = await driver.findElement(By.css(LEAGUE_NAME));
  await leagueName.sendKeys("V League");
  await driver.sleep(1000);
  await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
  await driver.actions().sendKeys(Key.ENTER).perform();

  const eventName = await driver.findElement(By.css(EVENT_NAME));
  await eventName.sendKeys("highlight");
  await driver.sleep(1000);
  await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
  await driver.actions().sendKeys(Key.ENTER).perform();

  const searchButton = await driver.findElement(By.css(SEARCH));
  await searchButton.click();
  await driver.sleep(3000);
});

// describe("Search Match", () => {
//   // case success
//   it("should Search Video full option successfully", async () => {
//     await browser.url(TESTING);
//     const username = await browser.$("#login-username");
//     await username.setValue("QuangHuy01");
//     const password = await browser.$("#login-password");
//     await password.setValue("Huyvff@111");
//     const loginButtonError = await browser.$("#login-button");
//     await loginButtonError.click();
//     await browser.pause(4000);

//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     // thực hiện các bước test
//     await browser.url(TESTING + "/highlight");

//     await browser.$(BUTTON).click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[11].click();
//     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     await browser.$$(BUTTON)[1].click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[40].click();
//     await browser.$$(INPUT_DATE)[1].setValue("30/05/2023");
//     // await browser.$$(BUTTON_OPEN)[0].click();
//     // await browser.pause(1000);
//     await browser.$(LEAGUE_NAME).setValue("V League");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     // await browser.$$(BUTTON)[4].click();
//     // await browser.pause(1000);
//     await browser.$(EVENT_NAME).setValue("highlight");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     await browser.$(SEARCH).click();
//     await browser.pause(3000);
//     await browser.saveScreenshot("./src/testing/SearchMatch/caseSuccess.png");
//     expect(browser).toHaveTitle("SearchMatch");
//   });

//   // case success 2
//   it("should Search Video nodata", async () => {
//     await browser.refresh();
//     await browser.pause(4000);
//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     // thực hiện các bước test

//     // await browser.$(BUTTON).click();
//     // await browser.pause(1000);
//     // await browser.$$(BUTTON)[11].click();
//     // await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     // await browser.$$(BUTTON)[1].click();
//     // await browser.pause(1000);
//     // await browser.$$(BUTTON)[22].click();
//     // await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
//     // await browser.$$(BUTTON_OPEN)[0].click();
//     // await browser.pause(1000);
//     await browser.$(LEAGUE_NAME).setValue("V League");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     // await browser.$$(BUTTON)[4].click();
//     // await browser.pause(1000);
//     await browser.$(EVENT_NAME).setValue("highlight");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     await browser.$(SEARCH).click();
//     await browser.pause(3000);
//     await browser.saveScreenshot("./src/testing/SearchMatch/FailMissData.png");
//     expect(browser).toHaveTitle("SearchMatch");
//   });
// });

// after(() => {
//   // allure.generateReport();
// });
