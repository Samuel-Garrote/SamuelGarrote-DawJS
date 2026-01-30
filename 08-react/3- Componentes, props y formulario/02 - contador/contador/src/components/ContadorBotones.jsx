function ContadorDeBotones({ contador, incrementar, decrementar }) {
    return (
    <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
    </div>
    );
}

export default ContadorDeBotones;
