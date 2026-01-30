import Item from "./Comp-Hijo"

function Lista(){
    const items = ["React", "Vue", "Spark", "Hadoop"]
      return (
    <ul className="lista">
      {items.map((texto, indice) => (
        <Item key={indice} texto={texto} />
      ))}
    </ul>
  );
}
export default Lista;