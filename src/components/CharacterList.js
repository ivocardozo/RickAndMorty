import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { makeStyles } from '@material-ui/core/styles'
import { ImageList } from '@material-ui/core'
import Character from './Character'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%'
    }
}))

const CharacterList = () => {
    const classes = useStyles()
    const appContext = useContext(RickMortyContext)
    const { data } = appContext

  return (
    <ImageList className={classes.gridList}>
      {
        data.map(char => (
            <Character
                key={char.id}
                image={char.image}
                name={char.name}
            >
            </Character>
        ))
      }
    </ImageList>
  )
}

export default CharacterList
