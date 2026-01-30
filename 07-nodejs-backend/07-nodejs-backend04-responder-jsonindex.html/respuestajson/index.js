const express = require("express")
const app = express();

app.get("/", (peticion, respuesta)=>{
    respuesta.json({
        mensaje: "Hola desde la API",
        estado: "ok",
    })
})

app.listen(3000, ()=>{
    console.log('Servidor Express en http://localhost:3000');
})