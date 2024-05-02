import { useState, useEffect } from "react"

import { fetchPokemons } from "./services/pokemons"

function App() {
  // const [counter, setCounter] = useState(0)
  const LIMIT = 12

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(108)
  const [total, setTotal] = useState(0)

  // useEffect(fx, [dependencias]) <- se ejecuta cuando hay cambios en las dependencias(estados)
  // useEffect(fx, []) <- se ejecuta la primera vez que el componente se renderiza. Esto sirve para hacer llamados a APIs.

  useEffect(() => {
    console.log('useEffect: se ejecuta solo la primera vez')

    fetchPokemons(page, LIMIT)
      .then(data => {
        setPokemons(data.results)
        setTotal(data.count)
      })
  }, [page])

  const handlePrev = () => {
    if (page === 1) {
      return
    }
   
    setPage(page - 1)
  }

  const handleNext = () => {
    // TODO: Validar la paginación cuando llega a la última página. No debe permitir avanzar más allá de la última página.
    const lastPage = Math.ceil(total / LIMIT)

    if (page === lastPage) {
      return
    }

    setPage(page + 1)
  }

  return (
    <main className="container m-auto border p-6 mt-6">
      <h1 className="text-3xl font-bold underline text-center">Poké Catalog</h1>
      
      <section className="mt-6 grid grid-cols-4 gap-4">
        {/* TODO: Renderizar cada nombre de los pokemons que se encuentrn en el estado pokemons   */}
        {pokemons.map(pokemon => {
          {/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png */}
          const id = pokemon.url.split('/').at(-2)
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

          return (
            <article
              key={pokemon.url}
              className="border rounded-lg bg-slate-100 m-2 p-2"
            >
              <h3 className="font-bold text-center uppercase">{pokemon.name}</h3>

              {/* TODO: mostrar la imagen del pokemon correspondiente que se encuentra en su objeto de detalle en la clave "sprites.other.official-artwork.front_default" */}

              <img src={pokemonImage} className="w-40" />
            </article>
          )
        })}

      </section>
      
      <div className="flex justify-between">
        <button
          className="p-2 bg-blue-300 min-w-20"
          onClick={handlePrev}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          className="p-2 bg-blue-300 min-w-20"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      
      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}


      {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
    </main>
  )
}

export default App
