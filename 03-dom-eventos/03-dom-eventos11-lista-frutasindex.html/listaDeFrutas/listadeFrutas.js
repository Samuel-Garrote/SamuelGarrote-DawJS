

const input = document.getElementById("entrada")
const salida = document.getElementById("salida")

const quitarFruta = document.getElementById("quitaFruta")

input.addEventListener("input", function(){
    mostrarTexto(input.value);
})


function mostrarTexto(texto){
if(texto===""){
    salida.textContent= texto;
    salida.style.color = "blue";

}
}

let texto = input.value
for(let i = 0; i < texto.length; i++){
    if(texto ===" " || !isNaN(texto)){
        salida.textContent = "No debes escribir espacios ni numeros"
        salida.style.color="red"
    }else{
        salida.textContent = texto;
    salida.style.color= "gray"
    break;
    }
}

salida.textContent = "Tu texto se escribirá aqui"
salida.style.color = "gray"
salida.textContent = input.value


agregarFruta.addEventListener("click", function(){
añadirFruta(input.value);
})

function añadirFruta(texto){
    if(texto !==""){
        const listaContenedor = document.getElementById("listaContenedor")
const elemento = document.createElement("li")
listaContenedor.appendChild(elemento)
elemento.textContent = texto;
input.value = "";
    }else{
        salida.textContent = "El espacio, está vacio, no puedes añadir nada"
    }
}

function quitarFruta(){
    const listaContenedor = document.getElementById("listaContenedor")
    if(listaContenedor.lastElementChild){
        listaContenedor.removeChild(listaContenedor.lastElementChild)
    salida.textContent = "Has borrado el ultimo elemento "
    salida.style.color="green"
    return;}else{
        salida.textContent = "No hay mas elementos que borrar"
    }
}

