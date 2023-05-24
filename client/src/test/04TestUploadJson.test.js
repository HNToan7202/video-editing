const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const path = require("path");
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

     // tạo biến chứa id của các element
  const BTN_ADD_LEAGUENAME = await driver.findElement(By.css("button[type=button]"));
  const LEAGUE_NAME = await driver.findElement(By.css("input[placeholder='Enter league name']"));
  const MATCH_NAME = await driver.findElement(By.css("input[placeholder='Enter match name']"));
  const CHANNEL_NAME = await driver.findElement(By.css("input[placeholder='Enter Channel Name']"));
  const IP = await driver.findElement(By.css("input[placeholder='Enter IP']"));
  const PORT = await driver.findElement(By.css("input[placeholder='Enter Port']"));
  const SAVE_BTN = await driver.findElement(By.css("button[type=submit]"));
  
  // thực hiện các bước test
  await BTN_ADD_LEAGUENAME.click();
  await LEAGUE_NAME.sendKeys("V League");
  await MATCH_NAME.sendKeys("HAGL vs SHB");
  //await driver.findElement(By.css(TIME)).sendKeys("");
  await CHANNEL_NAME.sendKeys("VTV");
  await IP.sendKeys("127.0.0.1");
  await PORT.sendKeys("3000");
  await SAVE_BTN.click();
  await driver.sleep(3000);
  await driver.navigate().refresh();
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
  