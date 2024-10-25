import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('the "Email" , "Last Name", "First Name", "About US","Services of Interest", "Type of Association" field should display a red asterisk symbol', () => {
    cy.get('label.ant-form-item-required').first().then(($el) => {
        expect(window.getComputedStyle($el[0], '::before').getPropertyValue('color')).to.eq('rgb(255, 77, 79)');
    });
});
