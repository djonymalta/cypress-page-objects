const PRODUTO = {
    tamanhoxs: "#option-label-size-143-item-166",
    corlaranja: "#option-label-color-93-item-56",
    botaoaddtocart: "#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button"
};

const CARRINHO = {
    botaocarrinho: ".showcart",
    fazercheckout: ".checkout-methods-items > :nth-child(1) > .action"
}

const FORMULARIO = {
    email: '#customer-email-fieldset > .required > .control > #customer-email',
    firstname: 'input[name="firstname"]',
    lastname: 'input[name="lastname"]',
    company: 'input[name="company"]',
    enderecocampo1: 'input[name="street[0]"',
    enderecocampo2: 'input[name="street[1]"',
    enderecocampo3: 'input[name="street[2]"',
    cidade: "input[name=city]",
    estado: '.control  .select[name="region_id"]',
    cep: "input[name=postcode]",
    telefone: 'input[name="telephone"]',
    frete: 'tbody > :nth-child(1) > :nth-child(1)'
    
}
export {PRODUTO, CARRINHO, FORMULARIO} 