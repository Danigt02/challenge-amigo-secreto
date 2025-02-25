// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarParticipante() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if(!nombre){
        alert("Porfavor ingresa un nombre valido :) ");
        return;
    }
    
    if (!amigos.includes(nombre)){
        amigos.push(nombre);
        actualizarLista();
    } else{
        alert("El participante ya esta en la lista.");
    }

    input.value = ""; // LIMPIA EL INPUT DESPUES DE AGREGAR EL NOMBRE
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML ="";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortear (){
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }

    let asignaciones ={};
    let disponibles = [...amigos];

    for (let participante of amigos) {
        let opciones = disponibles.filter(p => p !== participante);

        if (opciones.length === 0) {
            return sortear(); // Esta linea verifica el reintento si no hay opciones válidas
        }

        let elegido = opciones[Math.floor(Math.random()* opciones.length)];
        asignaciones[participante] = elegido;
        disponibles = disponibles.filter (p => p !== elegido);
    }
    mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  for (const [amigo, asignado] of Object.entries(asignaciones)) {
    const li = document.createElement("li");
    li.textContent = `${amigo} → ${asignado}`;
    resultado.appendChild(li);
  }
}

// Acciones para los botones pai
document.querySelector(".button-add").addEventListener("click", agregarParticipante);
document.querySelector(".button-draw").addEventListener("click", sortear);