export const fetchPokemons = async (page, limit=12) => {
  const offset = (page - 1) * limit

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)

  return await response.json()
}