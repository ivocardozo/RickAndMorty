import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import classes from './CharacterList.module.css'

const CharacterList = () => {
    const appContext = useContext(RickMortyContext)
    const { data } = appContext
  return (
    <div className={classes.gridList}>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}

export default CharacterList
