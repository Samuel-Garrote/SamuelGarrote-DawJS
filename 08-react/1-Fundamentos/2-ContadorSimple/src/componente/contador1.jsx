import { useState } from "react";
export const Contador1= ()=>{
  
  //Estado del contador 
  const [contador, setContador] = useState(0)
  const incrementar = ()=>setContador(contador + 1)
  const decrementar = ()=>setContador(contador - 1)

  //renderizado

  return(
    <div>
      //Contador muestra el valor actual
      <h1>Este es mi primer contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )

}