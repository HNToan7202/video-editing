describe("Sign Up Test Suite", () => {
  it("should sign up successfully", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy01");
    await email.setValue("ngoquanghuyw22@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("Huyvff@111");
    await passwordConfirm.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot("./src/testing/caseLoginFailusername.png");
    expect(browser).toHaveTitle("SignUp");
  });
});

after(() => {
  // allure.generateReport();
});
