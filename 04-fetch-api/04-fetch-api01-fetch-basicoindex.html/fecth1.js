const btnCargarUsuarios = document.getElementById("cargar");

btnCargarUsuarios.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuestaAPI => respuestaAPI.json())
    .then(usuarios => {
        console.log("Usuarios traídos del API:");
        console.log(usuarios);
        const nombresUsuarios = usuarios.map(usuario => usuario.name);
        console.log("Solo nombres:");
        console.log(nombresUsuarios);
    })
    .catch(error => {
        console.error("Ocurrió un error al traer los usuarios", error);
    });
});
