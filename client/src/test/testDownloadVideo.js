import TESTING from "./varlocal.js";
describe("DownloadVideo Test Suite", () => {
  it("Logged in successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@");
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.pause(2000);
    await browser.saveScreenshot("./src/testing/DownloadVideo/caseLogin.png");
    expect(browser).toHaveTitle("SignIn");
  });
  it("DownloadVideo", async () => {
    await browser.url(TESTING + "/gallery");
    await browser.pause(2000);
    const videoSrc = await browser.$("video").getAttribute("src");
    await browser.url(videoSrc);
    await browser.pause(10000);
    await browser.saveScreenshot(
      "./src/testing/DownloadVideo/DownloadVideo.png"
    );
    expect(browser).toHaveTitle("DownloadVideo");
  });
});

after(() => {
  // allure.generateReport();
});
