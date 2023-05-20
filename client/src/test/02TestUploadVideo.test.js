const { Builder, By } = require('selenium-webdriver');
const path = require("path");
const { beforeAll, afterAll, test } = require('@jest/globals');
const TESTING = "http://ec2-52-200-144-98.compute-1.amazonaws.com";
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});
it("Logged in successfully", async () => {
  await driver.get(TESTING);
const username = await driver.findElement(By.css("#login-username"));
await username.sendKeys("congthanh");
const password = await driver.findElement(By.css("#login-password"));
await password.sendKeys("28072002Thanh@");
const showPassword = await driver.findElement(By.css("svg"));
await showPassword.click();
await driver.sleep(3000);
const loginButton = await driver.findElement(By.css("#login-button"));
await loginButton.click();
await driver.sleep(3000);
});

it("UpLoadVideo Fail", async () => {
  await driver.get(TESTING + "/gallery");
  await driver.sleep(2000);

  const BUTTON = "button[type=button]";
  const TYPE = "div[role=button]";
  const INPUT_TEXT = "input[type=text]";
  const LI = "li[role=option]";

  const TYPE_INPUT = 'span[title="types: MP4"]';

  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[1].click();
  const types = await driver.findElements(By.css(TYPE));
  await types[7].click();
  const lis = await driver.findElements(By.css(LI));
  await lis[1].click();
  const inputElement1 = await driver.findElement(By.css(INPUT_TEXT));
  await inputElement1.sendKeys("NoiNayCoAnh.mp4");

  // await driver.executeScript(
  //   "arguments[0].style.display = 'block';",
  //   inputElement
  // );
  // await inputElement.sendKeys(
  //   path.resolve("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4")
  // );
  await driver.sleep(2000);
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[3].click();
  await driver.sleep(4000);

});
it("UpLoadVideo", async () => {
  await driver.get(TESTING + "/gallery");
  await driver.sleep(2000);

  const BUTTON = "button[type=button]";
  const TYPE = "div[role=button]";
  const INPUT_TEXT = "input[type=text]";
  const LI = "li[role=option]";
  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[1].click();
  const types = await driver.findElements(By.css(TYPE));
  await types[7].click();
  const lis = await driver.findElements(By.css(LI));
  await lis[1].click();
  const inputElement1 = await driver.findElement(By.css(INPUT_TEXT));
  await inputElement1.sendKeys("NoiNayCoAnh.mp4");
  const inputElement2 = await driver.findElement(By.css("input[type=file]"));
  await inputElement2.sendKeys(path.resolve("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4"));
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[3].click();
  await driver.sleep(20000);
});

