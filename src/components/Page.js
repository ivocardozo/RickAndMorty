import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { RickMortyContext } from '../context'

const useStyles = makeStyles((theme) => ({
    pages: {
        backgroundColor: '#dadada',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        padding: '1rem',
        transform: 'scale(1.1)'
    }
}))

const Page = () => {
    const classes = useStyles()
    const appContext = useContext(RickMortyContext)
    const { info, fetchPage } = appContext
  return (

    <div>
      <Pagination
        className={classes.pages}
        color="primary"
        size="large"
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  )
}

export default Page
