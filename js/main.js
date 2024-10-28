console.log("Hola Mundo!!!");
fetch('resources/productos.json').then((response)=>response.json()).then((data)=>console.log(data));