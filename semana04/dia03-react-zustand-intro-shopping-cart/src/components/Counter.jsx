import { useCounterStore } from "../store/counter"

export default function Counter() {
  const {
    count,
    increment,
    decrement,
    incrementByValue
  } = useCounterStore()

  return (
    <div className="flex flex-col items-center bg-[#CD8D7A] p-4">
      <h3 className="text-3xl">Counter with Zustand</h3>

      <div className="flex items-center gap-4 mt-4">
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={() => incrementByValue(-10)}
        >
          -10
        </button>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={decrement}
        >
          -1
        </button>
        <span className="font-bold text-4xl">{count}</span>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={increment}
        >
          +1
        </button>
        <button
          className="p-3 bg-green-500 rounded-lg"
          onClick={() => incrementByValue(10)}
        >
          +10
        </button>
      </div>
    </div>
  )
}