funcionDeclarada();

function funcionDeclarada() {
  console.log("Hola, esto es una funcion declarada");
}

function funcionDeclaradaQueDevuelveValor() {
  console.log("Uno");
  return 5 + 5; // Aqui se retiene la ejecucion por el return
  console.log("Dos");
  console.log("Tres");
  return "Esto es una funcion que devuelve valor";
}

let funcionValor = funcionDeclaradaQueDevuelveValor();

console.log(funcionValor);

// Funcion Anónima o Expresada

const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada que no se puede ejecutar antes de inicializar"
  );
};
funcionExpresada();

/* Tipos de Operadores
	Operadores Relacionales

	= 1 Igual es asignacion de variable
	== 2 iguales es comparacion de valores
	=== 3 iguales es comparacion de tipo de dato y de valores
*/

console.log(7 == 7);
console.log(7 == "7");
console.log(0 == false);

console.log(7 === 7);
console.log(7 === "7");
console.log(0 === false);

/* Incremento Decremento */
let i = 3;
//i=i +2;
i /= 3;
console.log(i);

// Operador Unario
//i++;
console.log(i);
