/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
document.addEventListener("DOMContentLoaded", function() {
        
    // Obtener el icono del usuario
var iconoUsuario = document.getElementById('user');

// Obtener el modal
var modal = document.getElementById('miModal');

// Obtener el elemento para cerrar el modal
var spanCerrar = document.getElementsByClassName("cerrar-modal")[0];

// Función para abrir el modal
function abrirModal() {
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Abrir el modal cuando se haga clic en el icono del usuario
iconoUsuario.onclick = abrirModal;

// Cerrar el modal cuando se hace clic en el botón de cerrar
spanCerrar.onclick = cerrarModal;

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }

}

function redirigirAMenu() {
            window.location.href = "menu.html"; 
        }

});
function zoomIn(image) {
    image.style.transform = "scale(1.1)";
}

// Función para restaurar el tamaño original de la imagen al quitar el mouse de ella
function zoomOut(image) {
    image.style.transform = "scale(1)";
}
function openModal(rutaImagen) {
    // Obtener la referencia del modal y la imagen dentro de él
    var modal = document.getElementById("miModal");
    var img = document.getElementById("imagenModal");
    // Asignar la ruta de la imagen al src de la imagen modal
    img.src = rutaImagen;
    // Mostrar el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    // Obtener la referencia del modal
    var modal = document.getElementById("miModal");
    // Ocultar el modal
    modal.style.display = "none";
}