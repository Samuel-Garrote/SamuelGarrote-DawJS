const express = require("express");
const app = express();

app.get("/", (peticion, respuesta)=>{
    respuesta.send("Hola express");
})

app.listen(3000, ()=>{
    console.log("Servidor express en http://localhost:3000")
})