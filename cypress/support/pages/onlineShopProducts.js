/// <reference types="cypress" />

export class OnlineShopProducts {

    constructor() {
        this.shoppingCartButton = '//*[@id="goShoppingCart"]' ;
        this.totalPrice =  "Show total price";
        this.closeButton = "Close"
    }

    clickGoShoppingCart() {
        cy.xpath(this.shoppingCartButton).click();
    }

    clickShowtotalPrice() {
        cy.contains(this.totalPrice).click();
    }
    
    selectProduct(prenda) {
        cy.get(`[value="${prenda}"]`).click();
    }

    exitAlert() {
        cy.contains(this.closeButton).click()
    }

 
};