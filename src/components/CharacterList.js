import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import Character from './Character'
import classes from './CharacterList.module.css'

const CharacterList = () => {
  
  const appContext = useContext(RickMortyContext)
  const { data } = appContext

  return (
    <div className={classes.gridList}>
      {data.map(char => (
        <Character key={char.id} image={char.image} name={char.name} />
      ))}
    </div>
  )
}

export default CharacterList
