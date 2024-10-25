import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I fill in only the "Email" field', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
});
When('I leave the "Last Name" and "First Name" fields empty', () => {
    cy.get(commonConstants.LAST_NAME_FIELD).should('be.empty');
    cy.get(commonConstants.FIRST_NAME_FIELD).should('be.empty');
});
Then('I should see an error message for the missing "Last Name and First Name" required fields', () => {
    cy.contains("'lastName' is required").should('be.visible');
    cy.contains("'firstName' is required").should('be.visible');
});