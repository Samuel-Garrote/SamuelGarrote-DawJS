const contenedorUsuarios = document.getElementById("contenedorUsuarios");
const estado = document.getElementById("estado");

async function ponerUsuarios() {
    estado.textContent = "Cargando...";
    estado.style.color = "#004d40";
    contenedorUsuarios.innerHTML = "";

    try {
        // Simula tiempo de carga
        await new Promise(resolve => setTimeout(resolve, 1500));

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respuesta.ok) {
            throw new Error("Ha ocurrido un error al cargar los usuarios");
        }

        const data = await respuesta.json();

        data.forEach(usuario => {
            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <p><strong>${usuario.name}</strong></p>
                <p>Email: ${usuario.email}</p>
                <p>Tel: ${usuario.phone}</p>
            `;

            // Botón de acción ejemplo
            const boton = document.createElement("button");
            boton.textContent = "Ver perfil";
            boton.addEventListener("click", () => alert(`Perfil de ${usuario.name}`));
            card.appendChild(boton);

            contenedorUsuarios.appendChild(card);
        });

        estado.textContent = `Usuarios cargados: ${data.length}`;
        estado.style.color = "green";

    } catch (error) {
        estado.textContent = "Error! " + error.message;
        estado.style.color = "red";
    }
}

ponerUsuarios();
