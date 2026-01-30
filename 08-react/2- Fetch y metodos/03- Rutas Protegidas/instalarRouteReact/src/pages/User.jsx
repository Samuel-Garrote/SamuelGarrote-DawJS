import { useParams } from "react-router-dom";

export const User=()=>{
    //Capturamos el parametro username definido en la ruta
    const {username} = useParams();

    return(
        <div>
            <h2>Perfil de Usuarios</h2>
            <p>Estas viendo el perfil de : <strong>{username}</strong></p>
        </div>
    )
}