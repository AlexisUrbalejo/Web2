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

var imagenes = document.querySelectorAll('.scroll-container img');
var index = 0;

// Función para mostrar la siguiente imagen
function mostrarSiguienteImagen() {
    imagenes[index].style.display = 'none';
    index = (index + 1) % imagenes.length;
    imagenes[index].style.display = 'block';
}

// Establece un intervalo para cambiar las imágenes automáticamente
var intervalo = setInterval(mostrarSiguienteImagen, 3000); // Cambia cada 3 segundos

// Detiene el intervalo al pasar el mouse sobre las imágenes
document.querySelector('.scroll-container').addEventListener('mouseenter', function() {
    clearInterval(intervalo);
});

// Reinicia el intervalo al quitar el mouse de las imágenes
document.querySelector('.scroll-container').addEventListener('mouseleave', function() {
    intervalo = setInterval(mostrarSiguienteImagen, 3000);
});