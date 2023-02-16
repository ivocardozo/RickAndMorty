import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import Character from './Character'
import classes from './CharacterList.module.css'

const CharacterList = () => {
    const appContext = useContext(RickMortyContext)
    const { data } = appContext
  return (
    <div className={classes.gridList}>
      {data.map(item => (
        <Character
            key={item.id}
            name={item.name}
            image={item.image}
        />
      ))}
    </div>
  )
}

export default CharacterList
