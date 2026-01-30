async function esperarTresSegundos(){
    setTimeout(()=>{}, 3000)
}

async function cargando(){
    console.log("Cargando...")
    await esperarTresSegundos()
    console.log("Cargado correctamente. ")
}

cargando();