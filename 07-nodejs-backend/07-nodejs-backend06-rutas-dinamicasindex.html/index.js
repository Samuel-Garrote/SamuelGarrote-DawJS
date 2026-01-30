const express = require("express")
const app = express();

app.use((peticion, respuesta, next)=>{
    console.log("Peticion recibida")
    console.log("Ruta:" + peticion.url)
    console.log("Metodo:" + peticion.method)
    next();
})

app.get("/usuario/:id", (peticion, respuesta)=>{
    let id = peticion.params.id//Capturamos el parametro
    respuesta.json({mensaje: `Has pedido informacion por el usuario ${id}`, ok:true})
})
app.get("/usuario", (peticion, respuesta)=>{
    let id = peticion.params.id//Capturamos el parametro
    respuesta.json({mensaje: "Esta es la ruta de usuario", ok:true})
})

app.get("/", (peticion, respuesta)=>{
    respuesta.json({mensaje: "Esta es la ruta principal"})
})

app.listen(3000, ()=>{console.log("El servidor express esta en http://localhost:3000")})