import { useState } from "react"

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)
  const [resultValue, setResultValue] = useState('')

  const handleWeight = (event) => {
    const value = event.target.value

    setWeight(value)

    setResult(weight / ((height / 100) ** 2))

    bodyMassIndexResult()
  }

  const handleHeight = (event) => {
    const value = event.target.value

    setHeight(value)

    setResult(weight / ((height / 100) ** 2))

    bodyMassIndexResult()
  }

  const bodyMassIndexResult = () => {
    let result2 = ''

    if (result < 18.5) {
      result2 = 'Baja'
    } else if (result >= 18.5 && result <= 24.9) {
      result2 = 'Normal'
    } else if (25 < result < 29.9) {
      result2 = 'Sobrepeso'
    } else if (result > 30) {
      result2 = 'Obeso'
    } else {
      result2 = 'Datos incorrectos'
    }

    setResultValue(result2)
  }

  return (
    <section>
      <h1 className="text-3xl text-red-600 font-bold text-center">
        IMC Calculator
      </h1>
      <div>
        <p>Weight: {weight} kg</p>
        <input
          type="range"        
          min="50"
          max="200"
          onChange={handleWeight}
          value={weight}
        />
      </div>

      <div>
        <p>Height: {height} cm</p>
        <input
          type="range"        
          min="50"
          max="200"
          onChange={handleHeight}
          value={height}
        />
      </div>

      <p>
        Tu IMC es {result}
      </p>

      <p>
        Estado de IMC: {resultValue}
      </p>

    </section>
  )
}

export default App
