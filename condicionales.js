// Condicionales
/* if-else*/

let edad = 8;
if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* if anidados
	if-else if-ese
*/

/*
dejame dormir = 0 a 5hs
buenos dias = 6 a 11hs
buenas tardes = 12 a 18hs
buenas noches = 19 a 23hs
*/

let hora = 6;
if (hora >= 0 && hora <= 5) {
  console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes");
} else {
  console.log("Good night");
}

if (hora < 6) {
  console.log("Déjame dormir");
} else if (hora > 6 && hora < 12) {
  console.log("Buenos dias");
} else if (hora > 11 && hora < 19) {
  console.log("buenas tardes");
} else {
  console.log("Good night");
}

/* 
Operador Ternario (condicion) ? verdadero : falso
*/
console.log("Operador Ternario");

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

/*switch - case*/

/*
domingo-0
lunes-1
martes-2
miercoles-3
jueves-4
viernes-5
sabado-6
*/

let dia = 6;
switch (dia) {
  case 0:
    console.log("Lunes");
    break;
  case 1:
    console.log("martes");
    break;
  case 2:
    console.log("miercoles");
    break;
  case 3:
    console.log("jueves");
    break;
  case 4:
    console.log("viernes");
    break;
  case 5:
    console.log("domingo");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("ingrese un numero del 0 al 6");
    break;
}

/***** LOOPS *****/
// CICLOS O BUCLES REPETITIVAS

let contador = 12;
while (contador < 10) {
  console.log(contador);
  contador++;
}

/*Con do-while el codigo se ejecuta al menos
una vez si la condicion no se cumple
*/

do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10);

/***  Bucle for ***/
/*
for(inicializacion de varible; condicion; 
	decremento o incremento){
	sentencias que ejecuta el for
	}
*/

for (i = 2; i < 10; i++) {
  console.log("bucle for: " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/** creando Objeto denis **/
const denis = {
  nombre: "denis",
  apellido: "mendoza",
  edad: 27,
};

// for-in solamente permite propiedades de un objeto

for (const propiedad in denis) {
  console.log(denis[propiedad]);
}

// for-of permite recorrer todos los elementos
// de cualquier objeto que sea iterable en JS

for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "hola mundo";
for (const caracter of cadena) {
  console.log(caracter);
}

/***** MANEJO DE ERRORES *****/

// try-catch

try {
  console.log("En el Try se agrega el codigo a evaluar");

  console.log("segundo mensaje en el try");
} catch (error) {
  console.log("catch, captura cualquier error surgido o lanzado en el try");
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de un bloque try-catch"
  );
}

// Personalizar nuestro try-catch

try {
  let numero = s;
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un número");
  }

  console.log(numero * numero);
} catch (error) {
  console.log("se produjo el siguente error: " + error);
}

// break & continue

const numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numeross.length; i++) {
  if (i === 5) {
    break; // se cumple la condicion y romple el ciclo
  }
  console.log(numeross[i]);
}

for (let i = 0; i < numeross.length; i++) {
  if (i === 5) {
    continue; // omite la iteracion del ciclo
  }
  console.log(numeross[i]);
}

/** numeros pares **/
console.log("Abajo imprime el RESTO de una Division");
let resto = function (num1, num2) {
  let resultado = num1 % num2;
  if (resultado !== 0 && resultado !== 1) {
    console.log("Numero primo");
  } else {
    console.log("Numero compuesto");
  }
  console.log(resultado);
};
resto(5, 5);

/**** PARAMETROS REST ****/

function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(2, 3));
console.log(sumar(2, 3, 5));
console.log(sumar(2, 3, 5, 10));

/**** OPERATOR SPREAD **/

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

/*** Arrow Function ***/

// const saludar = (nombre) => console.log(`hola ${nombre}`);
// saludar("Denis");

const restar = (a, b) => a - b;

console.log(restar(50, 20));
