import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';


When('I fill in all required fields', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
    cy.get(commonConstants.LAST_NAME_FIELD).type('Lou');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Harmon');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(2)').click(); //type is Recommended by friend
});
When('I select "Printing" from the Services field', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
});
When('I select "Prospect" from the Association field', () => {
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
});
When('I click the "Submit" button', () => {
    cy.get(commonConstants.SUBMIT_BUTTON).click();
});
Then('the form should be submitted successfully', () => {
    cy.contains('Your inquiry has been submitted successfully!').should('be.visible');
});