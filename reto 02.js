/*
##

##INSTRUCCIONES

En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

*/

function regalosFabricables(regalos, materialesDisponibles) {
  const regalosFabricables = [];

  // Dividir los materiales disponibles en un conjunto para facilitar la búsqueda
  const materialesSet = new Set(materialesDisponibles);

  for (let regalo of regalos) {
    let esFabricable = true;
    // Verificar cada carácter del regalo
    for (let i = 0; i < regalo.length; i++) {
      if (!materialesSet.has(regalo[i])) {
        // Si algún material no está disponible, el regalo no es fabricable
        esFabricable = false;
        break;
      }
    }
    // Si todos los materiales están disponibles, añadir el regalo a la lista de fabricables
    if (esFabricable) {
      regalosFabricables.push(regalo);
    }
  }

  return regalosFabricables;
}

/*
En esta solución, primero convertimos la cadena materialesDisponibles en un conjunto (Set) para hacer que la búsqueda de materiales sea más eficiente.

Luego, iteramos sobre cada regalo y verificamos si todos los caracteres del regalo están presentes en el conjunto de materiales disponibles. Si encontramos un regalo que puede ser fabricado con los materiales disponibles, lo agregamos a la lista de regalos fabricables.*/

// Ejemplo de uso:
const regalos = ["tren", "oso", "pelota"];
const materialesDisponibles = "tronesa";
const regalosPosibles = regalosFabricables(regalos, materialesDisponibles);
console.log("Regalos fabricables:", regalosPosibles);

const regalos2 = ["juego", "puzzle"];
const materialesDisponibles2 = "jlepuz";

const regalosPosibles2 = regalosFabricables(regalos2, materialesDisponibles2);
console.log("Regalos fabricables:", regalosPosibles2); // ["puzzle"]

const regalos3 = ["libro", "ps5"];
const materialesDisponibles3 = "psli";

const regalosPosibles3 = regalosFabricables(regalos3, materialesDisponibles3);
console.log("Regalos fabricables:", regalosPosibles3); // []
