console.log('¡Hola Javascript!')

// Esto es un comentario en un línea

/*
  Esto
  es
  un
  comentario
  de múltiples
  líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt

// NUMBER
const numero1 = 20 // number
const numero2 = 20.50 // number
const numero3 = -36 // number

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING O cadena de texto

const alumna = 'Marisol'
const alumno = "Marco"
const numero4 = "200"
const numero5 = 200

console.log(alumna, typeof alumna)
console.log(alumno, typeof alumna)
console.log(numero4, typeof numero4)
console.log(numero5, typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = false

console.log(tieneDescuento, typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre, typeof nombre)

// NULL

let apellido = null

console.log(apellido, typeof apellido) // 👀

// Tipos de datos adicionales: Object, Function, BigInt, Symbol

// VARIABLES Y CONSTANTES

//  ECMASCRIPT 5 === ES5 --> VAR
//  ECMASCRIPT 6 === ES6 --> CONST, LET

// CONST -> ES6 (El uso de const es lo recomendado)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 16

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

let edad2 // No es obligatorio inicializarlo

edad2 = "36"
edad2 = true
edad2 = 22

console.log(edad2, typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elevado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADORES DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este oprador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 != 1) // false

// Operador de igualdad y desigualdad estricta (===) (✅ ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelve un valor booleano (true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== 1) // false

// OPERADORES DE COMPARACIÓN, siempre devuelven un boolean

console.log(8 > 5) // true
console.log(5 < 1) // false
console.log(8 >= 5) // true
console.log(8 <= 5) // false

// OPERADORES LÓGICOS (and, or, negación)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// Operador de cadena (concatenación)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

// EJERCICIOS (TODO)

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver False
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla: SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF)

if (true) {
  // El bloque que se ejecuta si la condición es verdadera (true)
}

const numero = 34

const esPar = numero % 2 === 0

if (esPar) {
  console.log('Este número es par')
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // El bloque que se ejecuta si la condición es verdadera (true)
} else {
  // Se ejecuta este bloque si la condición es false
}

if (esPar) {
  console.log('Este número es par')
} else {
  console.log('Este numero es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)

const hero = 'Spiderman' // 'Victor'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe aún 😒')
}

// CONDICIONALES (SWITCH)

switch (hero) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe aún 😒')
}

// ESTRUCTURAS REPETITIVA

// FOR (Sirve para repetir una o varias instrucciones)

for(let i = 0; i < 10; i++) {
  console.log(i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log(j)
  j = j + 1
  // j++
}

// DO WHILE

let k = 0

do {
  console.log(k)
  k = k + 1
  // k++
} while (k < 10)

// FOR OF

// FOR IN


// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 37
console.log(edadPersona)
if (edadPersona >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

// FUNCIONES (Son bloques de código que podemos reutilizar)

// 1. Definimos una función
function nombreDeLaFuncion() {
  // Cuerpo/bloque de la función donde va la lógica a ejecutar
}

// 2. Ejecutar/llamar una función
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy Frontend')
}

imprimirMiNombre()
imprimirMiNombre()

// Funciones con parámetros

function imprimirUnNombre(nombre) {
  console.log('imprimirUnNombre:', 'Hola soy ' + nombre)
}

imprimirUnNombre() // Hola soy undefined
imprimirUnNombre('Marisol') // Hola soy Marisol

function imprimirNombreYApellido(nombre, apellido, edad) {
  // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.') // Concatenación (operador de concatenación)
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años.`) // Template strings
}

imprimirNombreYApellido('Victor', 'Villazón', 37)

// Funciones con valores por defecto

function imprimirNombreYApellidoConValoresPorDefecto(nombre = 'Anónimo', apellido = '', edad) {
  // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.') // Concatenación (operador de concatenación)
  // if (!edad) {
  //   console.log('Faltó ingresar la edad')
  //   return
  // }
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años.`) // Template strings
}

imprimirNombreYApellidoConValoresPorDefecto()

// Funciones sin retorno de valor

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(37)
esMayorOMenorDeEdad(7)
esMayorOMenorDeEdad(3)

// Funciones con retorno de valor

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

console.log(esMayorOMenorDeEdadConRetorno(15))
console.log(esMayorOMenorDeEdadConRetorno(25))
console.log(esMayorOMenorDeEdadConRetorno(13))

// EJERCICIOS (TODO)

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

// PROMPT para leer valores del usuario
// const tuEdad = prompt('Ingresa tu edad')
// console.log(tuEdad)


// ARROW FUNCTIONS - Funciones flecha

// Aparece en ES6, y son una forma alternativa y más corta de escribir funciones en Javascript


// Forma en ES5

function suma(numero1, numero2) {
  // Lógica de la función
  return numero1 + numero2
}

suma(5, 9) // 14

// Forma en ES6

const multiplicacion = (numero1, numero2) => {
  // logica de la funcion

  return numero1 + numero2
}

const resta = (numero1, numero2) => numero1 - numero2

const duplicarNumero = numero => numero * 2

console.log(duplicarNumero(9))

// OPERADOR TERNARIO - CONDICIÓN ? TRUE : FALSE

const esPublico = false

let mensaje = ''

if (esPublico) {
  mensaje = 'Soy de acceso público'
} else {
  mensaje = 'Soy un contenido privado'
}

const mensaje2 = esPublico ? 'Soy de acceso público' : 'Soy un contenido privado'

console.log(mensaje2)