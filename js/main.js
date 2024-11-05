console.log("Hola Mundo!!!");
let listaProductos = [];
fetch('resources/productos.json')
    .then((response)=>response.json())
    .then((data)=> {
        listaProductos = data;
        localStorage.setItem('productos', JSON.stringify(listaProductos));
        console.log('Productos guardados en localStorage:', listaProductos);
    })
    .catch((error) => console.log('Error cargando los productos: ', error));

 
let carritoHtml = renderizaCarrito();
let carritoPH = document.getElementById("carrito");
carritoPH.innerHTML = carritoHtml;  