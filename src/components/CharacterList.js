import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import classes from './CharacterList.module.css'
import Character from './Character'

const CharacterList = () => {
    const dataContext = useContext(RickMortyContext)
    const { data } = dataContext
  return (
    <div className={classes.gridList}>
      {data.map(item => (
        <Character 
            name={item.name}
            image={item.image}
        />
      ))}
    </div>
  )
}

export default CharacterList
