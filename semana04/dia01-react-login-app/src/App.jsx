import { useState } from "react"
import { getProducts, login } from "./services/auth"

function App() {
  const initialState = {
    email: '',
    password: ''
  }

  const [form, setForm] = useState(initialState)
  const [token, setToken] = useState('')
  const [products, setProducts] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    console.log('Estoy enviando las credenciales del usuario...', form)

    const data = await login(form)

    console.log(data)

    setToken(data.token)
  }

  const handleGetProducts = async () => {
    const data = await getProducts(token)

    setProducts(data.products)
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center">
        Login
      </h1>

      {JSON.stringify(form)}

      {token}

      <form
        className="flex flex-col gap-2 p-8"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          className="border p-3 shadow-sm rounded-md"
          placeholder="jhondoe@gmail.com"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          className="border p-3 shadow-sm rounded-md"
          placeholder="Ej. supersecret"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="submit"
          className="border p-3 bg-sky-700 text-white rounded-md cursor-pointer"
          value="Login"
        />
      </form>

      {
        token ? (
          <>
            <button
              className="border p-3 bg-green-700 text-white rounded-md cursor-pointer"
              onClick={handleGetProducts}
            >Get all products</button>

            <div>{JSON.stringify(products)}</div>
          </>
        )
        : (
          <h4>¡No hizo login!</h4>
        )
      }
      
    </main>
  )
}

export default App
