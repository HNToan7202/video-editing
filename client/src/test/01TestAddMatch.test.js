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
it("should Add Match successfully", async () => {
  await driver.get(TESTING);
  const username = await driver.findElement(By.css("#login-username"));
  await username.sendKeys("QuangHuy01");
  const password = await driver.findElement(By.css("#login-password"));
  await password.sendKeys("Huyvff@111");
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
  it("should Add Match Miss Leaguename", async () => {
    const BTN_ADD_LEAGUENAME = await driver.findElement(By.css("button[type=button]"));
    const LEAGUE_NAME = await driver.findElement(By.css("input[placeholder='Enter league name']"));
    const MATCH_NAME = await driver.findElement(By.css("input[placeholder='Enter match name']"));
    const CHANNEL_NAME = await driver.findElement(By.css("input[placeholder='Enter Channel Name']"));
    const IP = await driver.findElement(By.css("input[placeholder='Enter IP']"));
    const PORT = await driver.findElement(By.css("input[placeholder='Enter Port']"));
    const SAVE_BTN = await driver.findElement(By.css("button[type=submit]"));
  
    await MATCH_NAME.sendKeys("HAGL vs SHB");
    await CHANNEL_NAME.sendKeys("VTV");
    await IP.sendKeys("127.0.0.1");
    await PORT.sendKeys("3000");
    await SAVE_BTN.click();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.sleep(3000);

  });
  it("should Add Match Miss MatchName", async () => {
    const BTN_ADD_LEAGUENAME = await driver.findElement(By.css("button[type=button]"));
    const LEAGUE_NAME = await driver.findElement(By.css("input[placeholder='Enter league name']"));
    const MATCH_NAME = await driver.findElement(By.css("input[placeholder='Enter match name']"));
    const CHANNEL_NAME = await driver.findElement(By.css("input[placeholder='Enter Channel Name']"));
    const IP = await driver.findElement(By.css("input[placeholder='Enter IP']"));
    const PORT = await driver.findElement(By.css("input[placeholder='Enter Port']"));
    const SAVE_BTN = await driver.findElement(By.css("button[type=submit]"));
  
    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.sendKeys("V League");
    //await MATCH_NAME.sendKeys("HAGL vs SHB");
    await CHANNEL_NAME.sendKeys("VTV");
    await IP.sendKeys("127.0.0.1");
    await PORT.sendKeys("3000");
    await SAVE_BTN.click();
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.sleep(3000);


  });
  it("should Add Match 2 successfully", async () => {
   // tạo biến chứa id của các element
   const BTN_ADD_LEAGUENAME = await driver.findElement(By.css("button[type=button]"));
   const LEAGUE_NAME = await driver.findElement(By.css("input[placeholder='Enter league name']"));
   const MATCH_NAME = await driver.findElement(By.css("input[placeholder='Enter match name']"));
   const CHANNEL_NAME = await driver.findElement(By.css("input[placeholder='Enter Channel Name']"));
   const IP = await driver.findElement(By.css("input[placeholder='Enter IP']"));
   const PORT = await driver.findElement(By.css("input[placeholder='Enter Port']"));
   const SAVE_BTN = await driver.findElement(By.css("button[type=submit]"));
   
    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.sendKeys("V League");
    await MATCH_NAME.sendKeys("HAGL vs SHB");
    await CHANNEL_NAME.sendKeys("VTV3");
    await IP.sendKeys("127.0.0.1");
    await PORT.sendKeys("3000");
    await SAVE_BTN.click();
  
    await driver.sleep(3000);
    await driver.navigate().refresh();
    await driver.sleep(3000);

  });
  it("should Add Match Same Match successfully", async () => {

    
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
  