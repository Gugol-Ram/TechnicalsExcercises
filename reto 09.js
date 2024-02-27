/*
##INSTRUCCIONES 

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
*/

/*
// En esta función busco la menor cantidad de cambios necesarios, no importa con que luz se comienza solo se cambian las justas y necesarias en el orden que esten.
function adjustLights(lights) {
  let changesRedStart = 0; // Contador de cambios si se comienza con luz roja
  let changesGreenStart = 0; // Contador de cambios si se comienza con luz verde

  // Contar cambios si se comienza con luz roja en la posición 0
  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0 && lights[i] !== "🔴") {
      changesRedStart++;
    } else if (i % 2 !== 0 && lights[i] !== "🟢") {
      changesRedStart++;
    }
  }

  // Contar cambios si se comienza con luz verde en la posición 0
  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0 && lights[i] !== "🟢") {
      changesGreenStart++;
    } else if (i % 2 !== 0 && lights[i] !== "🔴") {
      changesGreenStart++;
    }
  }

  // Devolver el número mínimo de cambios entre comenzar con luz roja o verde
  return Math.min(changesRedStart, changesGreenStart);
}
*/
// Iteración sobre las luces: Se itera sobre el array de luces una vez para contar los cambios necesarios si se comienza con luz roja y otra vez para contar los cambios si se comienza con luz verde. La complejidad de esta parte es lineal respecto al tamaño del array de luces, es decir, tiene una complejidad de O(n), donde n es la longitud del array de luces.
// Cálculo del mínimo: Luego de obtener los conteos de cambios para ambas opciones, se calcula el mínimo entre estos dos valores. Este cálculo es una operación constante, independientemente del tamaño del array de luces.
// Por lo tanto, la complejidad total de la función es O(n), donde n es la longitud del array de luces

// En esta fn consideramos que las luces se cambian solo en el orden que se encuentran, es decir se cambian en el orden de lectura. por ejemplo:["🔴", "🔴", "🟢", "🔴", "🟢"] en la logica anterior lo mas sencillo es cambiar la primer luz a verde, en esta logica al ir secuencialmente y comenzar por roja, se cambiaran todas las siguientes segun sea necesario(todas en este caso)
function adjustLights(lights) {
  let changes = 0;

  // compruebo con que colo comienzo.
  let expectedColor = lights[0] === "🔴" ? "🟢" : "🔴";

  // Recorremos desde el siguiente indice
  for (let i = 1; i < lights.length; i++) {
    // Si la luz no es del color esperado sumo +1 a los cambios necesarios. y cambio la luz
    if (lights[i] !== expectedColor) {
      changes++;
    }
    // Cambiamos el color esperado
    expectedColor = expectedColor === "🔴" ? "🟢" : "🔴";
  }

  return changes;
}
// complejidad O(n)

// SOLUCION PROPUESTA:
// tambien sigue el enfoque de no importar el orden sino los cambios minimos
// function adjustLights(lights) {
//   let start = "";
//   let res = 0;

//   for (let l of lights) {
//     res += +(l == start);
//     start = [l, " "][+(l == start)];
//   }

//   return res;
// }
// Ejemplo de uso:
const result1 = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
console.log("R1:", result1); // -> 1 (cambias la cuarta luz a 🔴)

const result2 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
console.log("R2:", result2); // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

const result3 = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
console.log("R3:", result3); // -> 0 (ya estan alternadas)

const result4 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🟢"]);
console.log("R4:", result4); // -> 2 (cambias la primera luz a 🟢 y la cuarta luz a 🔴. si se sigue el enfoque de lectura secuencial entonces el resultado debiera ser 3)
