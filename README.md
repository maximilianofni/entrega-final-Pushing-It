## entrega-final-Pushing-It

### ejecutar el comando "npm install" primero antes correr el testcase , se visualiza que se creara la carpeta "node_modules"

# Requisitos

- Deberan utilizar el mismo proyecto que utilizaron para la pre-entrega o un proyecto creado desde cero.
- Deberá contar con una baseURL 
- Deberá poder iniciarse colocando "npm test" 
- Deberán utilizar fixtures
- Deberán utilizar hooks como minimo before y beforeEach 
- Deberán utilizar una clase diferente para cada pagina que utilicen 
- Deberán entregarlo en un repositorio de github. 
- El login y el registro debe ser utilizando endpoints (cy.request) 
- Deberán eliminar el usuario creado una vez finalizado el test

# Test

- Crear el usuario e ingresar al sistema mediante requests 
- Visitar la pagina de pushing IT. 
- Dirigirse al modulo "Online Shop". 
- Elegir 2 productos a elección y añadirlos al carrito. 
- Verificar el nombre y precio de los dos productos. 
- Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos. 
- Completar el checkout con sus nombres apellido y una tarjeta de credito de 16 digitos
- Verificar los siguientes datos en el ticket de compra (Nombre y apellido, productos, tarjeta de crédito, costo total)

#Informaciön importante

- Todo deberá ser realizado en un único archivo en una única instancia de test (un único it) 
- En un archivo fixture deberán colocar el producto que quieren elegir con su precio y su nombre para luego utilizarlo para comprobar nombre y precio en el carrito de compras 
- En total serán 3 fixtures
   
       1. fixture para el registro y login (usuario y contraseña.)
       2. fixture para los productos a elegir (nombre y precio). 
       3. fixture para el checkout (nombre, apellido, tarjeta de credito) 
 - En total deberán usar 5 páginas (Home, products, shoppingCart, checkOut, ticket)
 - Para poder guardar los datos del login en el sistema deberan utilizar el metodo "window.localStorage.setItem()". En el deberan guardar tanto el "token" como el "user". ambos deben obtenerlos de la peticion al hacer el login
