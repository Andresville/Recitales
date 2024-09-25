import { bandaServices } from "../service/bandas-servicios.js";

const pagoBanda = async () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id"); // Extracción ID de la URL

    if (id === null) {
        console.log("Hubo error al momento de buscar el producto");
        return;
    }

    // Traemos la información del producto que fue clicado
    try {
        const banda = await bandaServices.detalleBanda(id);
        // Validamos que ese ID tenga información
        if (banda.name && banda.categoria && banda.imageBanner && banda.date && banda.ubicacion) {
            // Contenido de la información
            const infoBanda = document.querySelector("[data-pago]");

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
                            <p class="card-text">Día y horario: ${banda.date}</p>
                            <p class="card-text">Ubicación: ${banda.ubicacion}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
            // Pasamos los detalles del producto
            infoBanda.innerHTML = contenido;
        } else {
            throw new Error("Información de la banda no válida");
        }
    } catch (error) {
        console.log("catch error", error);
    }
};

pagoBanda();

document.addEventListener('DOMContentLoaded', function() {
    // Maneja el evento de clic en el botón "Comprar"
    document.querySelector('.sweet-alert').addEventListener('click', function() {
        const form = document.querySelector('.needs-validation');
        
        // Validar el formulario
        if (form.checkValidity()) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "¿Quiere confirmar la compra?",
                text: "Esta a punto de confirmar la compra",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, comprar",
                cancelButtonText: "No, cancelar",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                    title: "Compra exitosa",
                    text: "Revise su correo para ver el número de ticket",
                    icon: "success"
                  });
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                  });
                }
              
            }).then((result) => {
                // Redirigir a pagos.html solo si el usuario hace clic en "Aceptar"
                if (result.isConfirmed) {
                    window.location.href = 'pagos.html'; // Cambia a tu URL de pagos
                }
            });
        } else {
            form.classList.add('was-validated'); // Añadir clase de validación si no es válido
        }
    });
});
