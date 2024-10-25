import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the form page', ()=>{
    cy.visit('https://raksul.github.io/recruit-qa-engineer-work-sample/');
})