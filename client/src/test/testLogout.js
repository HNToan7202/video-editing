describe("Sign In Test Suite", () => {
  // case success
  it("should sign in successfully", async () => {
    await browser.url("http://localhost:3000/");
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(1000);
    const usernameLogout = await browser.$("#logout-button");
    await usernameLogout.click();
    await browser.saveScreenshot("./src/testing/LogOut/caseLogout.png");

    expect(browser).toHaveTitle("LogOut");
  });
});

after(() => {});
