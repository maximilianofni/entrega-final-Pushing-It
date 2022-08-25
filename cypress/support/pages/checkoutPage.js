export class CheckoutPage {

constructor() {
    this.firstNameInput= "#FirstName";
    this.lastNameInput = "#lastName";
    this.cardNumberInput = "#cardNumber";
    this.purchaseButton = "Purchase";
     
}
escribirNombre(firstName){
    cy.get(this.firstNameInput).type(firstName);
};

escribirApellido(lastName){
    cy.get(this.lastNameInput).type(lastName);
};

escribirNumerosDeTarjeta(cardNumber){
    cy.get(this.cardNumberInput).type(cardNumber);
};

clickPurchaseBoton(){
    cy.get('button').contains('Purchase').click();
};


}