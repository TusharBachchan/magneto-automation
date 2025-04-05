import { Selector, t } from 'testcafe';

class homePage {
  constructor() {
      /**** Selector for Create an Account on Homepage****/
      this.createAnAccount = Selector('a').withExactText("Create an Account")
  }
  
}

export default new homePage();
