const { Builder, By,Key } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
const TESTING = "http://ec2-3-86-80-106.compute-1.amazonaws.com";
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
  it("DeleteMatch1", async () => {
    //xóa trận đấu
    await driver.sleep(2000);
    const tdElements = await driver.findElements(By.css("td"));
    await (await tdElements[7].findElement(By.css("button"))).click();
    await driver.sleep(1000);
    const BUTTON = "button[type=button]";
    //Testcase1: Nhấn nút Hủy
    const buttonElements = await driver.findElements(By.css(BUTTON));
    await buttonElements[8].click();
    await driver.sleep(1000);
  });
  
  it("DeleteMatch2", async () => {
    //xóa trận đấu
    const tdElements = await driver.findElements(By.css("td"));
    await (await tdElements[7].findElement(By.css("button"))).click();
    await driver.sleep(1000);
    const BUTTON = "button[type=button]";
    //Testcase1: Nhấn nút Ok
    const buttonElements = await driver.findElements(By.css(BUTTON));
    await buttonElements[9].click();
    await driver.sleep(1000);
  });
  
// describe("Delete Match", () => {
 
//   it("DeleteMatch1", async () => {
//     //xóa trận đấu
//     await browser.pause(2000);
//     await browser.$$("td")[7].$("button").click();
//     await browser.pause(1000);
//     const BUTTON = "button[type=button]";
//     //Testcase1: Nhấn nút Hủy
//     await browser.$$(BUTTON)[8].click();
//     await browser.pause(1000);
//     await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch1.png");
//     expect(browser).toHaveTitle("DeleteMatch1");
//   });
//   it("DeleteMatch2", async () => {
//     //xóa trận đấu
//     await browser.$$("td")[7].$("button").click();
//     await browser.pause(1000);
//     const BUTTON = "button[type=button]";
//     //Testcase1: Nhấn nút Ok
//     await browser.$$(BUTTON)[9].click();
//     await browser.pause(1000);
//     await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch2.png");
//     expect(browser).toHaveTitle("DeleteMatch2");
//   });
// });

// after(() => {
//   // allure.generateReport();
// });
