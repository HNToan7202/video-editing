import TESTING from "./varlocal.js";
describe("DeleteVideo Test Suite", () => {
  it("Logged in successfully", async () => {
    await browser.url(TESTING);
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
    await browser.saveScreenshot("./src/testing/DeleteVideo/caseLogin.png");
    expect(browser).toHaveTitle("SignIn");
  });
  it("DeleteVideo1", async () => {
    await browser.url(TESTING + "/gallery");
    await browser.pause(1000);
    //Testcase: Xóa ảnh
    await browser
      .$(
        ".ant-btn.ant-btn-circle.ant-btn-default.ant-btn-icon-only.ant-btn-dangerous"
      )
      .click();
    await browser.pause(1000);
    //Testcase1: Nhấn nút Hủy
    await browser.$(".ant-btn.ant-btn-default.ant-btn-sm").click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/DeleteVideo/DeleteVideo1.png");
    expect(browser).toHaveTitle("DeleteVideo1");
  });
  it("DeleteVideo2", async () => {
    await browser
      .$(
        ".ant-btn.ant-btn-circle.ant-btn-default.ant-btn-icon-only.ant-btn-dangerous"
      )
      .click();
    await browser.pause(1000);
    //Testcase2: Nhấn nút Xóa
    await browser.$(".ant-btn.ant-btn-primary.ant-btn-sm").click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/DeleteVideo/DeleteVideo2.png");
    expect(browser).toHaveTitle("DeleteVideo2");
  });
});

after(() => {
  // allure.generateReport();
});
