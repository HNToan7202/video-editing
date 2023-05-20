const { Builder, By,Key } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
const TESTING = "http://ec2-3-93-146-91.compute-1.amazonaws.com";
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

it("should Search Video successfully 01", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("QuangHuy01");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("Huyvff@111");
  const loginButtonError = await driver.findElement(By.css("#login-button"));
  await loginButtonError.click();
  await driver.sleep(3000);

  // tạo biến chứa id của các element
  const SEARCH = "button[type=submit]";
  const BUTTON_OPEN = "button[title=Open]";
  const BUTTON = "button[type=button]";
  const INPUT_DATE = "input[type=tel]";
  const LEAGUE_NAME = "input[placeholder='Select league name']";
  const EVENT_NAME = "input[placeholder='Select Event Name']";
  const SPAN = "span[role=button]";
  const CHECKBOX = "input[type=checkbox]";
  // thực hiện các bước test
  await driver.get(TESTING + "/highlight");

  const button = await driver.findElement(By.css(BUTTON));
  await button.click();
  await driver.sleep(1000);
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[15].click();
  const inputDateElements = await driver.findElements(By.css(INPUT_DATE));
  await inputDateElements[0].sendKeys("01/05/2023");

  await buttonElements[1].click();
  await driver.sleep(1000);
  await buttonElements[32].click();
  await inputDateElements[1].sendKeys("12/05/2023");

  const leagueName = await driver.findElement(By.css(LEAGUE_NAME));
  await leagueName.sendKeys("V League");
  await driver.sleep(1000);
  await leagueName.sendKeys(Key.ARROW_DOWN);
  await leagueName.sendKeys(Key.ENTER);

  const eventName = await driver.findElement(By.css(EVENT_NAME));
  await eventName.sendKeys("highlight");
  await driver.sleep(1000);
  await eventName.sendKeys(Key.ARROW_DOWN);
  await eventName.sendKeys(Key.ENTER);

  const searchButton = await driver.findElement(By.css(SEARCH));
  await searchButton.click();
  await driver.sleep(3000);

  const spanElement = await driver.findElement(By.css(SPAN));
  await spanElement.click();

  const checkboxElements = await driver.findElements(By.css(CHECKBOX));
  await checkboxElements[11].click();
  await buttonElements[11].click();

  await spanElement.click();
  await checkboxElements[13].click();
  await buttonElements[13].click();
  await driver.sleep(2000);

});

it("should Search Video successfully 02", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  // tạo biến chứa id của các element
  const SEARCH = "button[type=submit]";
  const BUTTON_OPEN = "button[title=Open]";
  const BUTTON = "button[type=button]";
  const INPUT_DATE = "input[type=tel]";
  const LEAGUE_NAME = "input[placeholder='Select league name']";
  const EVENT_NAME = "input[placeholder='Select Event Name']";
  const SPAN = "span[role=button]";
  const CHECKBOX = "input[type=checkbox]";
  // thực hiện các bước test

  const button = await driver.findElement(By.css(BUTTON));
  await button.click();
  await driver.sleep(1000);
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[15].click();
  const inputDateElements = await driver.findElements(By.css(INPUT_DATE));
  await inputDateElements[0].sendKeys("01/05/2023");

  await buttonElements[1].click();
  await driver.sleep(1000);
  await buttonElements[32].click();
  await inputDateElements[1].sendKeys("12/05/2023");

  const leagueName = await driver.findElement(By.css(LEAGUE_NAME));
  await leagueName.sendKeys("V League");
  await driver.sleep(1000);
  await leagueName.sendKeys(Key.ARROW_DOWN);
  await leagueName.sendKeys(Key.ENTER);

  const eventName = await driver.findElement(By.css(EVENT_NAME));
  await eventName.sendKeys("highlight");
  await driver.sleep(1000);
  await eventName.sendKeys(Key.ARROW_DOWN);
  await eventName.sendKeys(Key.ENTER);

  const searchButton = await driver.findElement(By.css(SEARCH));
  await searchButton.click();
  await driver.sleep(3000);

  const spanElement = await driver.findElement(By.css(SPAN));
  await spanElement.click();
  await driver.sleep(1000);
  await driver.findElement(By.css(`${CHECKBOX}:nth-child(11)`)).click();
  await driver.findElement(By.css(`${BUTTON}:nth-child(11)`)).click();

  await driver.sleep(2000);
});
it("should Search Video successfully", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  // tạo biến chứa id của các element
  const SEARCH = "button[type=submit]";
  const BUTTON_OPEN = "button[title=Open]";
  const BUTTON = "button[type=button]";
  const INPUT_DATE = "input[type=tel]";
  const LEAGUE_NAME = "input[placeholder='Select league name']";
  const EVENT_NAME = "input[placeholder='Select Event Name']";
  const SPAN = "span[role=button]";
  const CHECKBOX = "input[type=checkbox]";
  // thực hiện các bước test

  const button = await driver.findElement(By.css(BUTTON));
  await button.click();
  await driver.sleep(1000);
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[15].click();
  const inputDateElements = await driver.findElements(By.css(INPUT_DATE));
  await inputDateElements[0].sendKeys("01/05/2023");

  await buttonElements[1].click();
  await driver.sleep(1000);
  await buttonElements[32].click();
  await inputDateElements[1].sendKeys("12/05/2023");

  const leagueName = await driver.findElement(By.css(LEAGUE_NAME));
  await leagueName.sendKeys("V League");
  await driver.sleep(1000);
  await leagueName.sendKeys(Key.ARROW_DOWN);
  await leagueName.sendKeys(Key.ENTER);

  const eventName = await driver.findElement(By.css(EVENT_NAME));
  await eventName.sendKeys("highlight");
  await driver.sleep(1000);
  await eventName.sendKeys(Key.ARROW_DOWN);
  await eventName.sendKeys(Key.ENTER);

  const searchButton = await driver.findElement(By.css(SEARCH));
  await searchButton.click();
  await driver.sleep(3000);

  const spanElements = await driver.findElements(By.css(SPAN));
  await spanElements[1].click();
  await driver.sleep(1000);
  await driver.findElement(By.css(`${CHECKBOX}:nth-child(13)`)).click();
  await driver.findElement(By.css(`${BUTTON}:nth-child(11)`)).click();
  await driver.sleep(2000);

});

