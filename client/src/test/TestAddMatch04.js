describe("Add Match", () => {
  // case success
  it("should Add Match successfully", async () => {
    await browser.url("http://localhost:3000/");
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    await browser.keys("Enter");

    // tạo biến chứa id của các element
    const LEAGUE_NAME = "#" + ":r7:".replace(/\:/g, "\\:");
    const MATCH_NAME = "#" + ":r8:".replace(/\:/g, "\\:");
    const TIME = "#" + ":r9:".replace(/\:/g, "\\:");
    const CHANNEL_NAME = "#" + ":ra:".replace(/\:/g, "\\:");
    const IP = "#" + ":rb:".replace(/\:/g, "\\:");
    const PORT = "#" + ":rc:".replace(/\:/g, "\\:");
    const ADD_LEAGUENAME = await browser.$("button[type=button]");
    const SAVE_BTN = await browser.$("button[type=submit]");
    await browser.pause(1000);
    // thực hiện các bước test
    ADD_LEAGUENAME.click();
    await browser.pause(1000);
    await browser.$(LEAGUE_NAME).setValue("V League");
    await browser.$(MATCH_NAME).setValue("HAGL vs SHB");
    await browser.$(TIME).setValue("");
    await browser.$(CHANNEL_NAME).setValue("VTV");
    await browser.$(IP).setValue("127.0.0.1");
    await browser.$(PORT).setValue("3000");
    SAVE_BTN.click();
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/AddMatch/caseSuccess.png");
    expect(browser).toHaveTitle("AddMatch");
  });
});

after(() => {
  // allure.generateReport();
});
