/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
## INSTRUCCIONES
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

A tener en cuenta:

    Siempre habrá un paso de diferencia o ninguno.
    La modificación puede ocurrir en cualquier lugar de la cadena.
    La secuencia original puede estar vacía

  */

function findNaughtyStep(original, modified) {
  // Recorrer ambas cadenas
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) {
      return original[i]; // Devolver el carácter modificado
    }
  }
  // Si no se encontró ninguna diferencia, devolver una cadena vacía
  return "";
}

// Ejemplo de uso:
const original = "stepfor";
const modified = "stepornot";
const result = findNaughtyStep(original, modified);
console.log("The naughty step is:", result);

//  Complejidad LINEAL `O(n)`, donde `n` es la longitud de la cadena original. Esto se debe a que el algoritmo recorre ambas cadenas una vez, comparando los caracteres posición por posición hasta encontrar la primera diferencia.

// Dado que el algoritmo solo recorre las cadenas una vez y termina tan pronto como encuentra la primera diferencia, su complejidad no depende de la longitud de la cadena modificada. Esto lo hace muy eficiente en términos de tiempo de ejecución.

/*

// VERSION COMPLEJA CONSIDERA MAS DE UNA TAREA DIFERENTE O EXTRA, PERO NO CONSIDERA SI SE CAMBIA UNA LETRA EN LA MISMA POSICION.
function findNaughtyStep(original, modified) {
  if (original === "") {
    return modified.split("");
  }

  const originalStep = original.split("");
  const modifiedStep = modified.split("");
  let wrongSteps = [];

  let originalIndex = 0;
  let modifiedIndex = 0;

  // Recorrer ambos arrays de caracteres simultáneamente
  while (
    originalIndex < originalStep.length &&
    modifiedIndex < modifiedStep.length
  ) {
    if (originalStep[originalIndex] !== modifiedStep[modifiedIndex]) {
      // Si los caracteres son diferentes, agregar el carácter faltante a wrongSteps
      wrongSteps.push(originalStep[originalIndex]);
      // Mantener el índice de modifiedStep para seguir comparando con el mismo carácter de originalStep
      originalIndex++;
    } else {
      // Si los caracteres son iguales, avanzar ambos índices
      originalIndex++;
      modifiedIndex++;
    }
  }

  // Si modifiedStep ha terminado pero originalStep no, agregar los caracteres restantes a wrongSteps
  while (modifiedIndex < modifiedStep.length) {
    wrongSteps.push(modifiedStep[modifiedIndex]);
    modifiedIndex++;
  }

  return wrongSteps.join("");
}

// Ejemplo de uso:
const original = "stepfor";
const modified = "stepornot";
const result = findNaughtyStep(original, modified);
console.log("The naughty step is:", result);
*/
/*

El algoritmo recorre ambas cadenas de caracteres simultáneamente una vez. Si suponemos que la longitud de la cadena original es `n` y la longitud de la cadena modified es `m`, la complejidad del algoritmo es `O(max(n,m))`.

Aquí está el desglose:

    El primer bucle while recorre ambas cadenas hasta que una de ellas se agota. Este bucle tiene una complejidad de `O(min(n,m))`, ya que se detiene cuando uno de los índices alcanza la longitud mínima de las dos cadenas.

    El segundo bucle while maneja los caracteres restantes en caso de que una de las cadenas sea más larga que la otra. Este bucle tiene una complejidad de `O(max(n,m)−min(n,m)), que es aproximadamente igual a `O(max(n,m))`.

Por lo tanto, en general, la complejidad del algoritmo es `O(max(n,m))`, donde `n` es la longitud de la cadena `original` y `m` es la longitud de la cadena `modified`.

Este enfoque lineal es bastante eficiente y escalable para comparar las dos cadenas y encontrar los caracteres faltantes.

`O(max(n,m))`
"La complejidad es del orden de la función máxima entre `n` y `m`, menos la función mínima entre `n` y `m`."

Esto significa que la complejidad del algoritmo está determinada por la diferencia entre las longitudes de las dos cadenas. Si las longitudes son iguales, la complejidad sería  `O(0)`, es decir, una complejidad constante. Si una cadena es significativamente más larga que la otra, la complejidad se basa en la longitud de la cadena más larga. Esta lectura nos permite comprender cómo varía la complejidad del algoritmo en función de las diferencias en las longitudes de las cadenas.
*/
