const input = document.getElementById("input")
const botonGuardar = document.getElementById("guardar")
const respuesta = document.getElementById("respuesta")
const ul = document.getElementById("contenedor")

// Cargar desde LocalStorage al inicio
let listaNotas = JSON.parse(localStorage.getItem("nota")) || [{contenido: "Ejemplo", hecho: false}];

function pintarLista() {
    ul.textContent = ""; // Limpiar lista
    listaNotas.forEach((notilla, index) => {
        let li = document.createElement("li")
        li.textContent = notilla.contenido;

        // Si ya estaba marcado como hecho
        if (notilla.hecho) li.style.textDecoration = "line-through";

        let botonHecho = document.createElement("button")
        botonHecho.textContent = "Hecho/No Hecho"
        botonHecho.style.marginLeft = "10px"
        botonHecho.style.padding = "5px 8px"
        botonHecho.style.border = "none"
        botonHecho.style.borderRadius = "5px"
        botonHecho.style.backgroundColor = "#2196f3"
        botonHecho.style.color = "white"
        botonHecho.style.cursor = "pointer"
        botonHecho.style.transition = "background 0.3s"

        botonHecho.addEventListener("mouseover", () => botonHecho.style.backgroundColor = "#1976d2")
        botonHecho.addEventListener("mouseout", () => botonHecho.style.backgroundColor = "#2196f3")

        botonHecho.addEventListener("click", function(){
            notilla.hecho = !notilla.hecho
            li.style.textDecoration = notilla.hecho ? "line-through" : "none"
            respuesta.textContent = notilla.hecho ? "Respuesta tachada correctamente" : "Respuesta des-tachada correctamente"
            localStorage.setItem("nota", JSON.stringify(listaNotas))
        })

        li.appendChild(botonHecho)
        ul.appendChild(li)
    })
}

// Inicializar la lista al cargar la página
pintarLista()

botonGuardar.addEventListener("click", function(){
    const nota = input.value.trim()
    if(!nota) return // Evita añadir notas vacías

    listaNotas.push({contenido: nota, hecho: false})
    localStorage.setItem("nota", JSON.stringify(listaNotas))
    respuesta.textContent = "El contenido ha sido guardado con éxito."
    respuesta.style.color = "green"
    input.value = "" // Limpiar input

    pintarLista()
})
