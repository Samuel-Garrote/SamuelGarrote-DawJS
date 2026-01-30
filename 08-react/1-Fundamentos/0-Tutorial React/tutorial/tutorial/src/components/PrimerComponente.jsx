import React, { useState } from 'react'

export const PrimerComponente = () => {
  // Estado: guardamos el color seleccionado
  const [color, setColor] = useState("Rojo")

  // Función para cambiar el color
  const cambiarColor = (nuevoColor) => {
    setColor(nuevoColor)
  }

  return (

    <div>
      <h2>Selector de colores 🎨</h2>
      <p>El color elegido es: {color}</p>
        <input type="text" placeholder='Pon el color que quieras' onChange={e=>cambiarColor(e.target.value)}></input>
      {/* Botones para cambiar el color */}
        <button onClick={() => cambiarColor("Azul")}>Azul</button>
        <button onClick={() => cambiarColor("Verde")}>Verde</button>
        <button onClick={() => cambiarColor("Amarillo")}>Amarillo</button>
        <button onClick={()=>{
        console.log("El valor de este estado es: " + color)
        }}>Ver valor</button>
    </div>
  )
}