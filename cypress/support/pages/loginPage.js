/// <reference types="cypress" />

export class LoginPage {

    constructor() {
        this.userInput = "#user";
        this.passwordInput = "#pass";
        this.loginButton = "#submitForm";
    }
    escribirUsuario(usuario){
        cy.get(this.userInput).type(usuario);
    };

    escribirPassword(password) {
        cy.get(this.passwordInput).type(password)
    };

    clickLoginBoton(){
        cy.get(this.loginButton).click();
    };
}