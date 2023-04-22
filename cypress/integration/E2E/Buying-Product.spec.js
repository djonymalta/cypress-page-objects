/// <reference types="cypress" />
import produto from "../../support/pages/index";
import realizar from "../../support/pages/checkout"

describe('Acessar a página LUMA e realizar a compra de um produto com sucesso', () => { 

    before(() => {
        cy.visit('/')
    });
    
    it('Deve escolher um produto, adiciona-lo ao carrinho e abrir o carrinho.', () => {
        produto.comprar()
        produto.abrirCarrinho()
    });

    it('Deve preencher o formulário para realizar a compra do produto até o seu pgto.', () => {
        realizar.checkout()
    });
    
 })