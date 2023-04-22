/// <reference types="cypress" />

import { FORMULARIO } from "./elements";

class dados{
    checkout(){
        cy.get(FORMULARIO.email, {timeout: 20000}).should('be.visible').type(Cypress.env("dados").email);
        cy.get(FORMULARIO.firstname).type(Cypress.env("dados").firstname);
        cy.get(FORMULARIO.lastname).type(Cypress.env("dados").lastname);
        cy.get(FORMULARIO.company).type(Cypress.env("dados").company);
        cy.get(FORMULARIO.enderecocampo1).type(Cypress.env("dados").enderecocampo1);
        cy.get(FORMULARIO.enderecocampo2).type(Cypress.env("dados").enderecocampo2);
        cy.get(FORMULARIO.enderecocampo3).type(Cypress.env("dados").enderecocampo3);
        cy.get(FORMULARIO.cidade).type(Cypress.env("dados").cidade);
        cy.get(FORMULARIO.estado).select(Cypress.env("dados").estado);
        cy.get(FORMULARIO.cep, {timeout: 7000}).type(Cypress.env("dados").cep);
        cy.get(FORMULARIO.telefone).type(Cypress.env("dados").telefone);
        cy.get(FORMULARIO.frete).click({force:true});
        cy.get(".button", {timeout: 7000}).click({ force: true });
        cy.get(".payment-method-content > :nth-child(4) > div.primary > .action").should('be.visible').click()

    }
}
export default new dados();
