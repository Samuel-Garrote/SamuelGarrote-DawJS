const contenedor = document.getElementById("contenedor")
const boton = document.getElementById("botonContenedor")
contador = 1;

boton.addEventListener("click", function (){
    const nuevoElemento = document.createElement("div")
    nuevoElemento.className = "item"
    nuevoElemento.textContent = "Elemento" + contador;
    contenedor.appendChild(nuevoElemento);
    contador++;
})