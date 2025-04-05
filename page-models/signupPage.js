import { Selector, t } from 'testcafe';

class SignupPage {
  constructor() {
      /**** Selector for firstname on Sign-up page ****/
      this.firstName = Selector('#firstname');
      /**** Selector for lastName on Sign-up page ****/
      this.lastName = Selector('#lastname');
      /**** Selector for email on Sign-up page ****/
      this.email = Selector('#email_address');
      /**** Selector for password on Sign-up page ****/
      this.password = Selector('#password');
      /**** Selector for confirm Password on Sign-up page ****/
      this.confirmPassword = Selector('#password-confirmation');
      /**** Selector for createAccount Button on Sign-up page form ****/
      this.createAccountBtn = Selector('button').withText('Create an Account');
      /**** Selector for welcomeMsg on welcome page ****/
      this.welcomeMsg = Selector('.greet');
  }
  /**** Filling the Create Account Form ****/
  async registerUser(user) {
    await t
      .typeText(this.firstName, user.firstName)
      .typeText(this.lastName, user.lastName)
      .typeText(this.email, user.email)
      .typeText(this.password, user.password)
      .typeText(this.confirmPassword, user.password)
      .click(this.createAccountBtn)
      .wait(5000)
  }

  async assertRegistrationSuccess(user) {
    await t.expect(this.welcomeMsg.innerText).contains(`Welcome, ${user.firstName}`);
    /******* Taking screenshot for proof ********/
    await t.takeScreenshot();
  }
}

export default new SignupPage();
