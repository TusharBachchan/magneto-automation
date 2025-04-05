import { Selector } from 'testcafe';
import signupPage from '../page-models/signupPage';
import homePage from '../page-models/homePage';
 const data = require("../test-data/user-data.json");
 const signUpData = {...data[0], email: `tushar_${Date.now()}@test.com`};

fixture`User Signup Flow`
    .page `${signUpData.url}`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Given a user is on the signup page, when they fill valid info, then account is created', async t => {
    console.log('Starting signup test case...');
    await t.click(homePage.createAnAccount);
    await signupPage.registerUser(signUpData);
    await signupPage.assertRegistrationSuccess(signUpData);
    console.log('End of signup test case...');
});
