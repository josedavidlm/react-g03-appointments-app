import { useState } from "react"

import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Form from "./components/Form"
import Stats from "./components/Stats"

const App = () => {
  const INITIAL_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: false
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(INITIAL_TODOS)

  const handleSubmit = (newTodo) => {
    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos) // <- Nos ayuda a insertar un nuevo todo
  }

  const handleRemoveTodo = (event) => {
    // const { id } = event.target.dataset
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos)

    //console.log('eliminando una tarea...', event.target.dataset.id)
  }

  const handleCompleted = (event) => {
    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    console.log(idSelected, isChecked)

    const newTodos = todos.map(todo => {
      if (todo.id === idSelected) {
        return { ...todo, completed: isChecked } // Modificamos la propiedad completed
      }
      return todo // Deja el objeto sin modificaciones
    })

    setTodos(newTodos)
  }

  const handleClearTodos = (event) => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <Header />

      <Form
        onSubmit={handleSubmit}
      />

      {/* TODO: RETO1 - Añadir una estadística de cuantas tareas estan completadas */}
      {/* TODO: RETO2 - Completar la funcionalidad del botón limpiar tareas */}

      {todos.length > 0 && (
        <Stats
          todos={todos}
          onClearTodos={handleClearTodos}
        />
      )}

      <section className="mt-8">
        <TodoList
          todos={todos}
          onCompleted={handleCompleted}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App