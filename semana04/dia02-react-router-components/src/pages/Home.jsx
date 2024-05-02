import { useEffect, useState } from "react"
import { fetchCharacters } from "../services/characters"
import { Link, useLocation } from 'react-router-dom'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page = Number(searchParams.get('page')) || 1

  useEffect(() => {
    fetchCharacters(page)
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
  }, [page])

  return (
    <>
      <div className="list-group">
        {characters.map(character => {
          return (
            <Link
              key={character.id}
              to={`/character/${character.id}`}
              className="list-group-item list-group-item-action"
            >
              {character.name}
            </Link>
          )
        })}
      </div>

      {/* TODO: Terminar la paginación usando las rutas de react-router-dom */}

      <ul class="pagination mt-3 justify-content-center">
        <li class="page-item">
          <Link class="page-link" to={`?page=${page - 1}`}>Previous</Link>
        </li>
        {/* <li class="page-item"><a class="page-link" href="#">1</a></li> */}
        <li class="page-item">
          <Link class="page-link" to={`?page=${page + 1}`}>Next</Link>
        </li>
      </ul>

      {JSON.stringify(info)}
      {/* {JSON.stringify(characters)} */}
    </>
  )
}

const Home = () => {
  return (
    <>
      <h3>CharacterList</h3>

      <CharacterList />
    </>
  )
}

export default Home