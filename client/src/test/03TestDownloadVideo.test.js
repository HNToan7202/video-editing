const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const TESTING = "http://ec2-54-227-147-35.compute-1.amazonaws.com";
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
  const loginButton = await driver.findElement(By.css("#login-button"));
  await loginButton.click();
    await driver.sleep(3000);

  });
  // it("UpLoadVideo", async () => {
  //   await driver.get(TESTING + "/gallery");
  //   await driver.sleep(2000);
  
  //   const BUTTON = "button[type=button]";
  //   const TYPE = "div[role=button]";
  //   const INPUT_TEXT = "input[type=text]";
  //   const LI = "li[role=option]";
  //   const buttons = await driver.findElements(By.css(BUTTON));
  //   await buttons[1].click();
  //   const types = await driver.findElements(By.css(TYPE));
  //   await types[7].click();
  //   const lis = await driver.findElements(By.css(LI));
  //   await lis[1].click();
  //   const inputElement1 = await driver.findElement(By.css(INPUT_TEXT));
  //   await inputElement1.sendKeys("NoiNayCoAnh1.mp4");
  //   const inputElement2 = await driver.findElement(By.css("input[type=file]"));
  //   await inputElement2.sendKeys(path.resolve("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4"));
  //   const buttons2 = await driver.findElements(By.css(BUTTON));
  //   await buttons2[3].click();
  //   await driver.sleep(20000);
  // });
  
  it("DownloadVideo", async () => {
  await driver.get(TESTING + "/gallery");
  await driver.sleep(2000);
  const videoSrc = await driver
  .findElement(By.css("video"))
  .getAttribute("src");
  await driver.get(videoSrc);
await driver.sleep(2000);
  });

