export class PurchasePage {

    constructor() {
    this.closeModal = 'Thank you'
    this.textModal =  "[role='progressbar']"
    this.buttonLogout = '#logout'
        
    }

    exitModal() {
        cy.contains(this.closeModal).click()
    }

    verificarTextModal() {
        cy.get(this.textModal, {timeout:10000}).should("not.exist")
    }

     verificarUsuarioNombre(usuario){
          cy.contains(usuario).should('contain' ,usuario);
     }

    verificarPrenda(prenda){
        cy.contains(prenda).should('contain' ,prenda);
    }

    verificarTarjeta(cardNumber){
        cy.contains(cardNumber).should('contain' ,cardNumber);
    }

    verificarTotalDePrecios(precioTotal){
        cy.contains(precioTotal).should('contain',precioTotal);
     }

     logout() {
        cy.get(this.buttonLogout).click()
    }
}