import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I enter "invalid-email" in the "Email" field', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc123');
});
When('I fill in other required fields without invalid-email field', () => {
    cy.get(commonConstants.LAST_NAME_FIELD).type('Louis');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Henry');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(3)').click(); //type is Social media
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
});
Then('I should see an error message for invalid email format', () => {
    cy.contains("'email' is not a valid email").should('be.visible');
});