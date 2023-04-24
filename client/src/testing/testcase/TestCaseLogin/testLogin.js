import fs from "fs";
import path from "path";
import { join } from "path";
import allureReporter from "@wdio/allure-reporter";

async function testLogin(browser) {
  await browser.url("http://localhost:3000");
  const username = await browser.$("#login-username");
  await username.setValue("huy");
  const password = await browser.$("#login-password");
  await password.setValue("Huyvff@111");
  const loginButton = await browser.$("#login-button");
  await loginButton.click();

  allureReporter.addStep("Take a screenshot", async () => {
    const screenshotPath = join(__dirname, "screenshot.png");
    await browser.saveScreenshot(screenshotPath);
    allureReporter.addAttachment(
      "screenshot",
      fs.readFileSync(screenshotPath),
      "image/png"
    );
  });
  await browser.deleteSession();
}

export { testLogin };
