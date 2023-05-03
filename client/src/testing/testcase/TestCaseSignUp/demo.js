await browser.url("http://localhost:3000/signUp");

const username = await browser.$("#usernameSignUp");

const email = await browser.$("#emailSignUp");

const fullname = await browser.$("#fullNameSignUp");

const password = await browser.$("#passwordSignUp");
const passwordConfirm = await browser.$("#confirmPasswordSignUp");
const signUpButton = await browser.$("#signUpButton");

await username.setValue("QuangHuy01");
await email.setValue("ngoquanghuyw22@gmail.com");
await fullname.setValue("Ngô Quang Huy");
await password.setValue("Huyvff@111");
await passwordConfirm.setValue("Huyvff@111");
await signUpButton.click();
await browser.saveScreenshot("./caseSignUp.png");

await browser.deleteSession();

// fails if file was not created
fs.existsSync("./caseSignUp.png");
