import TESTING from "./varlocal.js";
describe("Logout", () => {
  // case success
  it("should sign in successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(3000);
    const usernameLogout = await browser.$("#logout-button");
    await usernameLogout.click();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/LogOut/caseLogout.png");

    expect(browser).toHaveTitle("LogOut");
  });
});

after(() => {});
