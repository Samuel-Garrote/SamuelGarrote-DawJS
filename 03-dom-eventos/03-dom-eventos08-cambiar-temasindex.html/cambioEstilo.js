const texto = document.getElementById("parrafo");
const boton = document.getElementById("cambiarEstilo");

boton.addEventListener("click" , function (){
    texto.classList.toggle("estiloNuevo")
})