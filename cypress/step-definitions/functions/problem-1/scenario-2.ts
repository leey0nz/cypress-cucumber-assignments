import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I leave all fields empty', () => {
    cy.get(commonConstants.EMAIL_FIELD).should('be.empty');
    cy.get(commonConstants.LAST_NAME_FIELD).should('be.empty');
    cy.get(commonConstants.FIRST_NAME_FIELD).should('be.empty');
    cy.get(commonConstants.ABOUT_US_FIELD).should('be.empty');
    cy.get(commonConstants.SERVICES_ADVER_FIELD).should('be.empty');
    cy.get(commonConstants.SERVICES_LOGISTICS_FIELD).should('be.empty');
    cy.get(commonConstants.ASSOCIATION_TYPE_OTHER_FIELD).should('be.empty');
    cy.get(commonConstants.ASSOCIATION_TYPE_PARTNER_FIELD).should('be.empty');
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).should('be.empty');
    cy.get(commonConstants.ASSOCIATION_TYPE_RESELLER_FIELD).should('be.empty');
    cy.get(commonConstants.ASSOCIATION_TYPE_VENDOR_FIELD).should('be.empty');
    cy.get(commonConstants.EXPLANATION_FIELD).should('be.empty');
});
Then('I should see error messages for all required fields', () => {
    cy.contains("'email' is required").should('be.visible');
    cy.contains("'lastName' is required").should('be.visible');
    cy.contains("'firstName' is required").should('be.visible');
    cy.contains("'infoSource' is required").should('be.visible');
    cy.contains("'servicesOfInterest' is required").should('be.visible');
    cy.contains("'typeOfAssociation' is required").should('be.visible');
});
