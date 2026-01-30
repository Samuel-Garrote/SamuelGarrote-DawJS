const form = document.getElementById("formTarea");
const lista = document.getElementById("listaTareas");
const BASE = "http://localhost:3000";

// Cargar tareas
async function cargarTareas() {
    try {
        const res = await fetch(`${BASE}/tareas`);
        const data = await res.json();

        lista.innerHTML = ""; // limpiar lista antes de repintar

        data.lista.forEach((t, i) => {
            const li = document.createElement("li");
            li.textContent = `${i}. [${t.tipo}] ${t.titulo}`;

            // Si la tarea está marcada, tachado
            if (t.marcada) {
                li.style.textDecoration = "line-through";
                li.style.color = "#777";
            }

            // Botón Editar
            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.style.backgroundColor = "#2196F3";
            btnEditar.style.color = "white";
            btnEditar.addEventListener("click", async () => {
                const nuevoTitulo = prompt("Nuevo título:", t.titulo);
                if (!nuevoTitulo) return;

                await fetch(`${BASE}/tareas/${i}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ titulo: nuevoTitulo })
                });
                cargarTareas();
            });

            // Botón Eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.style.backgroundColor = "#f44336";
            btnEliminar.style.color = "white";
            btnEliminar.addEventListener("click", async () => {
                if (!confirm(`¿Eliminar la tarea "${t.titulo}"?`)) return;

                await fetch(`${BASE}/tareas/${i}`, { method: "DELETE" });
                cargarTareas();
            });

            // Botón Marcar/Desmarcar
            const btnMarcar = document.createElement("button");
            btnMarcar.textContent = t.marcada ? "Desmarcar" : "Marcar";
            btnMarcar.style.backgroundColor = "#4CAF50";
            btnMarcar.style.color = "white";
            btnMarcar.addEventListener("click", async () => {
                await fetch(`${BASE}/tareas/${i}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ marcada: !t.marcada })
                });
                cargarTareas();
            });

            // Añadir botones a la lista
            li.appendChild(btnMarcar);
            li.appendChild(btnEditar);
            li.appendChild(btnEliminar);

            lista.appendChild(li);
        });
    } catch (error) {
        console.error("Error cargando tareas:", error);
        lista.innerHTML = `<li style="color:red;">Error cargando tareas: ${error.message}</li>`;
    }
}

// Crear tarea
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    if (!titulo) return;

    try {
        await fetch(`${BASE}/tareas/personal?marcada=false`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo })
        });
        form.reset();
        cargarTareas();
    } catch (error) {
        console.error("Error creando tarea:", error);
    }
});

// Cargar lista al iniciar 
cargarTareas();
