import fs from "node:fs";
import allureReporter from "@wdio/allure-reporter";
import allure from "allure-commandline";
import { describe, it, after } from "mocha";
describe("Sign Up Test Suite", () => {
  it("should sign up successfully", async () => {
    allure.addFeature("Sign Up Feature");
    allure.addSeverity("Critical");
    allure.addDescription(
      "This test case checks if a user can sign up successfully."
    );
    await browser.url("http://localhost:3000/signUp");
    const username = await browser.$("#usernameSignUp");

    const email = await browser.$("#emailSignUp");

    const fullname = await browser.$("#fullNameSignUp");

    const password = await browser.$("#passwordSignUp");
    const passwordConfirm = await browser.$("#confirmPasswordSignUp");
    const signUpButton = await browser.$("#signUpButton");

    await username.setValue("QuangHuy01");
    // allure.createAttachment(
    //   "Username",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    await email.setValue("ngoquanghuyw22@gmail.com");
    // allure.createAttachment(
    //   "Email",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    await fullname.setValue("Ngô Quang Huy");
    // allure.createAttachment(
    //   "Fullname",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    await password.setValue("Huyvff@111");
    // allure.createAttachment(
    //   "Password",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    await passwordConfirm.setValue("Huyvff@111");
    // allure.createAttachment(
    //   "Confirm Password",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    await signUpButton.click();
    // allure.createAttachment(
    //   "Sign Up Button",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );

    // assert.equal(await browser.getUrl(), "/");
    // allure.createAttachment(
    //   "Success Page",
    //   await browser.takeScreenshot(),
    //   "image/png"
    // );
    // allureReporter.addStep("Take a screenshot", async () => {
    //   const screenshotPath = join(__dirname, "screenshot.png");
    //   await browser.saveScreenshot(screenshotPath);
    //   allureReporter.addAttachment(
    //     "screenshot",
    //     fs.readFileSync(screenshotPath),
    //     "image/png"
    //   );
    // });
  });
});

after(() => {
  // allure.generateReport();
});
