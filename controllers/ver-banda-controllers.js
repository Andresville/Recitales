import { bandaServices } from "../service/bandas-servicios.js";


const obtenerInformacion = async () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id"); //Extraccion ID de la URL
  
    if(id === null){
      console.log("Hubo error al momento de buscar el producto")
      return;
    }
  
    //Traemos la informacion del producto que fue clickado
    try{
      const banda = await bandaServices.detalleBanda(id);
      //Validamos que ese ID tenga informacion
      if(banda.name && banda.categoria && banda.imageBanner && banda.imageEstadio && banda.date && banda.ubicacion && banda.price1 && banda.price2 && banda.price3 && banda.price4 && banda.price5 && banda.descripcion ){
        //Contenido de la informacion
        const infoBanda = document.querySelector("[data-banda]");
  
        const contenido = `
          <div>
        <img src="${banda.imageBanner}" class="d-block w-100" alt="Banner imagen banda de rock">
    </div>
    <div class="container mb-3 mt-3 border border-0">
        <div class="row g-0">
            <div class="col-md-12 text-start">
                <div class="card-body">
                    <h2 class="card-title py-3 text-danger">Categoría: ${banda.categoria}</h2>
                    <p class="card-text">Nombre de la Banda: ${banda.name} </p>
                    <p class="card-text">Dia y horario: ${banda.date}</p>
                    <p class="card-text">Ubicación: ${banda.ubicacion}</p>
                    <p class="card-text">${banda.descripcion}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container card mb-3 mt-5 border border-0">
        <div class="row g-0">
            <div class="col-md-6">
                <img src="${banda.imageEstadio}" class="img-fluid rounded-start"
                    alt="Imagen del los lugares disponibles en el estadio">
            </div>
            <div class="col-md-6 text-center">
                <div class="card-body">
                    <h2 class="card-title pt-5 text-danger">Valores de las entradas:</h2>
                    <p class="card-text">Campo VIP: ${banda.price1}</p>
                    <p class="card-text">Platea Preferencial: ${banda.price2}</p>
                    <p class="card-text">Platea: ${banda.price3}</p>
                    <p class="card-text">Platea Alta: ${banda.price4}</p>
                    <p class="card-text">Campo - General: ${banda.price5}</p>
                    <div class="d-grid gap-2 col-6 mx-auto pt-md-5">
                        <a class="btn btn-success opacity-75" type="button" href="../pagos.html?id=${id}">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        //Pasamos los detalles del producto
        infoBanda.innerHTML = contenido;

      }else{
        throw new error();
      }
    }catch(error){
      console.log("catch error", error);
    }
  
    
  } 
  obtenerInformacion();
  
