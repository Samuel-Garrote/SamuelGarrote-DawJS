fetch("https://jsonplaceholder.typicode.com/users")
.then(respuesta => respuesta.json())
.then(usuarios => console.log(usuarios))
.catch(error => console.error("Ocurrió un error:", error));