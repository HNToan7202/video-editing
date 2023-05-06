import path from "pạth";
describe("UpLoadJson Test Suite", () => {
  it("Logged in successfully", async () => {
    await browser.url("http://localhost:3000");
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    const showPassword = await browser.$(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root"
    );
    await showPassword.click();
    const loginButton = await browser.$("#login-button");
    await loginButton.click();

    await browser.pause(100000);
    expect(browser).toHaveTitle("SignIn");
  });
  it("UpLoadJson1", async () => {
    await browser.$$("td")[6].$("button").click();
    await browser
      .$$(
        ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root"
      )[1]
      .click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/UpLoadJson/UpLoadJson1.png");
    expect(browser).toHaveTitle("UpLoadJson1");
  });
  it("UpLoadJson2", async () => {
    //load lại trang
    await browser.pause(1000);
    await browser
      .$('span[title="types:JSON"]')
      .setValue("Uploaded Successfully!.");
    await browser.pause(1000);
    await browser
      .$("input[type=file]")
      .setValue("D:\\Download Zalo\\vn_tl.json");
    await browser.pause(1000);
    await browser
      .$$(
        ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root"
      )[1]
      .click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/UpLoadJson/UpLoadJson2.png");
    expect(browser).toHaveTitle("UpLoadJson2");
  });
});

after(() => {
  // allure.generateReport();
});
