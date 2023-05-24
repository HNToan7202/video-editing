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

  const openButton = await driver.findElements(By.css(BUTTON));
  await openButton[0].click();
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
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[11].click();
  const spanElement1 = await driver.findElements(By.css(SPAN));
  await spanElement1[1].click();
  const checkboxElements1 = await driver.findElements(By.css(CHECKBOX));
  await checkboxElements1[13].click();
  const buttonElements1 = await driver.findElements(By.css(BUTTON));
  await buttonElements1[13].click();
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
  await driver.get(TESTING + "/highlight");

  const openButton = await driver.findElements(By.css(BUTTON));
  await openButton[0].click();
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
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[11].click();

  // const spanElement1 = await driver.findElements(By.css(SPAN));
  // await spanElement1[1].click();
  // const checkboxElements1 = await driver.findElements(By.css(CHECKBOX));
  // await checkboxElements1[13].click();
  // const buttonElements1 = await driver.findElements(By.css(BUTTON));
  // await buttonElements1[13].click();
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
  await driver.get(TESTING + "/highlight");

  const openButton = await driver.findElements(By.css(BUTTON));
  await openButton[0].click();
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
  const buttonElements = await driver.findElements(By.css(BUTTON));
  await buttonElements[11].click();

  const spanElement1 = await driver.findElements(By.css(SPAN));
  await spanElement1[1].click();
  const checkboxElements1 = await driver.findElements(By.css(CHECKBOX));
  await checkboxElements1[13].click();
  const buttonElements1 = await driver.findElements(By.css(BUTTON));
  await buttonElements1[13].click();
  await driver.sleep(2000);

});
