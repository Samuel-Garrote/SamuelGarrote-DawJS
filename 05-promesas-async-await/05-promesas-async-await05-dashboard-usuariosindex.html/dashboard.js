const contenedorUsarios = document.getElementById("contenedorUsuarios")
const estado = document.getElementById("estado")

async function ponerUsuarios(){
estado.innerHTML = "Cargando..."
contenedorUsarios.innerHTML="";

try{
    await new Promise(resolve=>setTimeout(resolve, 3000))
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    
    let data = await respuesta.json()
    if(!respuesta.ok){
        throw new Error("Ha ocurrido un error")
    }

    data.forEach(usuario=>{
        let card = document.createElement("div")
        card.className="card"
        card.innerHTML = `
                <p><strong>${usuario.name}</strong></p>
                <p>Email: ${usuario.email}</p>
                <p>Tel: ${usuario.phone}</p>
            `
        
        contenedorUsarios.appendChild(card)
    })

    estado.textContent = "Éxito!"
    estado.style.color="green"
}catch(error){
    
    estado.textContent="Error!" + error.message;
    estado.style.color="red"
    
}
}

ponerUsuarios()