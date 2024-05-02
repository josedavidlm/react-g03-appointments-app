export const fetchCharacters = async (page = 1) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`

  const response = await fetch(url)

  return await response.json()
}

export const getCharacterById = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`

  const response = await fetch(url)

  return await response.json()
}