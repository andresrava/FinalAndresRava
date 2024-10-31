//Esta función quenera una función que filtra la lista de productos según tengan en "true" la propiedad "key"
function filterBy(key) {
    return function(lista) {
        return lista.filter(element => element[key] === true);
    }
}

//Esta función genera una lista con las "cards" para agregar a un carousel en el DOM
function renderizaCardsCarousel (lista) {
    let salida = "";
    for (const element of lista) {
        console.log(element.nombre);
        if (salida.length == 0) {
            salida = `<div class="carousel-item active">
                        <div class="card" >
                               <img src="${element.image}" class="card-img-top" alt="${element.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${element.encabezado}</h5>
                              <p class="card-text">${element.descripción}</p>
                              <a href="./onprogress.html" class="btn btn-primary">Allá voy!</a>
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
                                  <a href="./onprogress.html" class="btn btn-primary">Allá voy!</a>
                                </div>
                            </div>
                          </div>`
        }
    }
    console.log("Salida(función): " + salida);
    return salida;
}

function renderizaCardsLista (lista) {
  let salida = "";
  for (const element of lista) {
      salida += `       <div class="card" >
                                <img src="${element.image}" class="card-img-top" alt="${element.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${element.encabezado}</h5>
                              <p class="card-text">${element.descripción}</p>
                              <a href="./onprogress.html" class="btn btn-primary">Allá voy!</a>
                            </div>
                            `
  
  }
  return salida;
}
