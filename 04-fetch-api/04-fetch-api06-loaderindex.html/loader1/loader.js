const botonCargar = document.getElementById("cargarDatos")
const loader = document.getElementById("loader")
const respuestaDiv = document.getElementById("respuesta")
const containerDiv = document.getElementById("container")

botonCargar.addEventListener("click", function(){
    loader.style.display = "block"
    respuestaDiv.textContent = ""

    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta=>{
            if(!respuesta.ok){
                throw new Error("HTTP NO VÁLIDO, ESTAUS:" + respuesta.status)
            }
            return respuesta.json()
            
        }
        )
        .then(usuarios=>usuarios.forEach(usuario=>{

            let li = document.createElement("li")
            li.textContent = usuario.name
            containerDiv.appendChild(li)
        }))

        .catch(error=>{respuestaDiv.textContent = "Error!" + error
            respuestaDiv.style.color = "red"
        }
        )
        .finally(()=>{
            loader.style.display = "none"}
        )
    }, 500)
})