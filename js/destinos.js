let productos = JSON.parse(localStorage.getItem('productos'));
console.log('Hola Mundo!!');
console.log(productos);
let filterByDestino = filterBy('destinos');
const destinos = filterByDestino(productos);
console.log(destinos);
let destinosHtml = renderizaCards(destinos);
let destinosCards = document.getElementsByClassName("carousel-inner");
destinosCards = destinosHtml;