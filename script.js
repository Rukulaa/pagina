function saludar() {
    alert("Hola Rochi 👋 Bienvenida ");
}

function despedir() {
    alert("Chau Rochi, gracias por pasar por mi pagina ");
}

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
