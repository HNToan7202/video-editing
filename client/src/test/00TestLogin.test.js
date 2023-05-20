const { Builder, By } = require('selenium-webdriver');
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


it("Login with wrong username", async () => {
  await driver.get(TESTING);
  const usernameError = await driver.findElement(By.css("#login-username"));
  await usernameError.sendKeys("congthanh28");
  const passwordError = await driver.findElement(By.css("#login-password"));
  await passwordError.sendKeys("28072002Thanh@");
  const showPassword = await driver.findElement(By.css("svg"));
  await showPassword.click();
  const loginButtonError = await driver.findElement(By.css("#login-button"));
  await loginButtonError.click();

});

// Đoạn mã kiểm thử đăng nhập sai mật khẩu
it("Login with wrong password", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("congthanh");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("28072002Thanh@1");
  const showPassword = await driver.findElement(By.css("svg"));
  await showPassword.click();
  const loginButton = await driver.findElement(By.css("#login-button"));
  await loginButton.click();

});

// Đoạn mã kiểm thử đăng nhập vào tài khoản sai
it("Login to the wrong account", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("congthanh27");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("28072002Thanh@123");
  const showPassword = await driver.findElement(By.css("svg"));
  await showPassword.click();
  const loginButton = await driver.findElement(By.css("#login-button"));
  await loginButton.click();
});

it("Logged in No Data", async () => {
  await driver.get(TESTING);
  const loginButton = await driver.findElement(By.css("#login-button"));
  await loginButton.click();
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




