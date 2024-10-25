import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonConstants from '../../constants/common-constants';

When('I select all checkboxes in "Services of Interest"', () => {
    cy.get(commonConstants.SERVICES_PRINTING_FIELD).click();
    cy.get(commonConstants.SERVICES_ADVER_FIELD).click();
    cy.get(commonConstants.SERVICES_LOGISTICS_FIELD).click();
})
When('I select change around radio buttons in "Type of Association"', () => {
    cy.get(commonConstants.ASSOCIATION_TYPE_PROSPECT_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_PARTNER_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_RESELLER_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_VENDOR_FIELD).click();
    cy.get(commonConstants.ASSOCIATION_TYPE_OTHER_FIELD).click();
})
When('I fill in all required fields with all checkboxes and radio buttons', () => {
    cy.get(commonConstants.EMAIL_FIELD).type('abc@mail.com');
    cy.get(commonConstants.LAST_NAME_FIELD).type('Lou');
    cy.get(commonConstants.FIRST_NAME_FIELD).type('Harmon');
    cy.get(commonConstants.ABOUT_US_FIELD).click();
    cy.get('.rc-virtual-list-holder-inner>div:nth-child(2)').click(); //type is Recommended by friend
})