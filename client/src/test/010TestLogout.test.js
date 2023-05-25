const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
jest.setTimeout(100000); // timeout toàn cục
let driver;
const TESTING = "http://ec2-3-82-125-96.compute-1.amazonaws.com";
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
  });
