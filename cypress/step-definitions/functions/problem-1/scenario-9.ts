import { When } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I fill in all required fields without optional field', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
    cy.get(commonConstants.LAST_NAME_FIELD).type('Lou');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Harmon');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(2)').click(); //type is Recommended by friend
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
})
When('I leave the optional "Explanation" field empty', () => {
    cy.get(commonConstants.EXPLANATION_FIELD).should('be.empty')
})