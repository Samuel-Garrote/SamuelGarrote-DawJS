const boton = document.getElementById("cambiarTexto");
const parrafo = document.getElementById("parrafoOriginal");
const frases = [
    "¡El texto ha sido modificado!",
    "¡Has cambiado el texto con éxito!",
    "¡Texto actualizado correctamente!",
    "¡Modificación de texto realizada!",
    "¡El contenido del párrafo ha cambiado!"
];

//Funcion para cambiar el texto del parrafo
function modificarTexto() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    parrafo.textContent = fraseAleatoria;
}

//Evento click

boton.addEventListener("click" , modificarTexto)