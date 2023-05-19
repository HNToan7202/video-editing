import TESTING from "./varlocal.js";

describe("UpLoadJson", () => {
  it("Logged in successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@");
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.pause(5000);
    expect(browser).toHaveTitle("SignIn");
  });
  it("UpLoadJson1", async () => {
    //await browser.$$("td")[6].$("button").click();
    const BUTTON = "button[type=button]";
    await browser.$$(BUTTON)[4].click();
    await browser.pause(1000);

    await browser.$$(BUTTON)[8].click();
    await browser.pause(1000);

    await browser.saveScreenshot("./src/testing/UpLoadJson/UpLoadJson1.png");
    expect(browser).toHaveTitle("UpLoadJson1");
  });
  it("UpLoadJson2", async () => {
    //load lại trang
 
    // await browser
    //   .$('span[title="types:JSON"]')
    //   .setValue("Uploaded Successfully!.");
    await browser.pause(1000);
    await browser
      .$("input[type=file]")
      .setValue("./VietNam_Malay.json");
    await browser.pause(1000);

    const BUTTON = "button[type=button]";
    await browser.$$(BUTTON)[8].click();
    await browser.pause(1000);
 

    await browser.saveScreenshot("./src/testing/UpLoadJson/UpLoadJson2.png");
    expect(browser).toHaveTitle("UpLoadJson2");
  });
});

after(() => {
  // allure.generateReport();
});
