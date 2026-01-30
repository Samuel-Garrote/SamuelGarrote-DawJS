const respuestaDiv = document.getElementById("respuesta")
const botonCargar = document.getElementById("cargar")
            const contenedorDiv= document.getElementById("contenedor")


botonCargar.addEventListener("click", function(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(usuarios=>
        usuarios.forEach(usuario=>{
            
            const li = document.createElement("li")
            
            li.textContent = usuario.name
            contenedorDiv.appendChild(li)
            
        })
        
    )
    .catch(error=>console.error("Ha ocurrido un error", error))
})