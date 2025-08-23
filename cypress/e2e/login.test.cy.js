import {validateUserSignIn, visitTestathonDashboard} from "./common.test";

describe('Sign In Test Case Functionality check', () => {

    before(() => {
        visitTestathonDashboard();
    })

    it('Verify user is able to Sign In', () => {
        validateUserSignIn();
    });

})