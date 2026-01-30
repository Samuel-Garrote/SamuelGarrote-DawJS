const chargeButton = document.getElementById("charge")
const responseDiv = document.getElementById("response")
const containerDiv = document.getElementById("container")

chargeButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/usuarios_que_no_existen")
    .then(respuesta=>{
        if(!respuesta.ok){
        throw new Error("HTTP no lograda, estado roto" + respuesta.status)
        }
        return respuesta.json()
        })
    .catch(error=>{
        responseDiv.textContent="Error Detectado!" + error;
        responseDiv.style.color="red"
})
})