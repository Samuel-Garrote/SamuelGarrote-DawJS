

const inputPalabra = document.getElementById("inputPalabra")
const botonBuscar = document.getElementById("buscarPalabra")
const botonAñadir = document.getElementById("añadirPalabra")
const botonMostrar = document.getElementById("mostrarPalabra")
const respuesta = document.getElementById("respuesta")

let diccionario = [];

inputPalabra.addEventListener("input", function(){
    let valor = inputPalabra.value
    if(/\d/.test(valor) || /\s/.test(valor)|| valor.trim()=== ""){//d.test para decir si es un "numero", mas fiable que !isNa, s.test para espacios, trim() para espacios al inicio/final;
        respuesta.textContent = "La palabra no puede tener numero ni espacios"
        respuesta.style.color="red"
    }else{
        respuesta.textContent = valor;
        respuesta.style.color="orange"
    }
})

botonBuscar.addEventListener("click", function(){
    let palabra = inputPalabra.value.trim()
    if(diccionario.includes(palabra)){
        respuesta.textContent = palabra
        respuesta.style.color="green"
    }else{
        respuesta.textContent = "La palabra " + palabra + " no se encuentra en el diccionario"
        respuesta.style.color="red"
    }
})

botonAñadir.addEventListener("click", function(){
    let palabra = inputPalabra.value.trim()
    if(!diccionario.includes(palabra)){
        diccionario.push(palabra)
        respuesta.textContent = "La palabra " + palabra + " se ha añadido correctamente"
        return;
    }else{
        respuesta.textContent = "La palabra ya está en el diccionario"
        return;
    }
})

botonMostrar.addEventListener("click", function(){
    const contenedor = document.getElementById("contenedor")
    diccionario.forEach((palabra)=>{
            let elemento = document.createElement("li")
            elemento.textContent ="* " +  `${palabra}`
            contenedor.appendChild(elemento)
    })
})
