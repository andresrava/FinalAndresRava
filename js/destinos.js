let productos = JSON.parse(localStorage.getItem('productos'));
console.log('Hola Mundo!!');
console.log(productos);
let filterByDestino = filterBy('destinos');
const destinos = filterByDestino(productos);
console.log(destinos);
let destinosHtml = renderizaCardsCarousel(destinos);
console.log("DestinosHtml: " + destinosHtml);
let destinosCards = document.getElementById("carrusell");
destinosCards.innerHTML = destinosHtml;