// describe("Search Video", () => {
//   // case success
//   it("should Search Video successfully 01", async () => {
//     await browser.url(TESTING);
//     const username = await browser.$("#login-username");
//     await username.setValue("QuangHuy01");
//     const password = await browser.$("#login-password");
//     await password.setValue("Huyvff@111");
//     const loginButtonError = await browser.$("#login-button");
//     await loginButtonError.click();
//     await browser.pause(3000);

//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     const SPAN = "span[role=button]";
//     const CHECKBOX = "input[type=checkbox]";
//     // thực hiện các bước test
//     await browser.url(TESTING + "/highlight");

//     await browser.$(BUTTON).click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[15].click();
//     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     await browser.$$(BUTTON)[1].click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[32].click();
//     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
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

//     await browser.$(SPAN).click();

//     await browser.$$(CHECKBOX)[11].click();
//     await browser.$$(BUTTON)[11].click();

//     await browser.$$(SPAN)[1].click();
//     await browser.$$(CHECKBOX)[13].click();
//     await browser.$$(BUTTON)[13].click();
//     await browser.pause(2000);
//     await browser.saveScreenshot("./src/testing/SearchVideo/caseSuccess.png");
//     expect(browser).toHaveTitle("AddVideo");
//   });
//   it("should Search Video successfully", async () => {
//     await browser.refresh();
//     await browser.pause(2000);
//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     const SPAN = "span[role=button]";
//     const CHECKBOX = "input[type=checkbox]";
//     // thực hiện các bước test

//     await browser.$(BUTTON).click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[15].click();
// await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     await browser.$$(BUTTON)[1].click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[32].click();
//     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
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

//     await browser.$(SPAN).click();
//     await browser.pause(1000);
//     await browser.$$(CHECKBOX)[11].click();
//     await browser.$$(BUTTON)[11].click();

//     // await browser.$$(SPAN)[1].click();
//     // await browser.$$(CHECKBOX)[13].click();
//     // await browser.$$(BUTTON)[13].click();
//     await browser.pause(2000);

//     await browser.saveScreenshot("./src/testing/SearchVideo/caseSuccess01.png");
//     expect(browser).toHaveTitle("AddVideo");
//   });

//   it("should Search Video successfully", async () => {
//     await browser.refresh();
//     await browser.pause(2000);
//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     const SPAN = "span[role=button]";
//     const CHECKBOX = "input[type=checkbox]";
//     // thực hiện các bước test

//     await browser.$(BUTTON).click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[15].click();
//     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     await browser.$$(BUTTON)[1].click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[32].click();
//     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
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

//     // await browser.$(SPAN).click();
//     // await browser.pause(10000);
//     // await browser.$$(CHECKBOX)[11].click();
//     // await browser.$$(BUTTON)[11].click();

//     await browser.$$(SPAN)[1].click();
//     await browser.$$(CHECKBOX)[13].click();
//     await browser.$$(BUTTON)[11].click();
// await browser.pause(2000);

//     await browser.saveScreenshot("./src/testing/SearchVideo/caseSuccess02.png");
//     expect(browser).toHaveTitle("AddVideo");
//   });
// });