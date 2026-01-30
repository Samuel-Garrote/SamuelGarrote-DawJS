const Samuel = {DNI: 212121, edad: 56, ciudad: "Sevilla", codigoPostal: 32443}

const SamuelJSON =  JSON.stringify(Samuel)
console.log(SamuelJSON)

const SamuelParse = JSON.parse(SamuelJSON)
console.log(SamuelParse);