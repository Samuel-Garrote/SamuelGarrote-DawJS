import { useEffect, useState } from "react";

export const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const eliminarUsuarios = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsuarios(
        usuarios.filter(usuario => usuario.id !== id) //
      );
    });
  };

  const actualizarUsuarios = (id) => {
    const nuevoNombre = prompt("Nuevo nombre:");
    if (!nuevoNombre) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nuevoNombre }),
    }).then(() => {
      setUsuarios(
        usuarios.map(usuario =>
          usuario.id === id ? { ...usuario, name: nuevoNombre } : usuario
        )
      );
    });
  };

  return (
    <div>
      <h2>Lista de usuarios:</h2>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name}
            <button onClick={() => actualizarUsuarios(usuario.id)}>
              Editar
            </button>
            <button onClick={() => eliminarUsuarios(usuario.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
