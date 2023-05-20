const { Builder, By } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    const options = new firefox.Options().setBinary('/path/to/firefox-bin');
    // Thay thế '/path/to/firefox-bin' bằng đường dẫn thực tế tới tệp nhị phân của Firefox
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
});

afterAll(async () => {
    await driver.quit();
});

test("Logged in successfully", async () => {
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
