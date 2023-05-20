const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
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
  const loginButton = await driver.findElement(By.css("#login-button"));
  await loginButton.click();
    await driver.sleep(3000);

  });

  
  it("UpLoadJson1", async () => {
    const BUTTON = "button[type=button]";
    const buttons = await driver.findElements(By.css(BUTTON));
    await buttons[4].click();
    await driver.sleep(1000);
    const buttons1 = await driver.findElements(By.css(BUTTON));
    await buttons1[8].click();
    await driver.sleep(1000);
  });
  
  it("UpLoadJson2", async () => {
    // await driver.navigate().refresh();
  
    // await driver.findElement(By.css('span[title="types:JSON"]')).sendKeys("Uploaded Successfully!.");
    await driver.sleep(5000);
    const inputElement2 = await driver.findElement(By.css("input[type=file]"));
    await inputElement2.sendKeys(path.resolve("./src/test/VietNam_Malay.json"));
    // const inputFile = await driver.findElement(By.css("input[type=file]"));
    // await inputFile.sendKeys("./VietNam_Malay.json");
    await driver.sleep(1000);
  
    const BUTTON = "button[type=button]";
    const buttons = await driver.findElements(By.css(BUTTON));
    await buttons[8].click();

    await driver.sleep(5000);
  });
  