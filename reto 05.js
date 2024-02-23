/* ## INSTRUCCIONES(Reto de Code Wars.)

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte.La carretera se representa con una cadena de caracteres, donde:

    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada

Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

EJEMPLO Y RESULTADO ESPERADO:

onst road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]


*/

function cyberReindeer(road, time) {
  const result = []; // Array para almacenar el estado de la carretera en cada unidad de tiempo
  let currentRoad = road; // Estado inicial de la carretera

  for (let t = 0; t <= time; t++) {
    //abrir barrera luego de  5 t
    if (t === 5) {
      currentRoad = currentRoad.replace(/\|/g, "*");
    }
    // Agrega el estado actual de la carretera al array de resultados
    result.push(currentRoad);

    if (currentRoad[0] !== "|") {
      let nextRoad = currentRoad.replace(/S[\.\*]/, `.S`);

      currentRoad = nextRoad;
    }
  }

  return result;
}

// Ejemplo de uso:
const road = "S..|...|..";
const time = 10;
const result = cyberReindeer(road, time);
console.log(result);
