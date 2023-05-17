describe("DownloadVideo Test Suite", () => {
    it("Logged in successfully", async () => {
        await browser.url("http://localhost:3000");
        const username = await browser.$("#login-username");
        await username.setValue("congthanh");
        const password = await browser.$("#login-password");
        await password.setValue("28072002Thanh@");
        const showPassword = await browser.$(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-78trlr-MuiButtonBase-root-MuiIconButton-root");
        await showPassword.click();
        const loginButton = await browser.$("#login-button");
        await loginButton.click();
        await browser.pause(3000);
        // await browser.saveScreenshot("./src/testing/DownloadVideo/caseLogin.png");
        // expect(browser).toHaveTitle("SignIn");

    });
    it("DownloadVideo", async () => {
        await browser.url("http://localhost:3000/gallery");
        await browser.pause(2000);
        const videoSrc = await browser.$('video').getAttribute('src');
        //await browser.newWindow(videoSrc.toString());
        await browser.url(videoSrc);
        await browser.pause(10000);
        await browser.saveScreenshot("./src/testing/DownloadVideo/DownloadVideo.png");
        expect(browser).toHaveTitle("DownloadVideo");
    });
   
});

after(() => {
    // allure.generateReport();
});