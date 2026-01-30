import { useState } from "react";
export const Compomente = ()=>{
    const [activo, setActivo] = useState(true)
    const toogle = ()=> setActivo(!activo)

    return(
        <div>
            <h3>Cambio de boton</h3>
            <button onClick={toogle}>Haz click aqui</button>
            {activo ? "Activo" : "No activo"}
        </div>
    )
}