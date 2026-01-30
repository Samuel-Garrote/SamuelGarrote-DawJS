const express = require("express");
const app = express();
const PORT = 3000

app.use(express.json())
app.use((peticion, respuesta, next)=>{
    console.log("¡Peticion recibida!")
    console.log("Ruta:", peticion.url)
    console.log("Método:", peticion.method)

    next()
})

app.get("/", (peticion, respuesta)=>{
    respuesta.json({mensaje: 'Esta es la ruta principal'})
})
app.post("/tarea/:tipo", (peticion, respuesta)=>{
    const tipo = peticion.params.tipo
    const titulo = peticion.body.titulo
    const urgente = peticion.query.urgente
    respuesta.json({titulo: titulo,
        tipo: tipo,
        urgente: urgente === "true"
    })
})

app.listen(PORT, ()=>{
    console.log("El puerto es: http://localhost:3000")
})

