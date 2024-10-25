import { When } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I enter a valid email', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
});
When('I fill in other required fields without valid-email field', () => {
    cy.get(commonConstants.LAST_NAME_FIELD).type('Lauwy');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Han');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(4)').click(); //type is Email marketing
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
});
When('I leave optional fields empty', () => {
    cy.get(commonConstants.EXPLANATION_FIELD).should('be.empty')
});