import { useState } from "react";
import Input from "./Input";

function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const mostrarPrompt = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={mostrarPrompt}>
        <h1>Bienvenido!</h1>
        <Input label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;

