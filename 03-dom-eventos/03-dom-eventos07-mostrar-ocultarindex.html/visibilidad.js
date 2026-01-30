const botonV = document.getElementById("btnV")
const botonI = document.getElementById("btnI")
const texto = document.getElementById("miDiv")

function mostrarTexto(){
        texto.style.display = "block"
}

function quitarTexto(){
        texto.style.display = "none"
}

function btnColor(){
let colores = ["yellow", "red", "blue"]
let colorAleatorio = colores[Math.floor(Math.random()*colores.length)]
document.body.style.background = colorAleatorio
}

