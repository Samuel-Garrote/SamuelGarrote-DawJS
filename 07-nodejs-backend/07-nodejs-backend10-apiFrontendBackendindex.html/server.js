const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log("Petición recibida:", req.method, req.url);
    next();
});

// Array en memoria
const listaTareas = [];

// Servir frontend
app.use(express.static(path.join(__dirname)));

// RUTA INICIAL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// CREAR tarea (POST)
app.post("/tareas/:tipo", (req, res) => {
    const tipo = req.params.tipo;
    const titulo = req.body.titulo;
    const marcada = req.query.marcada === "true"; // true/false según query

    if (!titulo || !tipo) {
        return res.status(400).json({ error: "Campo incompleto" });
    }

    const nuevaTarea = { titulo, tipo, marcada };
    listaTareas.push(nuevaTarea);
    res.json(nuevaTarea);
});

// LISTAR tareas (GET)
app.get("/tareas", (req, res) => {
    res.json({ lista: listaTareas });
});

// ACTUALIZAR tarea (PUT)
app.put("/tareas/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const { titulo, tipo, marcada } = req.body;

    if (index < 0 || index >= listaTareas.length) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    if (titulo !== undefined) listaTareas[index].titulo = titulo;
    if (tipo !== undefined) listaTareas[index].tipo = tipo;
    if (marcada !== undefined) listaTareas[index].marcada = marcada;

    res.json({ mensaje: "Tarea actualizada", tarea: listaTareas[index] });
});

// ELIMINAR tarea (DELETE)
app.delete("/tareas/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= listaTareas.length) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    const tareaEliminada = listaTareas.splice(index, 1);
    res.json({ mensaje: `Tarea ${index} eliminada`, tarea: tareaEliminada[0] });
});

// Levantar servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});