import { bandaServices } from "../service/bandas-servicios.js";


const pagoBanda = async () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id"); //Extraccion ID de la URL

    if (id === null) {
        console.log("Hubo error al momento de buscar el producto")
        return;
    }

    //Traemos la informacion del producto que fue clickado
    try {
        const banda = await bandaServices.detalleBanda(id);
        //Validamos que ese ID tenga informacion
        if (banda.name && banda.categoria && banda.imageBanner && banda.date && banda.ubicacion) {
            //Contenido de la informacion
            const infoBanda = document.querySelector("[data-pago]");

            const contenido = `
            <div>
                <img src="${banda.imageBanner}" class="img-fluid" alt="Banner imagen banda de rock">
            </div>
            <div class="container mb-3 mt-3 border border-0">
                <div class="row g-0">
                    <div class="col-md-12 text-start">
                        <div class="card-body">
                            <h2 class="card-title py-3 text-danger">Categoría: ${banda.categoria}</h2>
                            <p class="card-text">Nombre de la Banda: ${banda.name} </p>
                            <p class="card-text">Dia y horario: ${banda.date}</p>
                            <p class="card-text">Ubicación: ${banda.ubicacion}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
            //Pasamos los detalles del producto
            infoBanda.innerHTML = contenido;

        } else {
            throw new error();
        }
    } catch (error) {
        console.log("catch error", error);
    }


}
pagoBanda();

