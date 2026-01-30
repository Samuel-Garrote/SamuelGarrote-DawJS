import { useState } from "react";

export const Componente1 = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Funciones para los botones
    const like = () => setContador(contador + 1);
  const dislike = () => setContador2(contador2 + 1);

  // Función para cambiar desde el input
  const cambiarDesdeInput = (e) => {
    const valor = Number(e.target.value); // Convertimos a número
    setContador(valor);                    // Actualizamos el estado
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Input controlado */}
      <input
      
        type="number"
        placeholder="Escribe un número"
        value={contador}               // Refleja el estado
        onChange={cambiarDesdeInput}   // Se ejecuta al escribir
        style={{ border: "solid, black" ,padding: "5px", width: "100px", marginBottom: "10px" }}
      />

      {/* Contador 1 */}
      <h1>{contador}</h1>
      <button onClick={like} style={{ marginRight: "10px" }}>👍 Like</button>

      {/* Contador 2 */}
      <h1>{contador2}</h1>
      <button onClick={dislike}>👎 Dislike</button>
    </div>
  );
};
