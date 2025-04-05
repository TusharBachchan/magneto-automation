import { Selector, t } from 'testcafe';

class SignupPage {
  constructor() {
    this.firstName = Selector('#firstname');
    this.lastName = Selector('#lastname');
    this.email = Selector('#email_address');
    this.password = Selector('#password');
    this.confirmPassword = Selector('#password-confirmation');
    this.createAccountBtn = Selector('button').withText('Create an Account');
    this.welcomeMsg = Selector('.greet');
  }

  async registerUser(user) {
    await t
      .typeText(this.firstName, user.firstName)
      .typeText(this.lastName, user.lastName)
      .typeText(this.email, user.email)
      .typeText(this.password, user.password)
      .typeText(this.confirmPassword, user.password)
      .click(this.createAccountBtn);
  }

  async assertRegistrationSuccess(user) {
    await t.expect(this.welcomeMsg.innerText).contains(`Welcome, ${user.firstName}`);
  }
}

export default new SignupPage();
