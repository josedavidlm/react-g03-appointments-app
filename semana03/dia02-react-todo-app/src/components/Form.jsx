import { useState } from "react"

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    // Evita que se actualice la página
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    onSubmit(newTodo)

    // DONE: Limpiar la caja de texto después de añadir un nuevo todo
    setInput('')

    // console.log(input)
    // console.log('Agregando nueva tarea...')
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full border my-3 p-3"
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        required
        onChange={handleChange}
        value={input}
      />
      <input
        className="bg-blue-300 font-bold rounded-lg px-2 py-2 cursor-pointer"
        type="submit"
        value="Añadir"
      />
    </form>
  )
}

export default Form