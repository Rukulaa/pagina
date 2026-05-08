function saludar() {
    alert("Hola Rochi 👋 Bienvenida ");
}

function despedir() {
    alert("Chau Rochi, gracias por pasar por mi pagina ");
}

function mostrarSeccion(id) {

    /* BUSCA TODAS LAS SECCIONES */
    const secciones = document.querySelectorAll(".seccion");

    /* OCULTA TODAS */
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    /* MUESTRA SOLO LA QUE CLICKEASTE */
    document.getElementById(id).style.display = "block";
}

/* SECCION QUE SE VE AL ABRIR LA PAGINA */

mostrarSeccion('inicio');
