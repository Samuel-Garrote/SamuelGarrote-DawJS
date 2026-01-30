const entrada = document.getElementById("entrada")
const botonAgr = document.getElementById("botonAgregar")
const botonQuitar= document.getElementById("botonQuitar")
const salida = document.getElementById("salida")

entrada.addEventListener("input", function(){
    mostrarTexto(entrada.value)
    localStorage.setItem("nota",entrada.value )
    console.log(localStorage.getItem("nota"))
})
//validacion
function mostrarTexto(texto){
    if(texto === ""){
    salida.textContent = "Tu texto se verá aqui"
    salida.style.color = "gray"
    return;
}

    let i = 0;
    while(i < texto.length){
        if(!isNaN(texto[i]) || texto[i] === " "){
            salida.textContent = "No se puede poner un número o dejar espacios";
            salida.style.color = "red"
            return;
        }
        i++;
    }
    salida.textContent = texto
    salida.style.color = "blue"
    
}

botonAgr.addEventListener("click", function(){
    agregarBoton(entrada.value)
})

function agregarBoton(texto){
    if(texto !== ""){
    const contenedorLista = document.getElementById("listaDinamica")
    let nuevoItem = document.createElement("li")
    nuevoItem.textContent = texto
    contenedorLista.appendChild(nuevoItem)
    //limpiar texto
    entrada.value = ""
    }else{
        alert("No agregaste nada a la lista")
        return;
    }

}

botonQuitar.addEventListener("click", function(){
    quitarBoton()
})
function quitarBoton(){
    const contenedorLista = document.getElementById("listaDinamica")
    if(contenedorLista.lastElementChild){
        contenedorLista.removeChild(contenedorLista.lastElementChild)
        salida.textContent = "Tu ultima fruta ha sido borrada"
        salida.style.color = "green"
        return;
    }else{
        salida.textContent = "No se puede quitar mas"
        return;
    }
}

