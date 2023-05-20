const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(() => {
    return new Promise((resolve, reject) => {
        driver.quit()
            .then(() => resolve())
            .catch((error) => reject(error));
    });
});


it("Logged in successfully", async () => {
    await driver.get("http://ec2-3-93-146-91.compute-1.amazonaws.com");
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
