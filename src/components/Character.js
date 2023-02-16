import React from 'react'

import classes from './Character.module.css'

const Character = ({name, image}) => {
  return (
    <div>
      <div className={classes.root}>
        <img src={image} alt={name} className={classes.image}/>
      </div>
    </div>
  )
}

export default Character
