let listaProductos = [];
fetch('resources/productos.json')
    .then((response)=>response.json())
    .then((data)=> {
        listaProductos = data;
        localStorage.setItem('productos', JSON.stringify(listaProductos));
    })
    .catch((error) => console.log('Error cargando los productos: ', error));

 
let carritoHtml = renderizaCarrito();
let carritoPH = document.getElementById("carrito");
carritoPH.innerHTML = carritoHtml;  
activaBotonesCarrito();