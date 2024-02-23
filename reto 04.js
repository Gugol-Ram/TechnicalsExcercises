/*
## INSTRUCCIONES

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

INFO EXTRA:

🔸    Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
🔸    En el mensaje final no deben quedar paréntesis.
🔸    El nivel máximo de anidamiento es 2.

EJEMPLOS Y RESPUESTA ESPERADA:

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

*/

function decode(message) {
  // "sa(u(cla)atn)s"
  //               ^.
  const stack = []; //["sa"];
  let result = ""; // "santaclaus"
  // ""
  // "ntaclaus"

  for (let char of message) {
    if (char === "(") {
      stack.push(result);
      result = "";
    } else if (char === ")") {
      result = stack.pop() + result.split("").reverse().join("");
    } else {
      result += char;
    }
  }

  return result;
}

// Ejemplo de uso:
const a = decode("hola (odnum)");
console.log(a); // Resultado esperado: hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
