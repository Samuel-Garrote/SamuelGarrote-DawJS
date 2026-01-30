import { useState } from "react";

export const Componentee = () => {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const agregarItem = () => {
    if (texto.trim() === "") return;
    setLista([...lista, texto]);
    setTexto("");
  };

  return (
    <div>
      <h3>Lista Dinámica</h3>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí"
      />

      <button onClick={agregarItem}>Agregar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
