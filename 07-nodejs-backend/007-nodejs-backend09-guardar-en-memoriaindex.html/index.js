const express = require("express")
const app = express();

app.use(express.json())

app.use((peticion, respuesta, siguiente)=>{
    console.log("Peticion recibida", peticion.url, peticion.method, peticion.body)
    siguiente()
})
//Con post creamos tareas
app.post("/tarea", (peticion, respuesta)=>{
    const {titulo, cuerpo} = peticion.body
    if(!titulo ||!cuerpo){
        return respuesta.status(400).json({mensaje:'Debe rellenar el titulo y el cuerpo correctamente', ok:false})
    }
    respuesta.json({mensaje: `Titulo:"${titulo}" creado`, ok:true})
})

app.get("/", (peticion, respuesta)=>{
    respuesta.json({mensaje: 'Esta es la ruta principal'})
})
app.get("/buscar/:id", (peticion, respuesta)=>{
    const id = peticion.params.id
    respuesta.json({mensaje: `Has pedido informacion por el usuario ${id}`, ok:true})
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000")
})