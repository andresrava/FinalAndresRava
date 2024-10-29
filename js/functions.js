function filterBy(key) {
    return function(lista) {
        return lista.filter(element => element[key] === true);
    }
}

function renderizaCards (lista) {
    let salida = "";
    for (const element of lista) {
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
}

