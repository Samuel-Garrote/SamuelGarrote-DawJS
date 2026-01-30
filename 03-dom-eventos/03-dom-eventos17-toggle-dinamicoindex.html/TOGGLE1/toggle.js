const inputAlumno = document.getElementById("inputAlumno")
const botonAgregar = document.getElementById("botonAgregar")
const respuesta = document.getElementById("respuesta")

let alumnos = [
    {nombre: "Juan"  , aprobado: true},
    {nombre: "Marta"  , aprobado: false}
]

botonAgregar.addEventListener("click", function(){
    const input = inputAlumno.value
    if(!input) return; // evita agregar vacío
    alumnos.push({nombre: input, aprobado: false})
    respuesta.textContent = "Has pusheado al alumno " + input

    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = "";

    alumnos.forEach((alumno)=>{
        const elemento = document.createElement("li")
        const textoAlumno = document.createElement("span")
        const botonCambio = document.createElement("button")
        botonCambio.textContent = "Cambiar"

        // Color inicial según aprobado
        if(alumno.aprobado){
            elemento.style.color = "green"
        } else {
            elemento.style.color = "red"
        }

        botonCambio.addEventListener("click", function(){
            if(alumno.aprobado === true){
                alumno.aprobado = false;
                elemento.style.color = "red"
                respuesta.textContent = "Se cambió a suspenso el alumno " + alumno.nombre
                respuesta.style.color = "orange"
                botonCambio.style.background = "red"
            }else{
                alumno.aprobado = true;
                elemento.style.color = "green"
                respuesta.textContent = "Se aprobó al alumno " + alumno.nombre
                respuesta.style.color= "green"
                botonCambio.style.background = "green"
            }
        })

        if(alumno.aprobado === true){
            elemento.textContent = "El alumno " + alumno.nombre + " está aprobado"
        }else{
            elemento.textContent = "El alumno " + alumno.nombre + " está suspenso"
        }

        contenedor.appendChild(elemento)
        elemento.appendChild(botonCambio)
        elemento.appendChild(textoAlumno)
    })
})
