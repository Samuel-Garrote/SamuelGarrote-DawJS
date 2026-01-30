const añadir = document.getElementById("añadir")
const mostrar = document.getElementById("mostrar")
const resp = document.getElementById("respuesta")
const inputNota = document.getElementById("notaInput").value



    listaDeNotas = [];

    inputNota.addEventListener("input", function(){
        const valor = inputNota.value
        if(!isNaN(valor) || valor.trim()==""){
            resp.textContent = "Tiene un numero o espacio entre medio"
            resp.style.color= "red"
        }else{
            resp.textContent = valor;
            resp.style.color= "blue"
        }
    })
    

añadir.addEventListener("click", function(){
    if(inputNota ===""|| !isNaN(inputNota)){
        resp.textContent = "No puedes añadir texto vacío o numeros"
        resp.style.color="red"
    }else{
            listaDeNotas.push(inputNota)
    resp.textContent = "Has añadido esta nota" + `${inputNota}`
    }
})

mostrar.addEventListener("click", function(){
    const contenedorLista = document.getElementById("contenedor")
    resp.innerHTML = ""
    listaDeNotas.forEach((nota)=>{
        let elemento = document.createElement("li")
        elemento.textContent = "Nota: " + nota;
                contenedorLista.appendChild(elemento);
                

    })

})


