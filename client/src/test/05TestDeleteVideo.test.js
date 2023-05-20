const { Builder, By } = require('selenium-webdriver');
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
  it("DeleteVideo1", async () => {
    await driver.get(TESTING + "/gallery");
    await driver.sleep(1000);
    // Testcase: Xóa ảnh
    const deleteButton = await driver.findElement(
      By.css(
        ".ant-btn.ant-btn-circle.ant-btn-default.ant-btn-icon-only.ant-btn-dangerous"
      )
    );
    await deleteButton.click();
    await driver.sleep(1000);
    // Testcase1: Nhấn nút Hủy
    const cancelButton = await driver.findElement(
      By.css(".ant-btn.ant-btn-default.ant-btn-sm")
    );
    await cancelButton.click();
    await driver.sleep(1000);
  });
  
  it("DeleteVideo2", async () => {
    const deleteButton = await driver.findElement(
      By.css(
        ".ant-btn.ant-btn-circle.ant-btn-default.ant-btn-icon-only.ant-btn-dangerous"
      )
    );
    await deleteButton.click();
    await driver.sleep(1000);
    // Testcase2: Nhấn nút Xóa
    const confirmButton = await driver.findElement(
      By.css(".ant-btn.ant-btn-primary.ant-btn-sm")
    );
    await confirmButton.click();
    await driver.sleep(1000);
  });