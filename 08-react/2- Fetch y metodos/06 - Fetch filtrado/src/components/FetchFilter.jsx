import { useEffect, useState } from "react";
export const FetchFilter=()=>{
    const [usuarios, setUsuarios] = useState([])
    const [busqueda, setBusqueda] = useState("")

    useEffect(()=>{
        const f = fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>
            setUsuarios(data)
        )
    }, []);

    const usuariosFiltrados = usuarios.filter((u)=>{
        return u.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })
    
    /*const userFiltered = usuarios.filter((user)=>{
            user.name.toLowercase().includes(busqueda.toLowercase())
    })*/

    return(
        <div>
            <h2>Busqueda:</h2>
            <input value={busqueda} onChange={(e)=>setBusqueda(e.target.value) } type="text" placeholder="Escribe aqui el usuario" />
            <ul>
                {usuariosFiltrados.map((usuario)=>{
                    return <li key={usuario.id}>{usuario.name}</li>
                })}
            </ul>
        </div>
    )
}