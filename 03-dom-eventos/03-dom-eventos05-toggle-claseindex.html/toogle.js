const texto = document.getElementById("texto")
const boton = document.getElementById("boton")
let colores = ["yellow", "red", "purple"]

function cambiarColor(){
    let colorRandom = colores[Math.floor(Math.random() * colores.length)]
    document.body.style.background = colorRandom
    texto.classList.toggle("nuevoColor")
}