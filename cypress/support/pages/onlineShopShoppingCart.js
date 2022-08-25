/// <reference types="cypress" />

export class OnlineShopShoppingCart {

    constructor() {
        this.totalPricebutton =  "Show total price";
        this.price = '//*[@id="price"]';
        this.checkout = "Go to Checkout";

    }

    clickShowtotalPrice() {
        cy.contains(this.totalPricebutton).click();
    }

    verificarPrenda(prenda){
        cy.get(`[name="${prenda}"]`).should('have.text' ,prenda);
    }

    verificarPrendaPrecio(prenda,precio){
       cy.get(`[name="${prenda}"]`).siblings('#productPrice').should('have.text', `$` +  precio);
    }
    
    verificarTotalDePrecios(precioTotal){
        cy.xpath(this.price).should('have.text' , precioTotal);
     }
    
    clickCheckout() {
        cy.contains(this.checkout).click();
    }

};
