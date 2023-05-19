import TESTING from "./varlocal.js";
describe("Add Video", () => {
  // case success
  it("should Add AddVideo successfully", async () => {
    await browser.url(TESTING);
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    const loginButtonError = await browser.$("#login-button");
    await loginButtonError.click();
    await browser.pause(3000);

    // tạo biến chứa id của các element
    const ITEM_VIDEO = "input[type=checkbox]";
    const BUTTON = "button[type=button]";
    const TITLE = 'textarea[aria-invalid="false"]';
    const MERGE = "button[type=submit]";
    // thực hiện các bước test
    await browser.url(TESTING + "/highlight");

    await browser.pause(2000);
    await browser.$$(BUTTON)[6].click();
    await browser.$$(BUTTON)[10].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[2].click();
    await browser.$$(ITEM_VIDEO)[4].click();
    await browser.$$(BUTTON)[22].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$$(MERGE)[1].click();
    await browser.pause(3000);
    await browser.saveScreenshot("./src/testing/AddVideo/caseSuccess.png");
    expect(browser).toHaveTitle("AddVideo");
  });

  // case success 2
  it("should Add AddVideo successfully SameName", async () => {
    await browser.refresh();
    await browser.pause(2000);
    const ITEM_VIDEO = "input[type=checkbox]";
    const BUTTON = "button[type=button]";
    const TITLE = 'textarea[aria-invalid="false"]';
    const MERGE = "button[type=submit]";
    // thực hiện các bước test

    await browser.$$(BUTTON)[6].click();
    await browser.$$(BUTTON)[16].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[2].click();
    await browser.$$(ITEM_VIDEO)[4].click();
    await browser.$$(BUTTON)[28].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$$(MERGE)[1].click();
    await browser.pause(3000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseSuccessSameName.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });
  // // case fail
  it("should Add AddVideo Fail Add Title", async () => {
    // tạo biến chứa id của các element
    await browser.refresh();
    await browser.pause(2000);
    const ITEM_VIDEO = "input[type=checkbox]";
    const BUTTON = "button[type=button]";
    const TITLE = 'textarea[aria-invalid="false"]';
    const MERGE = "button[type=submit]";
    // thực hiện các bước test

    await browser.pause(2000);
    await browser.$$(BUTTON)[6].click();
    await browser.$$(BUTTON)[20].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[2].click();
    await browser.$$(ITEM_VIDEO)[4].click();
    await browser.$$(BUTTON)[32].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[1].click();
    //await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$$(MERGE)[1].click();
    await browser.pause(3000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseFailTitleAddTitle.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });

  // // case AddVideo Success add 1 vide
  it("should Add AddVideo Success not add logo", async () => {
    // tạo biến chứa id của các element
    await browser.refresh();
    await browser.pause(2000);
    const ITEM_VIDEO = "input[type=checkbox]";
    const BUTTON = "button[type=button]";
    const TITLE = 'textarea[aria-invalid="false"]';
    const MERGE = "button[type=submit]";
    // thực hiện các bước test
    await browser.$$(BUTTON)[6].click();
    await browser.$$(BUTTON)[20].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[2].click();
    await browser.$$(ITEM_VIDEO)[4].click();
    await browser.$$(BUTTON)[32].click();
    await browser.pause(2000);
    //await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$$(MERGE)[1].click();
    await browser.pause(3000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseSucessMissLogo.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });

  // // case AddVideo Success no add logo
  it("should Add AddVideo Success no add logo", async () => {
    // await browser.url(TESTING);
    // const username = await browser.$("#login-username");
    // await username.setValue("QuangHuy01");
    // const password = await browser.$("#login-password");
    // await password.setValue("Huyvff@111");
    // await browser.keys("Enter");
    // await browser.pause(1000);
    // await browser.url(
    //   "http://ec2-3-92-79-106.compute-1.amazonaws.com/highlight"
    // );
    // tạo biến chứa id của các element
    await browser.refresh();
    await browser.pause(2000);
    const ITEM_VIDEO = "input[type=checkbox]";
    const BUTTON = "button[type=button]";
    const TITLE = 'textarea[aria-invalid="false"]';
    const MERGE = "button[type=submit]";
    // thực hiện các bước test
    await browser.$$(BUTTON)[6].click();
    await browser.$$(BUTTON)[24].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[2].click();
    await browser.$$(BUTTON)[31].click();
    await browser.pause(2000);
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$$(MERGE)[1].click();
    await browser.pause(3000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseSucessAdd1Video.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });
});

after(() => {
  // allure.generateReport();
});
