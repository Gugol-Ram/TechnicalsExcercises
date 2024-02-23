/*
## Prueba técnica de Google

## INSTRUCCIONES

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

*/

function findFirstRepeated(gifts) {
  let giftMatch = {};
  let firstIndex = gifts.length;

  for (let i = 0; i < gifts.length; i++) {
    const ids = gifts[i]; // Obtengo el id en la posición 'i' y lo guardo en la variable 'ids'.
    if (giftMatch[ids] === undefined) {
      // Compruebo si el id 'ids' ya existe en el objeto 'giftMatch'.
      giftMatch[ids] = i; // Si el id 'ids' no existe en el objeto 'giftMatch', lo agrego con el índice 'i'.
    } else {
      // Si el id 'ids' ya existe en el objeto 'giftMatch', y es menor que el primer índice, actualizo el primer índice.
      if (giftMatch[ids] < firstIndex) {
        firstIndex = giftMatch[ids];
      }
    }
  }

  if (firstIndex === gifts.length) {
    return -1;
  } else {
    return gifts[firstIndex];
  }
}

// COMPLEJIDAD: O(n)
//  donde n es el tamaño de la lista de números. Esto se debe a que el algoritmo recorre la lista una sola vez para contar las ocurrencias y mantener un seguimiento de los índices de la primera aparición de cada número.

// Ejemplo de uso
const idGift = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9];
const match = findFirstRepeated(idGift);
console.log("First matched id case 1 is:", match); // Debería ser 2

const idGift2 = [2, 1, 3, 5, 3, 2];
const match2 = findFirstRepeated(idGift2);
console.log("First matched id case 2 is:", match2); // Debería ser 3

const idGift3 = [1, 2, 3, 4];
const match3 = findFirstRepeated(idGift3);
console.log("First matched id case 3 is:", match3); // Debería ser -1

const idGift4 = [5, 1, 5, 1];
const match4 = findFirstRepeated(idGift4);
console.log("First matched id case 4 is:", match4); // Debería ser 5

/*FUNCIONA PERO BUSCA LA ULTIMA COINCIDENCIA NO LA PRIMERA.
function findFirstRepeated(gifts) {
  let giftMatch = {};
  let firstIndex = gifts.length;

  for (let i = 0; i < gifts.length; i++) {
    const ids = gifts[i]; //obtengo el id en la posicion 'i' y lo guardo en la variable 'ids'.
    if (giftMatch[ids]) {
      //compruebo si el id 'ids' ya existe en el objeto 'giftMatch'.
      if (giftMatch[ids] < firstIndex) {
        //si el id 'ids' ya existe en el objeto 'giftMatch' y es menor que el primer índice, actualizo el primer índice.
        firstIndex = giftMatch[ids];
      }
    } else {
      giftMatch[ids] = i; //si el id 'ids' no existe en el objeto 'giftMatch', lo agrego con el índice 'i'.
    }
  }
  if (firstIndex === gifts.length) {
    return -1;
  } else {
    return gifts[firstIndex];
  }
}

//Ejemplo de uso
const idGift = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9];
const match = findFirstRepeated(idGift);
console.log("First matched id case 1 is:", match);

const idGift2 = [2, 1, 3, 5, 3, 2];
const match2 = findFirstRepeated(idGift2);
console.log("First matched id case 2 is:", match2);

const idGift3 = [1, 2, 3, 4];
const match3 = findFirstRepeated(idGift3);
console.log("First matched id case 3 is:", match3);

const idGift4 = [5, 1, 5, 1];
const match4 = findFirstRepeated(idGift4);
console.log("First matched id case4 is:", match4);
*/
/*
function primerNumeroRepetido(lista) {
  let conteo = {};
  let primerIndice = lista.length;

  for (let i = 0; i < lista.length; i++) {
    const num = lista[i];
    if (conteo[num] !== undefined) {
      if (conteo[num] < primerIndice) {
        primerIndice = conteo[num];
      }
    } else {
      conteo[num] = i;
    }
  }

  if (primerIndice === lista.length) {
    return -1;
  } else {
    return lista[primerIndice];
  }
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9];
const resultado = primerNumeroRepetido(numeros);
console.log("El primer número de identificación repetido es:", resultado);
*/
