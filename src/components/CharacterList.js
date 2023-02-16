import React, { useContext } from 'react'

import { RickMortyContext } from '../context'
import classes from './CharacterList.module.css'
import Character from './Character'


const CharacterList = () => {
    const appContext = useContext(RickMortyContext)
    const { data } = appContext
  
  return (
    <div className={classes.gridList}>
        {data.map(char => (
            <Character 
                key={char.id}
                name={char.name}
                image={char.image}
            />
        ))}
    </div>
  )
}

export default CharacterList
