describe("Sign in Test Suite", () => {
  it("Login with wrong username", async () => {
    //Đăng nhập sai username
    await browser.url("http://ec2-50-19-42-157.compute-1.amazonaws.com");
    const usernameError = await browser.$("#login-username");
    await usernameError.setValue("congthanh28");
    const passwordError = await browser.$("#login-password");
    await passwordError.setValue("28072002Thanh@");
    const showPassword = await browser.$(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root"
    );
    await showPassword.click();
    const loginButtonError = await browser.$("#login-button");
    await loginButtonError.click();
    await browser.saveScreenshot("./src/testing/SignIn/wrongusername.png");
    expect(browser).toHaveTitle("SignIn1");
  });
  it("Login with wrong password", async () => {
    await browser.url("http://ec2-50-19-42-157.compute-1.amazonaws.com");
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@1");
    const showPassword = await browser.$(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root"
    );
    await showPassword.click();
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.saveScreenshot("./src/testing/SignIn/wrongpassword.png");
    expect(browser).toHaveTitle("SignIn2");
  });
  it("Login to the wrong account", async () => {
    await browser.url("http://ec2-50-19-42-157.compute-1.amazonaws.com");
    const username = await browser.$("#login-username");
    await username.setValue("congthanh27");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@123");
    const showPassword = await browser.$(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root"
    );
    await showPassword.click();
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.saveScreenshot("./src/testing/SignIn/wrongaccount.png");
    expect(browser).toHaveTitle("SignIn3");
  });
  it("Logged in successfully", async () => {
    await browser.url("http://ec2-50-19-42-157.compute-1.amazonaws.com");
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@");
    const showPassword = await browser.$(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root"
    );
    await showPassword.click();
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.saveScreenshot("./src/testing/SignIn/caseSuccess.png");
    expect(browser).toHaveTitle("SignIn4");
  });
});

after(() => {
  // allure.generateReport();
});
