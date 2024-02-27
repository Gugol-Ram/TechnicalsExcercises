/*
INSTRUCCIONES:

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

    > = Avanza a la derecha
    < = Avanza a la izquierda
    * = Puede avanzar o retroceder

Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

```
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.

*/

/*
FUNCIONA A MEDIAS pero la hice full yo jaja... * siempre suma y deberia ser dinamico y sumar o restar segun que direccion haya más

function maxDistance(movements) {
  let distance = 0;
  for (let char of movements) {
    if (char[0] === ">") {
      distance++;
    } else if (char === "*") {
      distance++;
    } else if (char === "<") {
      distance--;
    }
  }
  return Math.abs(distance);
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

const movements4 = "<<<**>";
const result4 = maxDistance(movements4);
console.log(result4); // -> 4

*/

/*
// ESTE FUNCIONA. pero es un poco complejo innecesariamente?.
function maxDistance(movements) {
  let distance = 0;
  let rightCount = 0;
  let leftCount = 0;

  // Contar la cantidad de flechas a la derecha y a la izquierda
  for (let char of movements) {
    if (char === ">") {
      rightCount++;
    } else if (char === "<") {
      leftCount++;
    }
  }

  // Determinar la dirección predominante
  if (rightCount > leftCount) {
    // Más flechas a la derecha, el asterisco suma
    for (let char of movements) {
      if (char === "*") {
        distance++;
      }
    }
  } else {
    // Más flechas a la izquierda, el asterisco resta
    for (let char of movements) {
      if (char === "*") {
        distance--;
      }
    }
  }

  //
  distance += rightCount > leftCount ? rightCount : leftCount;

  // Tomar el valor absoluto
  return Math.abs(distance);
}

// COMPLEJIDAD O(n)

    // Se realiza un bucle for para contar los caracteres > y < en la cadena de movimientos. La longitud de la cadena de movimientos determina el número de iteraciones, por lo que la complejidad es O(n)O(n), donde nn es la longitud de la cadena de movimientos.
    // Después de contar los caracteres > y <, se realiza un segundo bucle for que busca asteriscos y ajusta la distancia en función de la dirección predominante.
    // Dentro de cada bucle, se ejecutan operaciones básicas que no dependen del tamaño de la entrada.
*/

/*
//PEQUEÑO PROBLEMA DE LOGICA, ULTIMO RESULTADO DA 4 y no 8.
// creo que falta info para plantearlo correctamente, porque si hay que maximizar la distancia entonces la maxima posible es 8 pero si se considera que primero se movio 4 lugares al lado contrario entonces se aun se maximiza la distancia pero el resultado correcto es 4 igualmente(volver de los 4 lugares a la izquierda y avanzar los 4 restantes a la derecha).
function maxDistance(movements) {
  let rightCount = 0;
  let leftCount = 0;
  let asteriskCount = 0;
  let finalResult = 0;

  // Contar la cantidad de flechas a la derecha, a la izquierda y los asteriscos
  for (let char of movements) {
    if (char === ">") {
      rightCount++;
    } else if (char === "<") {
      leftCount++;
    } else if (char === "*") {
      asteriskCount++;
    }
  }

  // Determinar la dirección predominante y sumar los asteriscos correspondientes
  if (rightCount > leftCount) {
    finalResult = rightCount + asteriskCount - leftCount;
  } else {
    finalResult = leftCount + asteriskCount - rightCount;
  }

  const distance = finalResult;

  return distance;
}

// COMPLEJIDAD O(n)

    // Se realiza un bucle for para contar los caracteres >, < y * en la cadena de movimientos. La longitud de la cadena de movimientos determina el número de iteraciones, por lo que la complejidad es O(n)O(n), donde nn es la longitud de la cadena de movimientos.
    // Las operaciones dentro del bucle son operaciones básicas que no dependen del tamaño de la entrada.
*/

//SOLUCION PAGINA:
// ME DA TAMBIEN 4 EL ULTIMO EJEMPLO.

function maxDistance(movements) {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance += right;
  distance -= left;

  let extra = movements.length - (right + left);

  return Math.abs(distance) + extra;
}

// COMPLEJIDAD O(n)
/*
Voy a analizar la complejidad temporal de cada uno de los planteos que has presentado:
Planteo 1:

    La función match() se ejecuta dos veces para buscar los caracteres > y < en la cadena de movimientos. La complejidad de tiempo para match() es lineal, por lo que es O(n)O(n), donde nn es la longitud de la cadena de movimientos.
    Después de encontrar los caracteres > y <, se realizan operaciones básicas de suma y resta.
    No hay bucles adicionales ni anidados.
*/

// Ejemplo de uso:

const movements = ">>*<";
const result = maxDistance(movements);
console.log("R1 = ", result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log("R2 = ", result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log("R3 = ", result3); // -> 5

const movements4 = "<<<**>";
const result4 = maxDistance(movements4);
console.log("R4 = ", result4); // -> 4

const movements5 = "<<<<**>>>>>>";
const result5 = maxDistance(movements5);
console.log("R5 = ", result5); // -> 4 EN REALIDAD Y NO 8
