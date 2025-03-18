// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigosSorteados = [];
let cantidadSorteos = 0;

function agregarAmigo() {
    const elementoNombre = document.getElementById("amigo");
    
    // Eliminamos los espacios al inicio y al final
    nombre = elementoNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregamos el nombre al final del arreglo
    amigos.push(nombre);
    amigosSorteados.push(nombre);
    elementoNombre.value = "";
    actualizarLista(nombre);
}

function actualizarLista(nombre) {
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");

    // Eliminamos nombres opcionalmente
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("boton-eliminar");

    //botonEliminar.onclick = () => eliminarAmigo(nombre, li);
    botonEliminar.onclick = function() {
        eliminarAmigo(nombre);
        li.remove();    // Borrar el elemento li que contenga 'nombre'
    }

    li.appendChild(botonEliminar);
    li.appendChild(document.createTextNode(nombre));
    lista.appendChild(li);
}

function eliminarAmigo(nombre) {
    const index = amigos.indexOf(nombre);
    if (index > -1) {
        amigos.splice(index, 1);
    }
    // Reiniciamos los sorteos si se borra un amigo de la lista
    amigosSorteados = amigos.slice();
    cantidadSorteos = 0;
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos antes de sortear.");
        return;
    }

    // Bloqueamos el ingreso de más amigos una vez inicie el sorteo
    const btnAmigo = document.getElementById("btnAmigo");
    btnAmigo.disabled = true;
    const txtAmigo = document.getElementById("amigo");
    txtAmigo.disabled = true;

    if (cantidadSorteos == amigos.length) {
        alert("Se han sorteado todos los amigos! Se iniciará un nuevo sorteo!");
        btnAmigo.disabled = false;
        txtAmigo.disabled = false;
        reiniciarJuego();
        return;
    }

    let indiceGanador = 0;
    let amigoGanador = "";
    const nombre = amigos[cantidadSorteos]
    while (0<1) {
        indiceGanador = Math.floor(Math.random() * amigosSorteados.length);
        amigoGanador = amigosSorteados[indiceGanador];
        if (amigoGanador != nombre) break;
    }
    
    amigosSorteados.splice(indiceGanador, 1);

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>🎉 El amigo secreto de ${nombre} es: <strong>${amigoGanador}</strong> 🎉</li>`;
    cantidadSorteos++;
}

function reiniciarJuego() {
    amigos = [];
    cantidadSorteos = 0;

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "";
}