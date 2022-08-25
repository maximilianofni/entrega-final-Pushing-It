export class RegisterPage {

    constructor() {
        this.iniciarSesionButton= "#registertoggle"
    }
    clicLogin(){
        cy.get(this.iniciarSesionButton).dblclick()
    };
}