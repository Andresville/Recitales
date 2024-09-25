(function () {
    'use strict';
    // Obtener el formulario
    var form = document.getElementById('miFormulario');

    // Agregar un evento al enviar el formulario
    form.addEventListener('submit', function (event) {
        // Evitar el envío del formulario si no es válido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Agregar o eliminar la clase de validación
        form.classList.add('was-validated');
    }, false);
})();