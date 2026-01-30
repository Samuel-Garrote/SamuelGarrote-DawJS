const boton = document.getElementById("cambiarColor")
const colores = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "brown", "gray", "cyan"];

//Funcion para cambiar el color de fondo
function cambiarColorFondo() {
const colorAleatorio = colores[Math.floor(Math.random() *colores.length)];
document.body.style.backgroundColor = colorAleatorio;
}

//Evento click

boton.addEventListener("click" , cambiarColorFondo)