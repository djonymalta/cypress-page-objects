/// <reference types="cypress" />

import {PRODUTO, CARRINHO} from './elements'

class produto {
    comprar(){
        cy.get(PRODUTO.tamanhoxs).click()
        cy.get(PRODUTO.corlaranja).click()
        cy.get(PRODUTO.botaoaddtocart, {timeout: 4500}).click({force: true})
    }

    abrirCarrinho(){
        cy.get(CARRINHO.botaocarrinho, {timeout: 5000}).click();
        cy.get('strong > .price', {timeout: 6000}).should('be.visible')
        cy.get(CARRINHO.fazercheckout, {timeout: 5000}).click();
    }
}

export default new produto();