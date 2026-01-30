import { useParams } from "react-router-dom";
export const User = ()=>{
    const {username} = useParams;
    return(
        <div>
            <h2>Perfil de usuarios</h2>
            <p>Estas en la pagina de {username}</p>
        </div>
    )
}