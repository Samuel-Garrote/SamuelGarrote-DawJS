const express = require("express")
const app = express ();

app.use((peticion, respuesta, next)=>{
    console.log("Peticion:" , peticion.url ,  peticion.method)
    next();
})

app.get("/", (peticion, respuesta)=>{
    respuesta.json({mensaje: "Esta es la ruta principal", ok: true})
})

app.get("/buscar", (peticion, respuesta)=>{
    const {nombre} = peticion.query
    if(!nombre){
        return  respuesta.json({mensaje: "Debes escribir un nombre"})
    }
    respuesta.json({mensaje: `Buscando resultados para ${nombre}`})
})

app.listen(3000, ()=>{
console.log("El servidor es http://localhost:3000")
})