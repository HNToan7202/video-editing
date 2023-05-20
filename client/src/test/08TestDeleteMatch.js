import TESTING from "./varlocal.js";
describe("Delete Match", () => {
  it("Logged in successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@");
    const showPassword = await browser.$("svg");
    await showPassword.click();
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.saveScreenshot("./src/testing/DeleteMatch/caseLogin.png");
    expect(browser).toHaveTitle("SignIn");
  });
  it("DeleteMatch1", async () => {
    //xóa trận đấu
    await browser.pause(2000);
    await browser.$$("td")[7].$("button").click();
    await browser.pause(1000);
    const BUTTON = "button[type=button]";
    //Testcase1: Nhấn nút Hủy
    await browser.$$(BUTTON)[8].click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch1.png");
    expect(browser).toHaveTitle("DeleteMatch1");
  });
  it("DeleteMatch2", async () => {
    //xóa trận đấu
    await browser.$$("td")[7].$("button").click();
    await browser.pause(1000);
    const BUTTON = "button[type=button]";
    //Testcase1: Nhấn nút Ok
    await browser.$$(BUTTON)[9].click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch2.png");
    expect(browser).toHaveTitle("DeleteMatch2");
  });
});

after(() => {
  // allure.generateReport();
});
