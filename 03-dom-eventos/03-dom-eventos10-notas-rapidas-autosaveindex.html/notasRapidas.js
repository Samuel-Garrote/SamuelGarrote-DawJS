const entrada = document.getElementById("inputTexto")
const salida = document.getElementById("salida")

entrada.addEventListener("input", function(){
mostrarEntrada(entrada.value)
localStorage.setItem("nota", entrada.value)
let datoGuardado = localStorage.getItem("nota")
console.log(datoGuardado)
})

function mostrarEntrada(texto){
let i = 0;
while(i < texto.length){
    if(!isNaN(texto[i]) || texto[i] === " "){
        salida.textContent = "No debes escribir espacios ni numeros"
        salida.style.color = "red"
        return;
    }
    i++;
}
if(texto === ""){
salida.textContent = "Aqui saldrá su texto..."
salida.style.color = "gray"
}else{
    salida.textContent = texto
    salida.style.color = "blue"
}
}

