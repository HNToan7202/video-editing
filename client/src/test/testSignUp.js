describe("Sign Up Test Suite", () => {
  // case success
  it("should sign up successfully", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy01123");
    await email.setValue("ngoquanghuyw221234@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("Huyvff@111");
    await passwordConfirm.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot("./src/testing/SignUp/caseSuccess.png");
    expect(browser).toHaveTitle("SignUp");
  });

  // case fail username
  it("should sign up failUsename", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy01");
    await email.setValue("ngoquanghuyw22123412312@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("Huyvff@111");
    await passwordConfirm.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/SignUp/caseLoginFailusername.png"
    );
    expect(browser).toHaveTitle("SignUpFailUsename");
  });

  //case fail email
  it("should sign up fail email", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy01tr");
    await email.setValue("ngoquanghuyw22@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("Huyvff@111");
    await passwordConfirm.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot("./src/testing/SignUp/caseLoginFailEmail.png");
    expect(browser).toHaveTitle("SignUpFailEmail");
  });

  //case fail password
  it("should sign up fail password", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy0gg1");
    await email.setValue("ngoquanghuyw22123412312@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("huyvff111");
    await passwordConfirm.setValue("huyvff111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/SignUp/caseLoginFailPassword.png"
    );
    expect(browser).toHaveTitle("SignUpFailPassword");
  });

  //case fail passwordConfirm
  it("should sign up fail passwordConfirm", async () => {
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");
    const email = await browser.$("#emailSignUp");
    const fullname = await browser.$("#fullNameSignUp");
    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");

    await username.setValue("QuangHuy01dd");
    await email.setValue("ngoquanghuyw22123412312@gmail.com");
    await fullname.setValue("Ngô Quang Huy");
    await password.setValue("Huyvff@111");
    await passwordConfirm.setValue("huyvff111");
    await browser.keys("Enter");
    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/SignUp/caseLoginpasswordConfirm.png"
    );
    expect(browser).toHaveTitle("SignUppasswordConfirm");
  });

  after(() => {
    // allure.generateReport();
  });
});
