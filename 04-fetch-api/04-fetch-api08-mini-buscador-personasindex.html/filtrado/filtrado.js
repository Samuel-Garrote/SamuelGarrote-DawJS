const botonCargar= document.getElementById("cargar")
const botonFiltrar= document.getElementById("filtrar")
const respuesta= document.getElementById("respuesta")
const contenedorDiv= document.getElementById("contenedor")

botonCargar.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta=> respuesta.json())
    .then(usuarios=>usuarios.forEach(usuario=>{
        let li = document.createElement("li")
        li.textContent = usuario.name
        contenedor.appendChild(li)
        respuesta.textContent = "--------------PERSONAL------------"
    }))
})

botonFiltrar.addEventListener("click", function(){
        respuesta.textContent = "------------FILTRADOS CON EMPRESA--------------"
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta=>respuesta.json())
    .then(usuarios=>{let usuariosFiltrados = usuarios.filter(usuario=>{
        return usuario.company
    })

    contenedorDiv.innerHTML="";
    usuariosFiltrados.forEach(usuario=>{
        let li = document.createElement("li")
        li.textContent = usuario.name + " tiene compañia y es: " + usuario.company.name
        contenedor.appendChild(li)
    })

    }

    )
})