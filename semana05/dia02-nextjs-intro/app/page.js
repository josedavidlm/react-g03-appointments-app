import Link from "next/link"
import CounterButton from "./componentes/CounterButton"

const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(url)

  const data = await response.json()

  console.log(data)

  return data.results
}

export default async function Home() {
  const pokemons = await fetchPokemons()

  return (
    <>
      <h1 className="text-3xl text-center">Pokemons Page</h1>

      <CounterButton />

      <ol>
        {pokemons.map(pokemon => {
          return (
            <li key={pokemon.url}>
              <Link href={`/${pokemon.name}`}>
                {pokemon.name}
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  );
}
