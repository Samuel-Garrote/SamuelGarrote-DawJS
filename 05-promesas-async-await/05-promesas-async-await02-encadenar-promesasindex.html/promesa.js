function pasoUno(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Paso 1 completado")
        }, 2000)}
    )
}

function pasoDos(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Paso 2 completado")
        }, 2000)
    })
}

pasoUno()
.then(() => pasoDos())
.then(()=>console.log("Has llegado al final"))