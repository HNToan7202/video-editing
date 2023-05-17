import TESTING from "./varlocal.js";
describe("Add Match", () => {
  // case success
  it("should Add Match successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    await browser.keys("Enter");
    await browser.pause(3000);

    // tạo biến chứa id của các element
    const BTN_ADD_LEAGUENAME = browser.$("button[type=button]");
    const LEAGUE_NAME = browser.$("input[placeholder='Enter league name']");
    const MATCH_NAME = browser.$("input[placeholder='Enter match name']");
    const CHANNEL_NAME = browser.$("input[placeholder='Enter Channel Name']");
    const IP = browser.$("input[placeholder='Enter IP']");
    const PORT = browser.$("input[placeholder='Enter Port']");
    const SAVE_BTN = browser.$("button[type=submit]");

    // thực hiện các bước test
    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.setValue("V League");
    await MATCH_NAME.setValue("HAGL vs SHB");
    //await browser.$(TIME).setValue("");
    await CHANNEL_NAME.setValue("VTV");
    await IP.setValue("127.0.0.1");
    await PORT.setValue("3000");
    SAVE_BTN.click();

    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/AddMatch/caseSuccess.png");
    expect(browser).toHaveTitle("AddMatch");
  });
  it("should Add Match Miss Leaguename", async () => {
    // tạo biến chứa id của các element
    const BTN_ADD_LEAGUENAME = browser.$("button[type=button]");
    const LEAGUE_NAME = browser.$("input[placeholder='Enter league name']");
    const MATCH_NAME = browser.$("input[placeholder='Enter match name']");
    const CHANNEL_NAME = browser.$("input[placeholder='Enter Channel Name']");
    const IP = browser.$("input[placeholder='Enter IP']");
    const PORT = browser.$("input[placeholder='Enter Port']");
    const SAVE_BTN = browser.$("button[type=submit]");
    // thực hiện các bước test

    //await BTN_ADD_LEAGUENAME.click();
    //await LEAGUE_NAME.setValue("V League");
    await MATCH_NAME.setValue("HAGL vs SHB");
    await CHANNEL_NAME.setValue("VTV");
    await IP.setValue("127.0.0.1");
    await PORT.setValue("3000");
    SAVE_BTN.click();

    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/AddMatch/caseFailNotAddLEAGUE_NAME.png"
    );
    await browser.refresh();
    expect(browser).toHaveTitle("AddMatch");
  });
  it("should Add Match Miss MatchName", async () => {
    // tạo biến chứa id của các element
    const BTN_ADD_LEAGUENAME = browser.$("button[type=button]");
    const LEAGUE_NAME = browser.$("input[placeholder='Enter league name']");
    const MATCH_NAME = browser.$("input[placeholder='Enter match name']");
    const CHANNEL_NAME = browser.$("input[placeholder='Enter Channel Name']");
    const IP = browser.$("input[placeholder='Enter IP']");
    const PORT = browser.$("input[placeholder='Enter Port']");
    const SAVE_BTN = browser.$("button[type=submit]");
    // thực hiện các bước test

    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.setValue("V League");
    //await MATCH_NAME.setValue("HAGL vs SHB");
    await CHANNEL_NAME.setValue("VTV");
    await IP.setValue("127.0.0.1");
    await PORT.setValue("3000");
    SAVE_BTN.click();

    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/AddMatch/caseFailNotAddMATCH_NAME.png"
    );
    await browser.refresh();
    expect(browser).toHaveTitle("AddMatch");
  });

  it("should Add Match 2", async () => {
    // tạo biến chứa id của các element
    const BTN_ADD_LEAGUENAME = browser.$("button[type=button]");
    const LEAGUE_NAME = browser.$("input[placeholder='Enter league name']");
    const MATCH_NAME = browser.$("input[placeholder='Enter match name']");
    const CHANNEL_NAME = browser.$("input[placeholder='Enter Channel Name']");
    const IP = browser.$("input[placeholder='Enter IP']");
    const PORT = browser.$("input[placeholder='Enter Port']");
    const SAVE_BTN = browser.$("button[type=submit]");
    // thực hiện các bước test

    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.setValue("V League");
    await MATCH_NAME.setValue("HAGL vs SHB");
    await CHANNEL_NAME.setValue("VTV3");
    await IP.setValue("127.0.0.1");
    await PORT.setValue("3000");
    SAVE_BTN.click();

    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/AddMatch/caseSucessAddMatchName.png"
    );
    await browser.refresh();
    expect(browser).toHaveTitle("AddMatch");
  });

  it("should Add Match Same Match ", async () => {
    // tạo biến chứa id của các element
    const BTN_ADD_LEAGUENAME = browser.$("button[type=button]");
    const LEAGUE_NAME = browser.$("input[placeholder='Enter league name']");
    const MATCH_NAME = browser.$("input[placeholder='Enter match name']");
    const CHANNEL_NAME = browser.$("input[placeholder='Enter Channel Name']");
    const IP = browser.$("input[placeholder='Enter IP']");
    const PORT = browser.$("input[placeholder='Enter Port']");
    const SAVE_BTN = browser.$("button[type=submit]");
    // thực hiện các bước test

    await BTN_ADD_LEAGUENAME.click();
    await LEAGUE_NAME.setValue("V League");
    await MATCH_NAME.setValue("HAGL vs SHB");
    await CHANNEL_NAME.setValue("VTV");
    await IP.setValue("127.0.0.1");
    await PORT.setValue("3000");
    SAVE_BTN.click();
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(5000);
    await browser.saveScreenshot(
      "./src/testing/AddMatch/caseSucessSameAll.png"
    );

    expect(browser).toHaveTitle("AddMatch");
  });
});

after(() => {
  // allure.generateReport();
});
