document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones "Ver detalle"
    const botonesVerDetalle = document.querySelectorAll('.ver-detalle');

    botonesVerDetalle.forEach(boton => {
        boton.addEventListener('click', (event) => {
            // Evitar el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtén el ID de la banda desde el atributo data-id del botón
            const id = boton.getAttribute('data-id');

            // Redirige a la página de detalles con el ID en la URL
            window.location.href = `detalle.html?id=${id}`;
        });
    });
});


