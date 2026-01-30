//importar modulo HTTP


const http = require("http")

const server = http.createServer((peticion, respuesta)=>{//Cabezera HTTP, CON ESTATUS 200 Y EL TIPO DE CONTENIDO HTML
    respuesta.writeHead(200, {"content-type": "text/html"})
    // Contenido HTML que se mostrará en el navegador

    res.write('<h1>Hola mundo desde Node!</h1>');

    //Finalizar respuesta

    respuesta.end();

})

//Servidor escucha en el puerto 3000

server.listen(3000, ()=>{
    console.log("Servidor funcionando en el http://localhost:3000")
})