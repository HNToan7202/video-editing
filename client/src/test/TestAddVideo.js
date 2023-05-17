describe("Add Video", () => {
  // case success
  it("should Add AddVideo successfully", async () => {
    await browser.url("http://localhost:3000/");
    const username = await browser.$("#login-username");
    await username.setValue("QuangHuy01");
    const password = await browser.$("#login-password");
    await password.setValue("Huyvff@111");
    await browser.keys("Enter");

    await browser.pause(3000);
    // tạo biến chứa id của các element
    const ADD_EVENT =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-12fwbsp-MuiButtonBase-root-MuiButton-root";
    const ITEM_VIDEO =
      ".MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root";
    const VIEW =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root";

    const EXIT_ADD_VIDEO =
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary.MuiIconButton-sizeMedium.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root";

    const ADD_LOGO = "input[type=checkbox].ant-checkbox-input";
    const TITLE =
      ".MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input";

    const MERGE =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1clzr65-MuiButtonBase-root-MuiButton-root";

    // thực hiện các bước test
    await browser.url("http://localhost:3000/highlight");

    await browser.$(VIEW).click();
    await browser.$(ADD_EVENT).click();
    await browser.$$(ITEM_VIDEO)[0].click();
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(EXIT_ADD_VIDEO).click();
    await browser.$(ADD_LOGO).click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$(MERGE).click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/AddVideo/caseSuccess.png");
    expect(browser).toHaveTitle("AddVideo");
  });

  // case success 2
  it("should Add AddVideo successfully", async () => {
    await browser.pause(1000);
    // tạo biến chứa id của các element
    const ADD_EVENT =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-12fwbsp-MuiButtonBase-root-MuiButton-root";
    const ITEM_VIDEO =
      ".MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root";
    const VIEW =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root";

    const EXIT_ADD_VIDEO =
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary.MuiIconButton-sizeMedium.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root";

    const ADD_LOGO = "input[type=checkbox].ant-checkbox-input";
    const TITLE =
      ".MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input";

    const MERGE =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1clzr65-MuiButtonBase-root-MuiButton-root";

    // thực hiện các bước test
    await browser.url("http://localhost:3000/highlight");

    await browser.$(VIEW).click();
    await browser.$(ADD_EVENT).click();
    await browser.$$(ITEM_VIDEO)[0].click();
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(EXIT_ADD_VIDEO).click();
    await browser.$(ADD_LOGO).click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$(MERGE).click();
    await browser.pause(1000);
    await browser.saveScreenshot("./src/testing/AddVideo/caseSuccess1.png");
    expect(browser).toHaveTitle("AddVideo");
  });
  // case fail
  it("should Add AddVideo Fail Add Title", async () => {
    // tạo biến chứa id của các element
    const ADD_EVENT =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-12fwbsp-MuiButtonBase-root-MuiButton-root";
    const ITEM_VIDEO =
      ".MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root";
    const VIEW =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root";

    const EXIT_ADD_VIDEO =
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary.MuiIconButton-sizeMedium.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root";

    const ADD_LOGO = "input[type=checkbox].ant-checkbox-input";
    const TITLE =
      ".MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input";

    const MERGE =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1clzr65-MuiButtonBase-root-MuiButton-root";

    // thực hiện các bước test
    await browser.url("http://localhost:3000/highlight");

    await browser.$(VIEW).click();
    await browser.$(ADD_EVENT).click();
    await browser.$$(ITEM_VIDEO)[0].click();
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(EXIT_ADD_VIDEO).click();
    await browser.$(ADD_LOGO).click();
    //await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$(MERGE).click();
    await browser.pause(1000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseFailTitleAddTitle.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });

  // case AddVideo Success add 1 vide
  it("should Add AddVideo Success add 1 video", async () => {
    // tạo biến chứa id của các element
    const ADD_EVENT =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-12fwbsp-MuiButtonBase-root-MuiButton-root";
    const ITEM_VIDEO =
      ".MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root";
    const VIEW =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root";

    const EXIT_ADD_VIDEO =
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary.MuiIconButton-sizeMedium.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root";

    const ADD_LOGO = "input[type=checkbox].ant-checkbox-input";
    const TITLE =
      ".MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input";

    const MERGE =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1clzr65-MuiButtonBase-root-MuiButton-root";

    // thực hiện các bước test
    await browser.url("http://localhost:3000/highlight");

    await browser.$(VIEW).click();
    await browser.$(ADD_EVENT).click();
    await browser.$$(ITEM_VIDEO)[0].click();
    //await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(EXIT_ADD_VIDEO).click();
    //await browser.$(ADD_LOGO).click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$(MERGE).click();
    await browser.pause(1000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseSucessAdd1Video.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });

  // case AddVideo Success no add logo
  it("should Add AddVideo Success no add logo", async () => {
    // tạo biến chứa id của các element
    const ADD_EVENT =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-12fwbsp-MuiButtonBase-root-MuiButton-root";
    const ITEM_VIDEO =
      ".MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-j204z7-MuiFormControlLabel-root";
    const VIEW =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-sghohy-MuiButtonBase-root-MuiButton-root";

    const EXIT_ADD_VIDEO =
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorPrimary.MuiIconButton-sizeMedium.css-1kuq5xv-MuiButtonBase-root-MuiIconButton-root";

    const ADD_LOGO = "input[type=checkbox].ant-checkbox-input";
    const TITLE =
      ".MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputMultiline.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input";

    const MERGE =
      ".MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1clzr65-MuiButtonBase-root-MuiButton-root";

    // thực hiện các bước test
    await browser.url("http://localhost:3000/highlight");

    await browser.$(VIEW).click();
    await browser.$(ADD_EVENT).click();
    await browser.$$(ITEM_VIDEO)[0].click();
    await browser.$$(ITEM_VIDEO)[1].click();
    await browser.$(EXIT_ADD_VIDEO).click();
    //await browser.$(ADD_LOGO).click();
    await browser.$(TITLE).setValue("HAGL vs SHB");
    await browser.$(MERGE).click();
    await browser.pause(1000);
    await browser.saveScreenshot(
      "./src/testing/AddVideo/caseSucessNoAddLogo.png"
    );
    expect(browser).toHaveTitle("AddVideo");
  });
});

after(() => {
  // allure.generateReport();
});
