
describe("UpLoadVideo Test Suite", () => {
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
        await browser.saveScreenshot("./src/testing/UpLoadVideo/caseLogin.png");
        expect(browser).toHaveTitle("SignIn");
    });
    it("UpLoadVideo", async () => {
        await browser.url("http://localhost:3000/gallery");
        await browser.pause(1000);
        await browser
            .$$(
                ".MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-primary css-1suf56w-MuiButtonBase-root-MuiFab-root"
            )
            .click();
        await browser.pause(1000);
        await browser
            .$$(
                ".MuiInput-input MuiInputBase-input css-1x51dt5-MuiInputBase-input-MuiInput-input"
            )
            .setValue("images");
        const path = require('path');
        // Lấy đường dẫn của file script đang thực thi
        const scriptPath = __dirname;
        // Chuyển đổi đường dẫn tuyệt đối sang đường dẫn tương đối
        const relativePath = path.relative(scriptPath, "C:\\Users\\DELL\\Downloads\\261208-P553NY-913.jpg");
        await browser.pause(1000);
        browser
            .$("input[type=file]")
            .setValue(relativePath);

        await browser.pause(1000);
        await browser
            .$$(
                ".MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-sghohy-MuiButtonBase-root-MuiButton-root"
            )
            .click();
        await browser.pause(1000);
        await browser.saveScreenshot("./src/testing/UpLoadVideo/UpLoadVideo.png");
        expect(browser).toHaveTitle("UpLoadVideo");
    });

});

after(() => {
    // allure.generateReport();
});


