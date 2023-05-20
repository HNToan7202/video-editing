const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

test('Login Success', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://18.206.170.222/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();
});

test('Login Failed Email', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://18.206.170.222/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('khang@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();
});

test('Login Failed Password', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://18.206.170.222/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('khang@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();
});

test('Login Failed Account Does Not Exits', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://18.206.170.222/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('khang@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();
});

test('Login Failed Email Invalid', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://18.206.170.222/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('khanggmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();
});