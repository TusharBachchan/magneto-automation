import { Selector } from 'testcafe';
import signupPage from '../page-models/signupPage';

const user = {
  firstName: 'Tushar',
  lastName: 'Bachchan',
  email: `tushar_${Date.now()}@test.com`,
  password: 'Test@1234'
};

fixture`User Signup Flow`
  .page`https://magento.softwaretestingboard.com`;

test('Given a user is on the signup page, when they fill valid info, then account is created', async t => {
  await t.click(Selector('a').withExactText("Create an Account"));
  await signupPage.registerUser(user);
  await signupPage.assertRegistrationSuccess(user);
});
