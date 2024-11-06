// Pido los productos
let productos = JSON.parse(localStorage.getItem('productos'));
// Creo la función que los filtra
let filterByDestino = filterBy('destinos');
// Los filtro
const destinos = filterByDestino(productos);
// Muestro los productos filtrados
let destinosHtml = renderizaCardsCarousel(destinos);
let destinosCards = document.getElementById("carrusell");
destinosCards.innerHTML = destinosHtml;
activaBotones(destinos);
// Muestro el carrito
let carritoHtml = renderizaCarrito();
let carritoPH = document.getElementById("carrito");
carritoPH.innerHTML = carritoHtml;
activaBotonesCarrito();
