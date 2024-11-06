// Pido los productos
let productos = JSON.parse(localStorage.getItem('productos'));
// Creo la función que los filtra
let filterByPaquete = filterBy('paquetes');
// Los filtro
const paquetes = filterByPaquete(productos);
// Muestro los productos filtrados
let paquetesHtml = renderizaCardsLista(paquetes);
let paquetesCards = document.getElementById("carrusell");
paquetesCards.innerHTML = paquetesHtml;
activaBotones(paquetes);
// Muestro el carrito
let carritoHtml = renderizaCarrito();
let carritoPH = document.getElementById("carrito");
carritoPH.innerHTML = carritoHtml;
activaBotonesCarrito();