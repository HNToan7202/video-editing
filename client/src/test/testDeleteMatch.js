describe("Delete Match Test Suite", () => {
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
        await browser.saveScreenshot("./src/testing/DeleteMatch/caseLogin.png");
        expect(browser).toHaveTitle("SignIn");
      });
    it("DeleteMatch1", async () => {
        //xóa trận đấu
        await browser.pause(2000);
        await browser.$$("td")[7].$('button').click();
        await browser.pause(1000);
        //Testcase1: Nhấn nút Hủy
        await browser.$$('[class="MuiDialogActions-root MuiDialogActions-spacing css-hlj6pa-MuiDialogActions-root"] button')[0].click();
        await browser.pause(1000);
        await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch1.png");
        expect(browser).toHaveTitle("DeleteMatch1");
    });
    it("DeleteMatch2", async () => {
        
        //xóa trận đấu
        await browser.$$("td")[7].$('button').click();
        await browser.pause(1000);
        //Testcase1: Nhấn nút xóa
        await browser.$$('[class="MuiDialogActions-root MuiDialogActions-spacing css-hlj6pa-MuiDialogActions-root"] button')[1].click();
        await browser.pause(1000);
        await browser.saveScreenshot("./src/testing/DeleteMatch/DeleteMatch2.png");
        expect(browser).toHaveTitle("DeleteMatch2");
    });
});

after(() => {
    // allure.generateReport();
});