import { useEffect, useState } from "react";
export const Put = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(d => setUsuarios(d));
    }, []);
    const eliminarUsuarios = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
    }).then(() => {
        setUsuarios(
        usuarios.filter(usuario => usuario.id !== id)
        );
    });
    };
    const editarUsuarios = (id) => {
    const nuevoNombre = prompt("Nuevo nombre:");
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nuevoNombre }),
    }).then(() => {
        setUsuarios(
        usuarios.map(usuario =>
                usuario.id === id
            ? { ...usuario, name: nuevoNombre }
            : usuario
        )
        );
    });
    };
    return (
    <div>
        <h2>Lista de usuarios</h2>
        <ul>
        {usuarios.map(usuario => (
            <li key={usuario.id}>
            {usuario.name}
            <button onClick={() => eliminarUsuarios(usuario.id)}>
                Eliminar
            </button>
            <button onClick={() => editarUsuarios(usuario.id)}>
                Editar
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
};
