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
  let codigo = producto.id;
  while (true)   {
    cantidad = prompt("¿Cuántas personas?");
    if (isNaN(cantidad)) {
        //Valido
        alert("Por favor, ingrese solo números!")
    }
    else {
      cantidad = parseInt(cantidad);
      break
    }
  }
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito) {
    let compra = parseInt(carrito[codigo]);
    if (compra) {
      compra += cantidad;
      carrito[codigo] = compra;
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    else {
      carrito[codigo] = cantidad;
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }
  else {
    let carrito = {[codigo]: cantidad};
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  // carrito = localStorage.getItem('carrito');
}


function activaBotones(lista) {
  for (let i = 1; i <= lista.length; i++) {
      let clave = "elemento"
      clave = clave.concat(i);
      let boton = document.getElementById(clave);
      boton.addEventListener("click", () => {
          agregaAlCarrito(lista[i-1]);
      })
  }
}



function renderizaCarrito() {
  let salida = "";
  let total = 0;
  const productos = JSON.parse(localStorage.getItem('productos'));
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  if (carrito) {
    const compra = Object.keys(carrito);
    compra.forEach(element => {
      let nombre = productos[element-1].nombre;
      let codigo = productos[element-1].id;
      let precioUnitario = productos[element-1].precio;
      let cantidad = carrito[element];
      let importeParcial = cantidad * precioUnitario
      salida += `<div><a> Articulo: ${nombre} Cantidad: ${cantidad} Precio unitario: ${precioUnitario} ==> $ ${importeParcial}</a><button type="button" id="${"carrito" + codigo}" class="btn btn-success">Elimina</button></div>`
      total += importeParcial;
      localStorage.setItem('total', total);
    });
    salida += `<div><a> Total: ${total} <button type="button" class="btn btn-success" id="botonPagar">Pagar</button><button type="button" class="btn btn-success" id="borraCarrito">Borra el Carrito</button></div>`
  } else {
    salida = "Carrito vacío"
  }
  
  return salida;
}

function borraCarrito() {
  localStorage.removeItem("carrito");
  let carritoHtml = renderizaCarrito();
  let carritoPH = document.getElementById("carrito");
  carritoPH.innerHTML = carritoHtml;

}

function activaBotonesCarrito() {
  let boton = document.getElementById('borraCarrito');
  boton.addEventListener("click", () => {
    borraCarrito();
  })
  let botonPaga = document.getElementById('botonPagar');
  botonPaga.addEventListener("click", () => {
    factura();
  })
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  const compra = Object.keys(carrito);
  for (let i = 1; i <= compra.length; i++) {
    let clave = "carrito"
    clave = clave.concat(compra[i-1]);
    let boton = document.getElementById(clave);
    boton.addEventListener("click", () => {
        borraDelCarrito(compra[i-1]);
    })
  }
  
}


function borraDelCarrito(codigo) {
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  let cantidad = carrito[codigo];
  confirma = confirm("Actualmente hay " + cantidad + " unidades de este producto. " + "\n" + "¿Desea eliminarlas todas?");
  if (confirma) {
    delete carrito[codigo];
    localStorage.setItem('carrito', JSON.stringify(carrito))
  } else {
    while (true)   {
      cantidad = prompt("Ingrese la nueva cantidad:");
      if (isNaN(cantidad)) {
          //Valido
          alert("Por favor, ingrese solo números!")
      }
      else {
        cantidad = parseInt(cantidad);
        break
      }
    } 
    carrito[codigo] = cantidad;
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
  }
  let carritoHtml = renderizaCarrito();
  let carritoPH = document.getElementById("carrito");
  carritoPH.innerHTML = carritoHtml;
}


function calculaCuota (monto, cuotas) {
  let cuota = monto * 0.015 / (1-(1+0.015) ** (-cuotas));
  return cuota.toFixed(1);
}

function factura() {
  total = localStorage.getItem('total');
  continua = confirm("¿Pagas contado?");
  if (continua) {
      // Si paga contado se termina el programa
      alert("Muchas gracias por tu compra");
  }
  else {
      //Si no paga contado la pregunto en cuántas cuotas
      while (true)   {
          let cuotas = prompt("¿Cuántas cuotas mensuales? (la tasa anual es de 18%)");
          if (isNaN(cuotas)) {
              //Valido
              alert("Por favor, ingrese solo números!")
          }
          else {
              //Calculo las cuotas
              cuotas = parseInt(cuotas);
              let cuota = calculaCuota(total, cuotas) 
              //Informo           
              alert("Tu cuota será: " + cuota);
              break
          }
      } 
      
  }
  
}