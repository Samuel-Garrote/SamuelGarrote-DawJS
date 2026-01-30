const alumnos = [
    {nombre: "Samuel", edad: 20},
    {nombre: "Ismael", edad: 14},
    {nombre: "Ismael", edad: 23},
    {nombre: "Ismael", edad: 14},
    {nombre: "Sergio", edad: 54},
    {nombre: "Sergio", edad: 12},
    {nombre: "Sergio", edad: 98}
]

const filtradoMayorDeEdad = alumnos.filter(alumno =>
    alumno.edad < 18)
    console.log("Las unicas personas mayores de edad son" + filtradoMayorDeEdad)