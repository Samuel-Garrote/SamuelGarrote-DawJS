const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")

entrada.addEventListener("input", function(){
    mostrarEntrada(entrada.value)
})

function mostrarEntrada(entradatexto){

let i = 0;
while(i<entradatexto.length){
    if(!isNaN(entradatexto[i])){
        salida.textContent = "No se permiten numeros"
        salida.style.color = "red"
        return
    }
    i++;
}

if(entradatexto === ""){
    salida.textContent = "Aquí saldrá tu texto";
    salida.style.color = "gray"

}else{
    salida.textContent = entradatexto;
    salida.style.color = "blue"
}
}