// PASO-03: acceder al estado iniial y a las acciones
import { useSelector, useDispatch } from "react-redux"

import { increment, decrement, incrementByValue } from "../store/counter"

export default function Counter() {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())

  const handleDecrement = () => dispatch(decrement())

  const handleIncrementeBy10 = () => dispatch(incrementByValue(10))

  const handleDecrementeBy10 = () => dispatch(incrementByValue(-10))

  return (
    <div className="flex flex-col items-center bg-[#CD8D7A] p-4">
      <h3 className="text-3xl">Counter with Redux</h3>

      <div className="flex items-center gap-4 mt-4">
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={handleDecrementeBy10}
        >
          -10
        </button>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={handleDecrement}
        >
          -1
        </button>
        <span className="font-bold text-4xl">{counter}</span>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={handleIncrementeBy10}
        >
          +10
        </button>
      </div>
    </div>
  )
}