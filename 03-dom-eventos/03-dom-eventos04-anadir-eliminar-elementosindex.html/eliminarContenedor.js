
const contenedorPrincipal = document.getElementById('contenedorPrincipal');
const botonEliminar = document.getElementById('eliminarContenedor');
const botonAñadir = document.getElementById('añadirContenedor');
const mensaje = document.getElementById('mensaje');

let contador = 0;

botonEliminar.addEventListener("click", function (){
    if(contenedorPrincipal.lastElementChild){
        contenedorPrincipal.removeChild(contenedorPrincipal.lastElementChild);
    }
    contador++;
    mensaje.textContent = "Contenedores eliminados: " + contador;
})

let contadorAñadidos = 0;
botonAñadir.addEventListener("click", function (){
    const nuevoContenedor = document.createElement("div");
    nuevoContenedor.className = "nuevoContenedor";
    contadorAñadidos++;
    contenedorPrincipal.appendChild(nuevoContenedor);
    nuevoContenedor.textContent = "Contenedor Añadido numero:" + (contadorAñadidos);

})
