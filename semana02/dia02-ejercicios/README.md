# Javascript Ejercicios

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(function(oveja) {
    const nameLowered = oveja.name.toLowerCase()
    
    const isRedColor = oveja.color === 'rojo'
    const hasLetterN = nameLowered.includes('n')
    const hasLetterA = nameLowered.includes('a')

    return isRedColor && hasLetterN && hasLetterA
  })
  
  // Solución con REGEX
  //   return ovejas.filter(function(oveja) {
  //     const regex  = /.*[nN].*[aA]|.*[aA].*[nN].*/

  //     const isRedColor = oveja.color === 'rojo'
  //     const validateNorA = regex.test(oveja.name)

  //     return isRedColor && validateNorA
  //   })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

### [Reto10 - La  máquina de cambio](https://2021.adventjs.dev/challenges/10)

```js
/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que 
"calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra"
en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

function getCoins(change) {
  // Aquí tu lógica
  const coins = [1, 2, 5, 10, 20, 50]
  let acc = change
  
  return coins
    .reverse()
    .map(function (coin) {
      let quotient = Math.floor(acc / coin)
      if (quotient > 0) acc = acc % coin
      return quotient
    })
    .reverse()
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

### [Reto13 - Envuelve regalos con asteriscos](https://2021.adventjs.dev/challenges/13)

```js
// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

function wrapGifts(gifts) {
  // Aquí la lógica de esta función
  
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
```

* https://adventjs.dev/ (2021)
