const botonBuscar = document.getElementById("buscar");
const inputCiudad = document.getElementById("ciudad");
const resultado = document.getElementById("resultado");
const loader = document.getElementById("loader");
const loaderError = document.getElementById("error");
const loaderExito = document.getElementById("exito");

botonBuscar.addEventListener("click", function () {

    const ciudad = inputCiudad.value.trim();

    // Reset estados
    loader.style.display = "block";
    loaderExito.style.display = "none";
    loaderError.style.display = "none";
    resultado.textContent = "";

    // Validación
    if (ciudad === "") {
        resultado.textContent = "Necesitas poner una ciudad";
        loader.style.display = "none";
        return;
    }

    setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=6f40019cf72fbb46508c62abf690a613`)
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error("Ciudad no encontrada");
                }
                return respuesta.json();
            })
            .then(data => {
                if (data.cod && data.cod !== 200) {
        throw new Error(data.message);
    }
                resultado.innerHTML = `
                    <p><strong>Ciudad:</strong> ${data.name}</p>
                    <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                    <p><strong>Clima:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                `;
                loaderExito.style.display = "block";
            })
            .catch(error => {
                resultado.textContent = "Error: " + error.message;
                loaderError.style.display = "block";
            })
            .finally(() => {
                loader.style.display = "none";
            });
    }, 500);
});
