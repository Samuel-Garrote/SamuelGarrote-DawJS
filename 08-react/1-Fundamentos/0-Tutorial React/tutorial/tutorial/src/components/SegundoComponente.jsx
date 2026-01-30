import React from 'react'

let cursos = [
    "Master en JS", 
    "Master en Backend", 
    "Master en Todo"
]
export const SegundoComponente = () => {
    
    return (
    <div>
        <h1>Este es el segundo componente!</h1>
        <ul>
        {cursos.map(curso=>(<li key = {curso}>{curso}</li>))}
        </ul>
    </div>
    )
}
