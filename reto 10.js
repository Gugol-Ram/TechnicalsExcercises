/*
#INSTRUCCIONES
Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

   1
  2 3
 1 2 3
1 2 3 1
   |

Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

  *
 @ o
* @ o
  |

Nota:

    El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
    Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
    Los adornos tienen un espacio en blanco entre ellos de separación.
    Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.


*/

function createChristmasTree(ornaments, height) {
  let tree = "";

  const width = height * 2 - 1; // Calculate the number of lines needed for the tree

  ornaments = [...ornaments.repeat(60)]; //multiplico lo que me pasen como ornamentos * 60 para poder construir el arbol, es un valor arbitrario para tener adornos suficientes. se asume que el usuario dará una altura acorde a la cadena de ornamentos

  for (const treeHeight of Array.from({ length: height }).keys()) {
    //array.from para crear un NUEVO array, con longitud = a la altura del arbol.
    // keys lo utilizo para iterar los indices de ese nuevo array, para generar las capas
    const layerWidth = treeHeight * 2 + 1; //calculo el ancho de cada linea, secuencia 1 3 5 etc

    tree +=
      " ".repeat((width - layerWidth) / 2) +
      ornaments.splice(0, treeHeight + 1).join(" ") +
      "\n"; //agrego los espacios necesarios a la izquierda, y con splice voy cortando ornamentos para pasarlos a la siguiente capa
  }
  tree += " ".repeat(width / 2) + "|" + "\n"; //agrego el tronco

  return tree;
}

// Ejemplos de uso:
console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("*@o", 3));

//bastante complicado resultó este.
