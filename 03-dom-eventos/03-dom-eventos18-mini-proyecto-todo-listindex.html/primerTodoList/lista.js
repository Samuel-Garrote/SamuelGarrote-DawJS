const input = document.getElementById("input")
const botonGuardar = document.getElementById("guardar")
const respuesta = document.getElementById("respuesta")

let listaNotas = [{contenido: "Ejemplo", hecho: false}

];

botonGuardar.addEventListener("click", function(){

    const nota = input.value
    listaNotas.push({contenido: nota, hecho: false})
    //Guardado desde dentro
    localStorage.setItem("nota", JSON.stringify(listaNotas))
    respuesta.textContent = "El contenido ha sido guardado con éxito."
    respuesta.style.color="green"
    
    const ul = document.getElementById("contenedor")
    ul.textContent = "";
    listaNotas.forEach((notilla)=>{
        
        let botonHecho = document.createElement("button")
        botonHecho.textContent = "Hecho/No Hecho"
        let li = document.createElement("li")
        
        li.textContent = notilla.contenido;
        li.appendChild(botonHecho)
        ul.appendChild(li)

        botonHecho.addEventListener("click", function(){
            if(li.style.textDecoration !== "line-through" && notilla.hecho === false){
            notilla.hecho = !notilla.hecho;
            li.style.textDecoration = "line-through"
            respuesta.textContent = "Respuesta tachada correctamente"
            return;
            }else{
                li.style.textDecoration = "none"
                respuesta.textContent = "Respuesta des-tachada correctamente"
                return;
            }
            localStorage.setItem("nota", JSON.stringify(listaNotas))
        }
    )
    })

})