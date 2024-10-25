import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I select "Advertisement" from the checkboxes', () => {
    cy.get(commonConstants.SERVICES_ADVER_FIELD).click();
})
When('I change the selection to "Logistics"', () => {
    cy.get(commonConstants.SERVICES_LOGISTICS_FIELD).click();
})
When('I change the selection to "Printing"', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
    cy.get(commonConstants.SERVICES_ADVER_FIELD).click();
    cy.get(commonConstants.SERVICES_LOGISTICS_FIELD).click();
})

When('I fill in all required fields after change multiple time checkboxes', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
    cy.get(commonConstants.LAST_NAME_FIELD).type('Lou');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Harmon');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(2)').click(); //type is Recommended by friend
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
})
Then('the final selected value in the checkboxes should be "Printing"', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).should('be.checked')
})