import { useEffect, useState } from "react"
export const FetchComponente= ()=>{
    const [usuarios, setUsuarios] = useState([])
    useEffect(()=>{
        const f = fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>{
            setUsuarios(data)
        })
    }, [])
    return(
        <div>
            <ul>
                {usuarios.map((user, index)=>{
                    <li key={index}>{user}</li>
                })}
            </ul>
        </div>
    )
}