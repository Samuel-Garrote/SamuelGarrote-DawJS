const express = require("express");
const app = express();
const PORT = 3000;
let lista = [];

app.use(express.json());
app.use((req, res, next) => {
    console.log('Petición recibida!', req.url, req.method);
    next();
});

app.post("/trabajo/:tipo", (req, res) => {
    const tipo = req.params.tipo;
    const titulo = req.body.titulo; // ⚠ aquí estaba mal: antes ponías "titulo.body.titulo"
    const licenciado = req.query.licenciado === "true";

    const nuevaTarea = {titulo, tipo, licenciado};
    lista.push(nuevaTarea);

    res.json({
        mensaje: "Su CV ha sido entregado con éxito",
        tarea: nuevaTarea,
        tareasTotales: lista.length
    });
});

app.get("/tareas", (req, res) => {
    res.json({lista});
});

app.get("/", (req, res) => {
res.json({nombre: 'Esta es la ruta principal'})
})
app.listen(PORT, () => {
    console.log("El puerto es: http://localhost:3000");
});

