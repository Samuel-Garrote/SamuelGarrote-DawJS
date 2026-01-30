const botonCargar = document.getElementById("cargar")
const loader = document.getElementById("cargando")
const loaderError = document.getElementById("error")
const loaderExito = document.getElementById("exito")
const respuestaDiv = document.getElementById("respuesta")
const contenedorDiv = document.getElementById("contenedor")

botonCargar.addEventListener("click", function(){
    loader.style.display = "block";
    loaderError.style.display = "none";
    loaderExito.style.display = "none";
    respuestaDiv.textContent = "";
    contenedorDiv.innerHTML = "";

    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error("Se ha encontrado un problema con el HTTP " + respuesta.status);
                }
                return respuesta.json();
            })
            .then(usuarios => {
                usuarios.forEach(usuario => {
                    let li = document.createElement("li");
                    li.textContent =
                    "El número de teléfono de " + usuario.name + " es: " + usuario.phone;
                    contenedorDiv.appendChild(li);
                });
                loaderExito.style.display = "block";
            })
            .catch(error => {
                respuestaDiv.textContent = "Se ha generado un error: " + error;
                respuestaDiv.style.color = "red";
                loaderError.style.display = "block";
            })
            .finally(() => {
                loader.style.display = "none";
            });
    }, 700);
});
