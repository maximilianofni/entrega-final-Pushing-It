export class HomePage {

    constructor() {
        this.onlineShopLink= "#onlineshoplink"
    }
    clickoOnlineShopLink(){
        cy.get(this.onlineShopLink).click();
    };
}