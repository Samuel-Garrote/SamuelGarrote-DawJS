async function cargar(){
    try{
        const res = await obtenerDatos();
        console.log(res)
    }catch(error){
        console.log(error)
    }
}

cargar()

function obtenerDatos(){
    return new Promise((resolve, reject)=>{
        const ok = true
        setTimeout(()=>{
            if(ok){
                resolve("Datos correctos")
            }else{
                rejected("Datos incorrectos")
            }
        }, 2000)
    })
}
obtenerDatos()
.then(respuesta=> console.log(respuesta))
.catch(error=> console.error(error))

