
const filtrar = () => {
  // validar que los campos no esten vacios
  // guardar valores en variables
  const cantidadDeCuartos = document.querySelector('#cuartos').value;
  const minMetros = document.querySelector('#min').value;
  const maxMetros = document.querySelector('#max').value;
  if (cantidadDeCuartos == "" || minMetros == "" || maxMetros == "") {
    alert("Faltan campos por llenar")
  }else{
    mostrarPropiedades(cantidadDeCuartos,minMetros,maxMetros)
  }
}

const mostrarPropiedades = (cant = "", min = "", max = "") => {
  let galeria = document.querySelector('.propiedades')
  let total = document.querySelector('#total')
  sum = 0
  galeria.innerHTML=""
  for (const propiedad of propiedadesJSON) {
    if(propiedad.rooms == cant && propiedad.m >= min && propiedad.m <= max || (cant == "" && min == "" && max == "")){
      sum += 1
      galeria.innerHTML += `
      <div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
      `      
    }  
  }
  total.innerHTML = sum
}

mostrarPropiedades()