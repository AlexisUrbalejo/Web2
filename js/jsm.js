




function zoomIn(image) {
image.style.transform = "scale(1.1)";
}

// Función para restaurar el tamaño original de la imagen al quitar el mouse de ella
function zoomOut(image) {

image.style.transform = "scale(1)";
}
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imágenes del menú
    var menuImages = document.querySelectorAll(".img-box img");

    // Obtener el modal y el elemento para mostrar la imagen
    var modal = document.getElementById('miModal');
    var modalImage = document.getElementById('imagenModal');

    // Función para abrir el modal
    function abrirModal(imageSrc, title, description) {
        console.log("Abriendo modal");
        modalImage.src = imageSrc;
        modalTitle.textContent = title; // Establecer el título del modal
        modalDescription.textContent = description; // Establecer la descripción del modal
        modal.style.display = "block";
    }
    

    // Asignar evento de clic a cada imagen del menú
    menuImages.forEach(function(image) {
        image.addEventListener("click", function() {
            var imageSrc = this.src; // Obtener la ruta de la imagen
            abrirModal(imageSrc); // Abrir el modal con la imagen correspondiente
        });
    });

    // Obtener el elemento para cerrar el modal
    var spanCerrar = document.getElementsByClassName("cerrar-modal")[0];

    function cerrarModal() {
        modal.style.display = "none"; // Ocultar el modal
        modalImage.src = ""; // Limpiar la imagen del modal
    }

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    spanCerrar.onclick = cerrarModal;

    // Cerrar el modal cuando se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }

    // Obtener el elemento para cerrar el modal
var botonCerrar = document.getElementsByClassName("cerrar-modal")[0];

// Función para cerrar el modal cuando se hace clic en el botón de cierre
botonCerrar.onclick = cerrarModal;

});


