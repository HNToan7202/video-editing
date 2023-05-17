// import TESTING from "./varlocal.js";
// describe("Add Video", () => {
//   // case success
//   it("should Search Video successfully", async () => {
//     await browser.url(TESTING);
//     const username = await browser.$("#login-username");
//     await username.setValue("QuangHuy01");
//     const password = await browser.$("#login-password");
//     await password.setValue("Huyvff@111");
//     await browser.keys("Enter");
//     await browser.pause(3000);

//     // tạo biến chứa id của các element
//     const SEARCH = "button[type=submit]";
//     const BUTTON_OPEN = "button[title=Open]";
//     const BUTTON = "button[type=button]";
//     const INPUT_DATE = "input[type=tel]";
//     const LEAGUE_NAME = "input[placeholder='Select league name']";
//     const EVENT_NAME = "input[placeholder='Select Event Name']";
//     const SPAN = "span[role=button]";
//     const CHECKBOX = "input[type=range]";
//     // thực hiện các bước test
//     await browser.url(TESTING + "highlight");

//     await browser.$(BUTTON).click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[15].click();
//     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//     await browser.$$(BUTTON)[1].click();
//     await browser.pause(1000);
//     await browser.$$(BUTTON)[32].click();
//     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
//     // await browser.$$(BUTTON_OPEN)[0].click();
//     // await browser.pause(1000);
//     await browser.$(LEAGUE_NAME).setValue("V League");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     // await browser.$$(BUTTON)[4].click();
//     // await browser.pause(1000);
//     await browser.$(EVENT_NAME).setValue("highlight");
//     await browser.pause(1000);
//     await browser.keys("ArrowDown");
//     await browser.keys("Enter");
//     await browser.$(SEARCH).click();
//     // await browser.pause(10000);
//     // await browser.actions([
//     //   browser.action("pointer").down().move(10, 0).up().perform(),
//     // ]);
//     // await browser.pause(300000);
//     await browser.saveScreenshot("./src/testing/NotifyVideo/caseSuccess.png");
//     expect(browser).toHaveTitle("AddVideo");
//   });
//   //   it("should Search Video successfully", async () => {
//   //     await browser.refresh();
//   //     await browser.pause(2000);
//   //     // tạo biến chứa id của các element
//   //     const SEARCH = "button[type=submit]";
//   //     const BUTTON_OPEN = "button[title=Open]";
//   //     const BUTTON = "button[type=button]";
//   //     const INPUT_DATE = "input[type=tel]";
//   //     const LEAGUE_NAME = "input[placeholder='Select league name']";
//   //     const EVENT_NAME = "input[placeholder='Select Event Name']";
//   //     const SPAN = "span[role=button]";
//   //     const CHECKBOX = "input[type=checkbox]";
//   //     // thực hiện các bước test

//   //     await browser.$(BUTTON).click();
//   //     await browser.pause(1000);
//   //     await browser.$$(BUTTON)[15].click();
//   //     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//   //     await browser.$$(BUTTON)[1].click();
//   //     await browser.pause(1000);
//   //     await browser.$$(BUTTON)[32].click();
//   //     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
//   //     // await browser.$$(BUTTON_OPEN)[0].click();
//   //     // await browser.pause(1000);
//   //     await browser.$(LEAGUE_NAME).setValue("V League");
//   //     await browser.pause(1000);
//   //     await browser.keys("ArrowDown");
//   //     await browser.keys("Enter");
//   //     // await browser.$$(BUTTON)[4].click();
//   //     // await browser.pause(1000);
//   //     await browser.$(EVENT_NAME).setValue("highlight");
//   //     await browser.pause(1000);
//   //     await browser.keys("ArrowDown");
//   //     await browser.keys("Enter");
//   //     await browser.$(SEARCH).click();
//   //     await browser.pause(3000);

//   //     await browser.$(SPAN).click();
//   //     await browser.pause(10000);
//   //     await browser.$$(CHECKBOX)[11].click();
//   //     await browser.$$(BUTTON)[11].click();

//   //     // await browser.$$(SPAN)[1].click();
//   //     // await browser.$$(CHECKBOX)[13].click();
//   //     // await browser.$$(BUTTON)[13].click();
//   //     await browser.pause(2000);

//   //     await browser.saveScreenshot("./src/testing/SearchVideo/caseSuccess01.png");
//   //     expect(browser).toHaveTitle("AddVideo");
//   //   });

//   //   it("should Search Video successfully", async () => {
//   //     await browser.refresh();
//   //     await browser.pause(2000);
//   //     // tạo biến chứa id của các element
//   //     const SEARCH = "button[type=submit]";
//   //     const BUTTON_OPEN = "button[title=Open]";
//   //     const BUTTON = "button[type=button]";
//   //     const INPUT_DATE = "input[type=tel]";
//   //     const LEAGUE_NAME = "input[placeholder='Select league name']";
//   //     const EVENT_NAME = "input[placeholder='Select Event Name']";
//   //     const SPAN = "span[role=button]";
//   //     const CHECKBOX = "input[type=checkbox]";
//   //     // thực hiện các bước test

//   //     await browser.$(BUTTON).click();
//   //     await browser.pause(1000);
//   //     await browser.$$(BUTTON)[15].click();
//   //     await browser.$$(INPUT_DATE)[0].setValue("01/05/2023");

//   //     await browser.$$(BUTTON)[1].click();
//   //     await browser.pause(1000);
//   //     await browser.$$(BUTTON)[32].click();
//   //     await browser.$$(INPUT_DATE)[1].setValue("12/05/2023");
//   //     // await browser.$$(BUTTON_OPEN)[0].click();
//   //     // await browser.pause(1000);
//   //     await browser.$(LEAGUE_NAME).setValue("V League");
//   //     await browser.pause(1000);
//   //     await browser.keys("ArrowDown");
//   //     await browser.keys("Enter");
//   //     // await browser.$$(BUTTON)[4].click();
//   //     // await browser.pause(1000);
//   //     await browser.$(EVENT_NAME).setValue("highlight");
//   //     await browser.pause(1000);
//   //     await browser.keys("ArrowDown");
//   //     await browser.keys("Enter");
//   //     await browser.$(SEARCH).click();
//   //     await browser.pause(3000);

//   //     // await browser.$(SPAN).click();
//   //     // await browser.pause(10000);
//   //     // await browser.$$(CHECKBOX)[11].click();
//   //     // await browser.$$(BUTTON)[11].click();

//   //     await browser.$$(SPAN)[1].click();
//   //     await browser.$$(CHECKBOX)[13].click();
//   //     await browser.$$(BUTTON)[11].click();
//   //     await browser.pause(2000);

//   //     await browser.saveScreenshot("./src/testing/SearchVideo/caseSuccess02.png");
//   //     expect(browser).toHaveTitle("AddVideo");
//   //   });
// });
