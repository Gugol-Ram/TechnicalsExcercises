/*
#INSTRUCCIONES:
En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

    Si ya es un palíndromo, un array vacío.
    Si no es posible, null.
    Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

Por ejemplo:

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null

Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

*/

function getIndexsForPalindrome(word) {
  let res = null; //inicio res como 'null' para simplificar, si lo hiciera como array vacio deberia agregar una linea de codigo para el caso res.length > 0 ? res : null
  for (const a of Array.from({ length: word.length }).keys()) {
    for (const b of Array.from({ length: word.length }).keys()) {
      //doble bucle anidado para iterar sobre todas las combinaciones
      let swapped = [...word]; //arreglo que guarda una copia de la palabra, para luego intercambiar los caracteres necesarios
      let aux = word[a];
      swapped[a] = word[b];
      swapped[b] = aux;

      let left = swapped.slice(0, Math.floor(word.length / 2)).join(""); //corto al diome la palabra
      let right = swapped
        .slice(Math.ceil(word.length / 2))
        .reverse() //tambien corto al diome pero doy vuelta esa mitad
        .join("");

      res = [[null, [[], [a, b]][+(a + b > 0)]][+(left == right)], res][+!!res]; //verifico si la mitad izquierda es = a la derecha
    }
  }
  return res;
}

console.log(getIndexsForPalindrome("caababa"));
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("anna")); // [0, 1];

/* explicacion ultima parte del codigo:

    [+(a + b > 0)]: Este fragmento determina si a y b son mayores que cero. Si ambos son cero, entonces devuelve 0, de lo contrario, devuelve 1. Esto se usa para determinar si se proporcionan valores reales para a y b, lo cual es necesario para almacenar un par de índices en res.

    [[], [a, b]][+(a + b > 0)]: Aquí, [[], [a, b]] es un arreglo de dos elementos. Si a y b son mayores que cero, se toma [a, b] del arreglo (es decir, los índices reales a y b), de lo contrario, se toma [] (un arreglo vacío). Entonces, este fragmento devuelve [a, b] si a y b son mayores que cero, de lo contrario, devuelve [].

    [[null, [[], [a, b]][+(a + b > 0)]][+(left == right)]: Aquí, [null, [[], [a, b]][+(a + b > 0)]] es otro arreglo de dos elementos. Si left y right son iguales (es decir, la palabra intercambiada es un palíndromo), entonces se toma [null, [[], [a, b]][+(a + b > 0)]], de lo contrario, se toma null. Entonces, si la palabra intercambiada es un palíndromo, se devuelve el arreglo [null, [[], [a, b]][+(a + b > 0)]], que es [null, [a, b]] si a y b son mayores que cero y null de lo contrario.

    [+!!res]: Finalmente, +!!res convierte res en un valor booleano (true o false), luego lo convierte de nuevo a un entero (0 si es false, 1 si es true). Esto se utiliza para determinar si res contiene algún valor. Si res está vacío, este fragmento devuelve 0 (false), de lo contrario, devuelve 1 (true).

Entonces, en resumen, si res está vacío y la palabra intercambiada es un palíndromo, se almacenan los índices [a, b] en res. Si res ya contiene valores y la palabra intercambiada es un palíndromo, se mantiene res sin cambios. Si res está vacío y la palabra intercambiada no es un palíndromo, se mantiene res como null. Si res ya contiene valores y la palabra intercambiada no es un palíndromo, también se mantiene res sin cambios.

*/
