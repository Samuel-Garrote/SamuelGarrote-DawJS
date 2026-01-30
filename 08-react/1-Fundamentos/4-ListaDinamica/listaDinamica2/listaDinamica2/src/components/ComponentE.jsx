import { useState } from "react"
export const ComponentE = ()=>{

    const [lista, setLista] = useState([])
    const [texto, setTexto]= useState("")

    const agregarUsuario = ()=>{
        if(texto.trim()==="") return
        setLista([...lista, texto])
        setTexto("")
    }
    return(
        <div>
            <h3>Lista Dinamica</h3>
            <input  placeholder="Escribe aqui" value={texto} onChange={(e)=>{setTexto(e.target.value)}} type="text" />
            <p>{texto}</p>
            <button onClick={agregarUsuario} > Añadir Usuario</button>
            <ul>
                {lista.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}