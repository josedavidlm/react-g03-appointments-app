// COMPONENTE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Hola React.js</h1>
//   )
// }

// export default App

// COMPONENTE USANDO ARROW FUNCTIONS con React Fragments

// const App = () => {
//   // const xx = 'hola'

//   return (
//     <>
//       {/* <h1>Hola React.js</h1> */}
//       <h2>Hola Vite</h2>
//     </>
//   )
// }

// COMPONENTES DE REACT SUSANDO MÚLTIPLES LÍNEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <div>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//     </div>
//   )
// }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//     </>
//   )
// }

// export default App

// SNIPPETS PARA CREAR COMPONENTES

// RFCE Y RFC

// ANINDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h4>Hola Victor</h4>
// }

// function Despedida() {
//   return <h4>Adios Victor</h4>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// export default App

// IMPORTANDO COMPONENTES EXTERNOS

// import Saludo from "./components/Saludo"
// import Despedida from "./components/Despedida"

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// export default App

// EXPRESIONES EN UN COMPONENTE

import Saludo from "./components/Saludo"
import Despedida from "./components/Despedida"

import { LISTA_DE_FRUTAS, EDAD } from './components/frutas'

const App = () => {
  const nombre = 'Victor'

  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      {/* Comentario en react dentro de JSX */}

      <Saludo />
      <Despedida />

      {1 + 2}

      {`HOLA ${nombre}`}

      {LISTA_DE_FRUTAS}

      {EDAD}
    </>
  )
}

export default App