import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import classes from './CharacterList.module.css'
import Character from './Character'

const CharacterList = () => {
    const dataContext = useContext(RickMortyContext)
    const { data } = dataContext
  return (
    <div className={classes.gridList}>
        {data.map(character => (
            <Character 
                key={character.id}
                name={character.name}
                image={character.image}
            />
        ))}
    </div>
  )
}

export default CharacterList
