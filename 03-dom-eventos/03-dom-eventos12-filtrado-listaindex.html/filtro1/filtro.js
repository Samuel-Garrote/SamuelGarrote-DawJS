
const inputEdad = (document.getElementById("edad"))
const inputNombre = document.getElementById("nombre")
const respuesta = document.getElementById("respuesta")

let menoresDeEdad = [];
let mayoresDeEdad = [];

function ingresar(){
    const edad = Number(inputEdad.value)
    const nombre = inputNombre.value
    empujeALista(edad, nombre)
}

//Boton de empuje a Listas
function empujeALista(edad, nombre){
    if(isNaN(edad) || nombre ===""){
        respuesta.textContent = "Debe escribir la edad y el nombre correctamente"
        return;
    }
    if(edad < 18){
    respuesta.textContent = "No tienes permiso para entrar, no eres mayor de edad."
    menoresDeEdad.push({nombre, edad})
    }else{
        mayoresDeEdad.push({nombre, edad})
        respuesta.textContent = "El nombre " + `"${nombre}" `+ "ha quedado registrado con la edad de " + `"${edad}"` + " años"
    }
}
//Boton de Filtrado
function mostrarFiltrado(){
filtrado();
}

function filtrado(){
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = "";
    let invitados = [...menoresDeEdad, ...mayoresDeEdad]
    let filtradoMayorDeEdad = invitados.filter(invitado=> invitado.edad >= 18)

    filtradoMayorDeEdad.forEach(invitado=>{
            let elemento = document.createElement("li")
            elemento.textContent = invitado.nombre + " es mayor de edad.";
            contenedor.appendChild(elemento)
    })
}

function resetLista() {
    menoresDeEdad = []
    mayoresDeEdad = []
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    respuesta.textContent = ""
    inputNombre.value = ""
    inputEdad.value = ""
}

