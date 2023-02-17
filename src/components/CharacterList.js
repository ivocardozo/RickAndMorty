import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import classes from './CharacterList.module.css'

const CharacterList = () => {
    const dataContext = useContext(RickMortyContext)
    const { data } = dataContext
  return (
    <div className={classes.gridList}>
        {data.map(character => (
            <li key={character.id}>{character.name}</li>
        ))}
    </div>
  )
}

export default CharacterList
