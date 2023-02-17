import React from 'react'
import classes from './Character.module.css'

const Character = ({name, image}) => {
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={image}
        alt={name}
      />
    </div>
  )
}

export default Character
