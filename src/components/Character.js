import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { ImageListItem, ImageListItemBar  } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        width: "8rem",
        height: "8rem",
        margin: "1rem",
        transition: 'transform 0.5s',
        '&:hover': {
          boxShadow: '0 10px 10px rgba(88, 176, 192, 0.8)',
          transform: 'scale(1.2)',
        },
        }
}))

const Character = ({name, image}) => {
    const classes = useStyles()
  return (
    <div>
      <ImageListItem key={image} className={classes.root}>
        <img src={image} alt={name}></img>
        <ImageListItemBar title={name}></ImageListItemBar>
      </ImageListItem>
    </div>
  )
}

export default Character
