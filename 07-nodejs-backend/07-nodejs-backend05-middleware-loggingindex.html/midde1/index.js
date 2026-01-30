const express = require("express");

const app = express();

//Middle se ejecuta desde cualquier ruta

app.use((peticion, respuesta, next)=>{
    console.log("Te ha llegado una peticion...")
    console.log("Ruta:"+ peticion.url)
    console.log("Método" + peticion.method)
    next()
})

app.get("/", (peticion, respuesta)=>{
    respuesta.json({mensaje: "Ruta principal", ok:true})
})
app.get("/usuarios", (peticion, respuesta)=>{
    respuesta.json({mensaje: "Ruta de usuarios", ok:true})
})

app.listen(3000, ()=>{
    console.log("servidor express en http://localhost:3000/")
})