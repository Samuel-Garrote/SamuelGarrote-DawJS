const http = require("http")

const server = http.createServer((peticion, respuesta)=>{

    respuesta.writeHead(200, {"content-type": "text/html"})
    respuesta.write("Hola querido amigo, el servidor esta funcionando!!")

    respuesta.end()
})

server.listen(3000, ()=>{
    console.log("servidor funcionando en http://localhost:3000")
})