/*
## INSTRUCCIONES

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

    Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
    Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
    Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)

Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'


 */

function organizeGifts(gifts) {
  const parts = gifts.match(/\d+[a-zA-Z]/g); // Divide la cadena en partes numéricas y alfabéticas
  let result = "";

  if (parts) {
    parts.forEach((part) => {
      const numericPart = parseInt(part.match(/\d+/)[0]); // Extrae la parte numérica
      const letter = part.match(/[a-zA-Z]/)[0]; // Extrae la letra

      let bags = "";
      if (numericPart % 10 !== 0) {
        bags = "(" + letter.repeat(numericPart % 10) + ")"; // Crea las bolsas con el residuo de la división por 10
      }

      const fullCrates = Math.floor(numericPart / 10); // Calcula la cantidad de cajas completas
      const pallets = ("[" + letter + "]").repeat(Math.floor(fullCrates / 5)); // Crea los palés cada 5 cajas

      const cratesLeft = fullCrates % 5; // Calcula las cajas restantes
      const crates = ("{" + letter + "}").repeat(cratesLeft); // Crea las cajas restantes

      result += pallets + crates + bags;
    });
  }

  return result;
}

// Ejemplo de uso:
const result1 = organizeGifts("76a11b520c54g15e");
console.log(result1); // -> [a]{a}{a}(aaaaaa){b}(b)

/*
 la complejidad de tiempo total del algoritmo es O(n + m), donde n(numero) es la longitud de la cadena de regalos y m(letras) es el número de partes resultantes de la división

 aunque siempre es posible mejorar los algoritmos, para este problema en particular, la complejidad O(n+m) ya es bastante eficiente y no es probable que haya una manera significativa de reducirla sin cambiar la lógica del algoritmo.
*/

/*
##SOLUCION PROPUESTA:

function organizeGifts(gifts) {
  const countGifts = gifts.match(/\d+/g)
  const nameGifts = gifts.match(/[^0-9]/g)

  let response = ""
  let i = 0

  for (let c of countGifts) {
    const g = nameGifts[i]
    let a = ""

    c = +c

    a += `[${g}]`.repeat(c / 50)
    c %= 50

    a += `{${g}}`.repeat(c / 10)
    c %= 10

    a += `(${g.repeat(c)})`.repeat(+!!c)

    response += a
    i++
  }

  return response
}

bastante mas sencilla parece.
complejidad: O(n)

ambas soluciones tienen la misma complejidad O(n), donde n es la longitud de la cadena de entrada. La diferencia entre O(n) y O(n + m) es que la segunda incluye dos variables n y m, que pueden representar diferentes longitudes o tamaños de entrada.

En el caso de las dos soluciones que estamos comparando, ambas tienen una complejidad lineal O(n), donde n es la longitud de la cadena de entrada. En ambos casos, la complejidad de la solución depende principalmente del tamaño de la cadena de entrada y no del número de grupos de regalos.
*/
