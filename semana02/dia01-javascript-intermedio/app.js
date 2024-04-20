console.log('Hola JS')

// Tipos de datos primitivos

const numero = 339 // number
const cadena = 'Victor' // string
const esMayor = true // boolean
let undefinedValue // undefined
const soyNulo = null // null

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc...

const arregloVacio = [] // Arreglo vacío
const listDeValores = [1, 2, 3, 'Victor', 'Villazón', true, [1, 2, 3], undefined, null]

console.log(arregloVacio)
console.log(listDeValores)

// Lectura de los elementos de un arreglo

console.log(listDeValores[0]) // 1
console.log(listDeValores[4]) // Villazón
console.log(listDeValores[5]) // true
console.log(listDeValores[100]) // undefined

// Escritura en un arrelo

listDeValores[2] = 99

console.log(listDeValores)

// Insertar nuevos elementos en un arreglo (modifica el arreglo original)

listDeValores.push('javascript')

console.log(listDeValores)

// Remover elementos del final del arreglo (modifica el arreglo original)
listDeValores.pop()

console.log(listDeValores)

// Eliminar un elemento (modifica el arreglo original)

listDeValores.splice(4, 1)

console.log(listDeValores)

// Obtener el tamaño del arreglo

console.log(listDeValores.length) // 8
console.log('bienvenido'.length)

// MÉTODOS DE ARREGLOS (no afectar al arreglo original) 👇

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y devuelve un boolean (true o false)

const languages = ['javascript', 'java', 'php', 'python', 'C', 'c++', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(
  function (language) {
    // return language === 'java'
    // return language.includes('c') // ['javascript', 'c++']
    return language.toLowerCase().includes('c') // ['javascript', 'C', 'c++']
  }
)

console.log(resultado)
console.log(languages)

// TODO: Método MAP, investigar

// TODO: Método REDUCE, investigar

// OBJETOS

// {
//   KEY1: VALUE1,
//   KEY2: VALUE2
// }

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 37,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    },
    {
      nombre: 'Algoritmos',
      nota: 20
    }
  ]
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list
console.log(miObjeto['mi edad']) // OK ✅

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1]['nota'])
console.log(miObjeto.cursos[1].nota)

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
delete miObjeto.colorFavorito
console.log(miObjeto)

// INSERTAR UNA NUEVA PROPIEDAD A UN OBJETO

miObjeto.platilloFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING 

// Una forma de extraer las propiedades/elementos de un objeto o un arreglo en nuevas variables

// DESTRUCTURING PARA OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

const { nombre, apellido, cursos } = miObjeto

console.log(nombre, apellido, cursos)

const { nombre: nombreValor, apellido: apellidoValor } = miObjeto

console.log(nombreValor, apellidoValor)

// DESTRUCTURING PARA ARRAYS

const amigos = ['axl', 'briceida', 'carlos', 'cesar', 'diego']

const [ amigo1, amigo2, , , amigo3 ] = amigos

console.log(amigo1, amigo2, amigo3)

// SPREAD OPERATOR (operador ...)

// Extrae las propiedades de un objeto/arreglo para reutilizarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 6800,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Manuel',
  isVip: true
}

console.log(producto + cliente) // ❌ 💔 [object Object][object Object]

const nuevoObjeto = { ...producto, ...cliente } // ‼ Cuidado

console.log(nuevoObjeto)

// SPREAD OPERATOR EVITANDO COLISIONES DE PROPIEDADES

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente }
}

console.log(nuevoObjetoSinColisiones)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves (keys) del objeto
console.log(Object.values(producto)) // Obtenemos solo los valores (values) del objeto
console.log(Object.entries(producto)) // convertimos un objeto en un arreglo

// EJEMPLO FINAL CON OBJETOS


const hero = 'Spiderman' // 'Victor'

// if (hero === 'Batman') {
//   console.log('Hola soy Bruce')
// } else if (hero === 'Spiderman') {
//   console.log('Hola soy Peter')
// } else if (hero === 'Ironman') {
//   console.log('Hola soy Tony')
// } else {
//   console.log('No soy un heroe aún 😒')
// }

const SUPER_HEROES = {
  'Batman': 'Hola soy Bruce',
  'Spiderman': 'Hola soy Peter',
  'Ironman': 'Hola soy Tony',
}

console.log(SUPER_HEROES[hero] ?? 'No soy un heroe aún 😒')

// TODO: Desarrollar 3 retos del siguiente link para el miércoles

// https://2021.adventjs.dev/challenges



