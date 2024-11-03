//Esta función quenera una función que filtra la lista de productos según tengan en "true" la propiedad "key"
function filterBy(key) {
    return function(lista) {
        return lista.filter(element => element[key] === true);
    }
}

//Esta función genera una lista con las "cards" para agregar a un carousel en el DOM
function renderizaCardsCarousel (lista) {
    let salida = "";
    let indice = 1;
    for (const element of lista) {
        console.log(element.nombre);
        if (salida.length == 0) {
            salida = `<div class="carousel-item active">
                        <div class="card" >
                               <img src="${element.image}" class="card-img-top" alt="${element.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${element.encabezado}</h5>
                              <p class="card-text">${element.descripción}</p>
                              <a href="" class="btn btn-primary" id="${"elemento" + indice}" >Agrega al carrito</a>
                            </div>
                        </div>
                      </div>`
        } else {
            salida += `<div class="carousel-item">
                            <div class="card" >
                                   <img src="${element.image}" class="card-img-top" alt="${element.nombre}">
                                <div class="card-body">
                                  <h5 class="card-title">${element.encabezado}</h5>
                                  <p class="card-text">${element.descripción}</p>
                                  <a href="" class="btn btn-primary" id="${"elemento" + indice}" >Agrega al carrito</a>
                                </div>
                            </div>
                          </div>`
        }
        indice += 1;
    }
    console.log("Salida(función): " + salida);
    return salida;
}

function renderizaCardsLista (lista) {
  let salida = "";
  let indice = 1;
  for (const element of lista) {
      salida += `       <div class="card" >
                                <img src="${element.image}" class="card-img-top" alt="${element.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${element.encabezado}</h5>
                              <p class="card-text">${element.descripción}</p>
                              <a href="" class="btn btn-primary" id="${"elemento" + indice}" >Agrega al carrito</a>
                            </div>
                            `
      indice +=1;
  }
  return salida;
}

function agregaAlCarrito(producto) {
  let cantidad = null;
  while (true)   {
    cantidad = prompt("¿Cuántas personas?");
    if (isNaN(cuotas)) {
        //Valido
        alert("Por favor, ingrese solo números!")
    }
    else {
        break
    }
  }
  let carrito = localStorage.getItem(JSON.parse(carrito));
  nombre = producto.nombre;
  if (carrito) {
    
    let compra = carrito[nombre];
    compra += cantidad;
    carrito[nombre] = compra;
    localStorage.setItem(carrito, carrito);
  }
  else {
    let carrito = {nombre: cantidad};
    localStorage.setItem(carrito, carrito);
  }
  carrito = localStorage.getItem(JSON.parse(carrito));
  console.log("El carrito es: " + carrito);
}


function activaBotones(lista) {
  console.log("La lista es: " + lista);
  for (let i = 1; i <= lista.length; i++) {
      let clave = "elemento"
      clave = clave.concat(i);
      let boton = document.getElementById(clave);
      boton.addEventListener("click", () => {
          agregaAlCarrito(lista[i-1]);
      })
  }
}

