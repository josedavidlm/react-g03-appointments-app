const Stats = ({ todos, onClearTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold">{completedTodos} de {totalTodos}</span>
      <button
        className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-600 duration-300"
        onClick={onClearTodos}
      >Limpiar tareas completadas</button>
    </div>
  )
}

export default Stats