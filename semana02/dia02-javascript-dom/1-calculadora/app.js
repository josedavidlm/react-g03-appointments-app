console.log('Hola JS')

let numeroActual = '0'
let operador = ''
let operando = ''

// const title = document.getElementById('title')
// const title = document.querySelector("#title")
// console.log(title.textContent)
// title.textContent = 'Calculadora v1.0'

const inputDisplay = document.querySelector(".inputDisplay")
const buttons = document.querySelectorAll("button")
// console.log(inputDisplay)
// inputDisplay.value = '99999'
// console.log(buttons)

// EVENTOS

buttons.forEach(function(button) {

  button.addEventListener('click', function(event) {
    // console.log('Hice click!')
    // console.log(event) // Información del evento en general
    // console.log(event.target) // información del elemento que desecadenó el evento
  
    const button = event.target
    const buttonText = button.textContent
  
    // console.log(buttonText)

    if ('+-*'.includes(buttonText)) {
      // Accionamos el operador
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // Aquí realizo las opreaciones matemáticas en base al número actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'AC') {
      // Limpiamos operandos, operadores, el input
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // Se presionó algún número
      numeroActual = Number(numeroActual + buttonText)
    }

    inputDisplay.value = numeroActual
  })

})

