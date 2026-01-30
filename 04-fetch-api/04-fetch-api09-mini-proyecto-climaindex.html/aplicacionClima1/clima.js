const inputCiudad = document.getElementById("ciudad");
const botonBuscar = document.getElementById("buscarCiudad");
const respuesta = document.getElementById("respuesta");

const loaderCargando = document.getElementById("loaderCargando");
const loaderError = document.getElementById("loaderError");
const loaderExito = document.getElementById("loaderExito");

// Tu API Key de OpenWeather
const BASE = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6f40019cf72fbb46508c62abf690a613";

// Función para ocultar todos los loaders
function ocultarLoaders() {
    loaderCargando.style.display = "none";
    loaderError.style.display = "none";
    loaderExito.style.display = "none";
}

// Inicializar: ocultar todos al cargar la página
ocultarLoaders();

// Función para mostrar mensaje de éxito
function mostrarExito(mensaje) {
    ocultarLoaders();
    loaderExito.style.display = "block";
    respuesta.innerHTML = mensaje;
}

// Función para mostrar error
function mostrarError(mensaje) {
    ocultarLoaders();
    loaderError.style.display = "block";
    respuesta.innerHTML = mensaje;
}

// Función para mostrar cargando
function mostrarCargando() {
    ocultarLoaders();
    loaderCargando.style.display = "block";
    respuesta.innerHTML = "";
}

// Función principal de búsqueda
async function buscarCiudad() {
    const ciudad = inputCiudad.value.trim();
    if (!ciudad) return;

    mostrarCargando();

    try {
        const res = await fetch(`${BASE}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
        if (!res.ok) throw new Error("Ciudad no encontrada");

        const data = await res.json();

        const mensaje = `
            <strong>${data.name}, ${data.sys.country}</strong><br>
            Temperatura: ${data.main.temp} °C<br>
            Clima: ${data.weather[0].description}<br>
            Humedad: ${data.main.humidity}%
        `;

        mostrarExito(mensaje);

    } catch (error) {
        mostrarError("No se pudo obtener la información de la ciudad.");
        console.error(error);
    }
}

// Evento click en el botón
botonBuscar.addEventListener("click", buscarCiudad);

// También buscar con Enter
inputCiudad.addEventListener("keyup", (e) => {
    if (e.key === "Enter") buscarCiudad();
});
