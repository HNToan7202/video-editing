const { Builder, By,Key } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
const TESTING = "http://ec2-3-82-125-96.compute-1.amazonaws.com";
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

it("should Add AddVideo successfully", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("QuangHuy01");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("Huyvff@111");
  const loginButtonError = await driver.findElement(By.css("#login-button"));
  await loginButtonError.click();
  await driver.sleep(3000);

  // tạo biến chứa id của các element
  const ITEM_VIDEO = "input[type=checkbox]";
  const BUTTON = "button[type=button]";
  const TITLE = 'textarea[aria-invalid="false"]';
  const MERGE = "button[type=submit]";
  // thực hiện các bước test
  await driver.get(TESTING + "/highlight");

  await driver.sleep(2000);
  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[6].click();
  const buttons1 = await driver.findElements(By.css(BUTTON));
  await buttons1[10].click();
  await driver.sleep(2000);
  const itemVideos = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos[2].click();
  const itemVideos1 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos1[4].click();
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[22].click();
  await driver.sleep(2000);
  const itemVideos2 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos2[1].click();
  const title = await driver.findElement(By.css(TITLE));
  await title.sendKeys("HAGL vs SHB");
  const mergeButtons = await driver.findElements(By.css(MERGE));
  await mergeButtons[1].click();
  await driver.sleep(3000);
});
it("should Add AddVideo successfully SameName", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  const ITEM_VIDEO = "input[type=checkbox]";
  const BUTTON = "button[type=button]";
  const TITLE = 'textarea[aria-invalid="false"]';
  const MERGE = "button[type=submit]";
  // thực hiện các bước test

  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[6].click();
  const buttons1 = await driver.findElements(By.css(BUTTON));
  await buttons1[16].click();
  await driver.sleep(2000);
  const itemVideos = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos[2].click();
  const itemVideos1 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos1[4].click();
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[28].click();
  await driver.sleep(2000);
  const itemVideos2 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos2[1].click();
  const title = await driver.findElement(By.css(TITLE));
  await title.sendKeys("HAGL vs SHB");
  const mergeButtons = await driver.findElements(By.css(MERGE));
  await mergeButtons[1].click();
  await driver.sleep(3000);
});
it("should Add AddVideo Fail Add Title", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  const ITEM_VIDEO = "input[type=checkbox]";
  const BUTTON = "button[type=button]";
  const TITLE = 'textarea[aria-invalid="false"]';
  const MERGE = "button[type=submit]";
  // thực hiện các bước test

  await driver.sleep(2000);
  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[6].click();
  const buttons1 = await driver.findElements(By.css(BUTTON));
  await buttons1[20].click();
  await driver.sleep(2000);
  const itemVideos = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos[2].click();
  const itemVideos1 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos1[4].click();
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[32].click();
  await driver.sleep(2000);
  await itemVideos[1].click();
  // await driver.findElement(By.css(TITLE)).sendKeys("HAGL vs SHB");
  const mergeButtons = await driver.findElements(By.css(MERGE));
  await mergeButtons[1].click();
  await driver.sleep(3000);
});
it("should Add AddVideo Success not add logo", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  const ITEM_VIDEO = "input[type=checkbox]";
  const BUTTON = "button[type=button]";
  const TITLE = 'textarea[aria-invalid="false"]';
  const MERGE = "button[type=submit]";
  // thực hiện các bước test
  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[6].click();
  const buttons1 = await driver.findElements(By.css(BUTTON));
  await buttons1[20].click();
  await driver.sleep(2000);
  const itemVideos = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos[2].click();
  const itemVideos1 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos1[4].click();
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[32].click();
  await driver.sleep(2000);
  // await itemVideos[1].click();
  await driver.findElement(By.css(TITLE)).sendKeys("HAGL vs SHB");
  const mergeButtons = await driver.findElements(By.css(MERGE));
  await mergeButtons[1].click();
  await driver.sleep(3000);
});
it("should Add AddVideo Success one video", async () => {
  await driver.navigate().refresh();
  await driver.sleep(2000);
  const ITEM_VIDEO = "input[type=checkbox]";
  const BUTTON = "button[type=button]";
  const TITLE = 'textarea[aria-invalid="false"]';
  const MERGE = "button[type=submit]";
  // thực hiện các bước test
  const buttons = await driver.findElements(By.css(BUTTON));
  await buttons[6].click();
  const buttons1 = await driver.findElements(By.css(BUTTON));
  await buttons1[24].click();
  await driver.sleep(2000);
  const itemVideos = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos[2].click();
  const buttons2 = await driver.findElements(By.css(BUTTON));
  await buttons2[31].click();
  await driver.sleep(2000);
  const itemVideos1 = await driver.findElements(By.css(ITEM_VIDEO));
  await itemVideos1[1].click();
  await driver.findElement(By.css(TITLE)).sendKeys("HAGL vs SHB");
  const mergeButtons = await driver.findElements(By.css(MERGE));
  await mergeButtons[1].click();
  await driver.sleep(3000);
});