const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');
const TESTING = "http://ec2-3-82-125-96.compute-1.amazonaws.com";
jest.setTimeout(100000); // timeout toàn cục
let driver;
beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});
afterAll(async () => {
    await driver.quit();
});
it("should sign up successfully", async () => {
  await driver.get(TESTING + "/signUp");
  const username = await driver.findElement(By.css("#usernameSignUp"));
  const email = await driver.findElement(By.css("#emailSignUp"));
  const fullname = await driver.findElement(By.css("#fullNameSignUp"));
  const password = await driver.findElement(By.css("#passwordSignUp"));
  const passwordConfirm = await driver.findElement(
    By.css("#confirmPasswordSignUp")
  );
  await username.sendKeys("QuangHuy03321");
  await email.sendKeys("ngoquanghuyw221234@gmail.com");
  await fullname.sendKeys("Ngô Quang Huy");
  await password.sendKeys("Huyvff@111");
  await passwordConfirm.sendKeys("Huyvff@111");
  const BUTTON = await driver.findElement(By.css("button[type=submit]"));
  await BUTTON.click();

});

// case fail username
it("should sign up failUsename", async () => {
  await driver.get(TESTING + "/signUp");
  const username = await driver.findElement(By.css("#usernameSignUp"));
  const email = await driver.findElement(By.css("#emailSignUp"));
  const fullname = await driver.findElement(By.css("#fullNameSignUp"));
  const password = await driver.findElement(By.css("#passwordSignUp"));
  const passwordConfirm = await driver.findElement(
    By.css("#confirmPasswordSignUp")
  );
  await username.sendKeys("QuangHuy01");
  await email.sendKeys("ngoquanghuyw22123412312@gmail.com");
  await fullname.sendKeys("Ngô Quang Huy");
  await password.sendKeys("Huyvff@111");
  await passwordConfirm.sendKeys("Huyvff@111");
  const BUTTON = await driver.findElement(By.css("button[type=submit]"));
  await BUTTON.click();

});
it("should sign up fail email", async () => {
  await driver.get(TESTING + "/signUp");
  const username = await driver.findElement(By.css("#usernameSignUp"));
  const email = await driver.findElement(By.css("#emailSignUp"));
  const fullname = await driver.findElement(By.css("#fullNameSignUp"));
  const password = await driver.findElement(By.css("#passwordSignUp"));
  const passwordConfirm = await driver.findElement(
  By.css("#confirmPasswordSignUp")
  );
  await username.sendKeys("QuangHuy01tr");
  await email.sendKeys("ngoquanghuyw22@gmail.com");
  await fullname.sendKeys("Ngô Quang Huy");
  await password.sendKeys("Huyvff@111");
  await passwordConfirm.sendKeys("Huyvff@111");
  const BUTTON = await driver.findElement(By.css("button[type=submit]"));
  await BUTTON.click();
  });
  
  //case fail password
  it("should sign up fail password", async () => {
  await driver.get(TESTING + "/signUp");
  const username = await driver.findElement(By.css("#usernameSignUp"));
  const email = await driver.findElement(By.css("#emailSignUp"));
  const fullname = await driver.findElement(By.css("#fullNameSignUp"));
  const password = await driver.findElement(By.css("#passwordSignUp"));
  const passwordConfirm = await driver.findElement(
  By.css("#confirmPasswordSignUp")
  );
  await username.sendKeys("QuangHuy0gg1");
  await email.sendKeys("ngoquanghuyw22123412312@gmail.com");
  await fullname.sendKeys("Ngô Quang Huy");
  await password.sendKeys("huyvff111");
  await passwordConfirm.sendKeys("huyvff111");
  const BUTTON = await driver.findElement(By.css("button[type=submit]"));
  await BUTTON.click();

  });
  
  //case fail passwordConfirm
  it("should sign up fail passwordConfirm", async () => {
  await driver.get(TESTING + "/signUp");
  const username = await driver.findElement(By.css("#usernameSignUp"));
  const email = await driver.findElement(By.css("#emailSignUp"));
  const fullname = await driver.findElement(By.css("#fullNameSignUp"));
  const password = await driver.findElement(By.css("#passwordSignUp"));
  const passwordConfirm = await driver.findElement(
  By.css("#confirmPasswordSignUp")
  );
  await username.sendKeys("QuangHuy01dd");
  await email.sendKeys("ngoquanghuyw22123412312@gmail.com");
  await fullname.sendKeys("Ngô Quang Huy");
  await password.sendKeys("Huyvff@111");
  await passwordConfirm.sendKeys("huyvff111");
  const BUTTON = await driver.findElement(By.css("button[type=submit]"));
  await BUTTON.click();
  });
