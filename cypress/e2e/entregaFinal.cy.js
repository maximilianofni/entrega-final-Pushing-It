/// <reference types="cypress" />
import { HomePage } from "../support/pages/HomePage"
import { OnlineShopProducts } from "../support/pages/onlineShopProducts";
import { OnlineShopShoppingCart } from "../support/pages/onlineShopShoppingCart";
import { CheckoutPage } from "../support/pages/checkoutPage";
import { PurchasePage } from "../support/pages/PurchasePage";

describe("Desafio 5 Entrega Final", () => { 
  const user = "maxi197791";
  const pass = "Maxi77!";
  const gender = "male";
  const day = "12";
  const month = "08";
  const year = "1991";
  const url = "https://pushing-it-backend.herokuapp.com/api"
  let clothes;
  let checkoutData;
  const homePage = new HomePage();
  const onlineShopProducts = new OnlineShopProducts();
  const onlineShopShoppingCart = new OnlineShopShoppingCart();
  const checkoutPage = new CheckoutPage();
  const purchasePage = new PurchasePage();

  before("Deberia registrarse e ingresar sesion por api satisfactoriamente", () =>{
    cy.request({
        url: `${url}/register`,
        method: "POST",
        body: {
            username: user,
            password: pass,
            gender: gender,
            day: day,
            month: month,
            year: year,     
        }
    }).then((res) =>{
        expect(res.body.newUser.username).equal(user)
        expect(res.body.newUser.gender).equal(gender)
        expect(res.body.newUser.day).equal(day)
        expect(res.body.newUser.month).equal(month)
        expect(res.body.newUser.year).equal(year)
        expect(res.status).equal(200)
    }).then(({body}) => {

        cy.request({
            url: `${url}/login`,
            method: "POST",
            body: {
                username: body.newUser.username,
                password: pass,
            }
        }).then((res) =>{
            expect(res.body.user.username).equal(user)
            expect(res.body.user.gender).equal(gender)
            expect(res.body.user.day).equal(day)
            expect(res.body.user.month).equal(month)
            expect(res.body.user.year).equal(year)
            expect(res.status).equal(200)
            window.localStorage.setItem('token',res.body.token)
            window.localStorage.setItem('user', res.body.user.username)
        })
        
    })

    cy.fixture("clothes").then(data => {
      clothes = data
  })
  
  cy.fixture("checkoutData").then(data => {
    checkoutData = data
})

});

beforeEach("Deberia ingresar en la url de PUSHING IT ", () => {
  cy.visit("/");
});

it("Deberia seleccionar 3 prendas luego ir al carrito , mostrar 3 productos e ir checkout", () =>{
  homePage.clickoOnlineShopLink();
  onlineShopProducts.selectProduct(clothes.prendaUnoName);
  onlineShopProducts.exitAlert();
  onlineShopProducts.selectProduct(clothes.prendaDosName);
  onlineShopProducts.exitAlert();
  onlineShopProducts.selectProduct(clothes.prendaTresName);
  onlineShopProducts.exitAlert();
  onlineShopProducts.clickGoShoppingCart();
  onlineShopShoppingCart.verificarPrenda(clothes.prendaUnoName);
  onlineShopShoppingCart.verificarPrendaPrecio(clothes.prendaUnoName, clothes.prendaUnoPrice);
  onlineShopShoppingCart.verificarPrenda(clothes.prendaDosName);
  onlineShopShoppingCart.verificarPrendaPrecio(clothes.prendaDosName, clothes.prendaDosPrice);
  onlineShopShoppingCart.verificarPrenda(clothes.prendaTresName);
  onlineShopShoppingCart.verificarPrendaPrecio(clothes.prendaTresName, clothes.prendaTresPrice);
  onlineShopShoppingCart.clickShowtotalPrice()
  onlineShopShoppingCart.verificarTotalDePrecios(clothes.prendaUnoPrice + clothes.prendaDosPrice + clothes.prendaTresPrice)
  onlineShopShoppingCart.clickCheckout();
  checkoutPage.escribirNombre(checkoutData.firstName);
  checkoutPage.escribirApellido(checkoutData.lastName);
  checkoutPage.escribirNumerosDeTarjeta(checkoutData.cardNumber);
  checkoutPage.clickPurchaseBoton();
  purchasePage.verificarTextModal();
  purchasePage.verificarUsuarioNombre(checkoutData.firstName);
  purchasePage.verificarUsuarioNombre(checkoutData.lastName);
  purchasePage.verificarPrenda(clothes.prendaUnoName);
  purchasePage.verificarPrenda(clothes.prendaDosName);
  purchasePage.verificarPrenda(clothes.prendaTresName);
  purchasePage.verificarTarjeta(checkoutData.cardNumber);
  purchasePage.verificarTotalDePrecios(clothes.prendaUnoPrice + clothes.prendaDosPrice + clothes.prendaTresPrice)
  purchasePage.exitModal();
})

afterEach("Deberia eliminarse el usuario de la base de datos",() => {
     cy.request({
         url: `${url}/deleteuser/${user}`,
        method: "DELETE",
   }).then((res) =>{
      expect(res.status).equal(200)
 })
 purchasePage.logout();
     
})
  
});