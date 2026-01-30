import { useState } from "react";
import ContadorDeBotones from "./ContadorBotones";

function Contador() {
    const [contador, setContador] = useState(0);

        const incrementar = () => setContador(contador + 1);
        const decrementar = () => setContador(contador - 1);

    return (
    <div>
        <h2>Contador de botones</h2>
        <ContadorDeBotones
        contador={contador}
        incrementar={incrementar}
        decrementar={decrementar}
        />
    </div>
    );
}

export default Contador;
