describe("UpLoadVideo Test Suite", () => {
  it("Logged in successfully", async () => {
    await browser.url("http://localhost:3000");
    const username = await browser.$("#login-username");
    await username.setValue("congthanh");
    const password = await browser.$("#login-password");
    await password.setValue("28072002Thanh@");
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
    await browser.pause(3000);
  });
  it("UpLoadVideo", async () => {
    await browser.url("http://localhost:3000/gallery");

    // tao bien chua id cua cac element
    const BUTTON = "button[type=button]";
    const TYPE = "div[role=button]";
    const INPUT_TEXT = "input[type=text]";
    const LI = "li[role=option]";

    await browser.$$(BUTTON)[1].click();
    await browser.$$(TYPE)[7].click();
    await browser.$$(LI)[1].click();
    await browser.$(INPUT_TEXT).setValue("Nơi Này Có Anh");
    //const inputElement = browser.$("input[type=file]");
    await browser
      .$("input[type=file]")
      .setValue("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4");
    // đợi phần tử xuất hiện
    // inputElement.waitForExist();

    // // sửa đổi thuộc tính display của phần tử input[type=file]
    // browser.execute(() => {
    //   const inputElement = document.querySelector("input[type=file]");
    //   inputElement.style.display = "block";
    // });

    // // tương tác với phần tử input[type=file] đã sửa đổi
    // inputElement.setValue("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4");
    await browser.pause(10000);
    await browser.$$(BUTTON)[3].click();
    await browser.pause(10000);
    await browser.saveScreenshot("./src/testing/UpLoadVideo/FailUPload.png");
    expect(browser).toHaveTitle("UpLoadVideo");
  });
  it("UpLoadVideo", async () => {
    await browser.url("http://localhost:3000/gallery");
    await browser.pause(2000);
    // tao bien chua id cua cac element
    const BUTTON = "button[type=button]";
    const TYPE = "div[role=button]";
    const INPUT_TEXT = "input[type=text]";
    const LI = "li[role=option]";

    await browser.$$(BUTTON)[1].click();
    await browser.$$(TYPE)[7].click();
    await browser.$$(LI)[1].click();
    //await browser.$(INPUT_TEXT).setValue("Nơi Này Có Anh");
    const inputElement = browser.$("input[type=file]");

    // đợi phần tử xuất hiện
    inputElement.waitForExist();

    // sửa đổi thuộc tính display của phần tử input[type=file]
    browser.execute(() => {
      const inputElement = document.querySelector("input[type=file]");
      inputElement.style.display = "block";
    });

    // tương tác với phần tử input[type=file] đã sửa đổi
    inputElement.setValue(
      "E:HCMUTE\\video-editing\\client\\src\testing\\UploadVideo\\NoiNayCoAnh.mp4"
    );
    await browser.pause(10000);
    await browser.$$(BUTTON)[3].click();
    await browser.pause(10000);
    await browser.saveScreenshot("./src/testing/UpLoadVideo/MissName.png");
    expect(browser).toHaveTitle("UpLoadVideo");
  });
  it("UpLoadVideo", async () => {
    await browser.url("http://localhost:3000/gallery");
    await browser.pause(2000);
    // tao bien chua id cua cac element
    const BUTTON = "button[type=button]";
    const TYPE = "div[role=button]";
    const INPUT_TEXT = "input[type=text]";
    const LI = "li[role=option]";

    const TYPE_INPUT = 'span[title="types: MP4"]';
    await browser.$$(BUTTON)[1].click();
    await browser.$$(TYPE)[7].click();
    await browser.$$(LI)[1].click();
    await browser.$(INPUT_TEXT).setValue("Nơi Này Có Anh");
    await browser.$(TYPE_INPUT).setValue("Uploaded Successfully!.");
    const inputElement = browser.$("input[type=file]");

    // đợi phần tử xuất hiện
    inputElement.waitForExist();

    // sửa đổi thuộc tính display của phần tử input[type=file]
    browser.execute(() => {
      const inputElement = document.querySelector("input[type=file]");
      inputElement.style.display = "block";
    });

    // tương tác với phần tử input[type=file] đã sửa đổi
    inputElement.setValue("./src/testing/UpLoadVideo/NoiNayCoAnh.mp4");
    await browser.$$(BUTTON)[3].click();
    await browser.pause(10000);
    await browser.saveScreenshot("./src/testing/UpLoadVideo/Success.png");
    expect(browser).toHaveTitle("UpLoadVideo");
  });
});

after(() => {
  // allure.generateReport();
});
