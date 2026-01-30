
const botonIncremento = document.getElementById("incrementar")
const contador = document.getElementById("contador")
const botonDecremento = document.getElementById("decrementar")
let valor = 0;
botonIncremento.addEventListener("click", function (){
    valor++;
    contador.textContent = valor;
})
botonDecremento.addEventListener("click", function (){
    valor--;
    contador.textContent = valor;
})