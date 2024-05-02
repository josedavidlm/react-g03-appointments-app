import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCharacterById } from "../services/characters"

const CharacterPage = () => {
  const { id } = useParams()

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacter)
      // .then(data => setCharacter(data))
  }, [])


  return (
    <>
      <div className='card w-50 mx-auto'>
        <h5 className="card-header">
          Character Detail {id}
        </h5>
        <div className='card-body'>
          <img className="img-fluid" src={character?.image} />
          <h4 className="mt-2">{character?.name}</h4>
          <h5 className="mt-2">{character?.species}</h5>

          <Link to="/" className="btn btn-primary">Go back</Link>
        </div>
      </div>

      {/* {JSON.stringify(character)} */}
    </>
  )
}

export default CharacterPage