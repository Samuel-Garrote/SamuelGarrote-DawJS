

const dato = document.getElementById("dato")
const botonGuardar = document.getElementById("guardar")
const respuesta = document.getElementById("salida")

let listaDatos = [];
dato.addEventListener("input", function(){
    let input = dato.value;
    
    if (isNaN(input) || input === "") {
        respuesta.textContent = "Valor inválido";
        respuesta.style.color = "red";
    } else {
        respuesta.textContent = input;
        respuesta.style.color = "green";
    }


})
botonGuardar.addEventListener("click", function(){
    
    const valor = dato.value
    listaDatos.push(valor)
    localStorage.setItem("nota", JSON.stringify(listaDatos))
    let listaGuardada = JSON.parse(localStorage.getItem("nota"))
    const contenedor = document.getElementById("contenedor")

    contenedor.innerHTML = "";
    listaDatos.forEach((dato)=>{
    let elemento = document.createElement("li")
    elemento.textContent = dato;
    contenedor.appendChild(elemento)
    })
    
})

