import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I select "Printing" from the radio buttons', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
})
Then('the "Printing" radio button should remain selected', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).should('be.checked')
})