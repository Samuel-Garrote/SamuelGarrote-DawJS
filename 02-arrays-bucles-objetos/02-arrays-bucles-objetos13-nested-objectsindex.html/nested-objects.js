const persona = {nombre:"Einstein", edad: 43, trabajo: "Pintor", direccion: {calle: "mariaLuisa", numero: 2, ciudad: "Sevilla",}, empresas:[{nombre:"terra"},
    {nombre: "Faccum"}
]}

console.log(persona.direccion)
persona.empresas[1].nombre = "Alberto"
console.log(persona.empresas)