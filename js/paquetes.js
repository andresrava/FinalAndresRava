let productos = JSON.parse(localStorage.getItem('productos'));
let filterByPaquete = filterBy('paquetes');
const paquetes = filterByPaquete(productos);
let paquetesHtml = renderizaCardsLista(paquetes);
let paquetesCards = document.getElementById("carrusell");
paquetesCards.innerHTML = paquetesHtml;
activaBotones(paquetes);