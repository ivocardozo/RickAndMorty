import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'
import classes from './Page.module.css'

const Page = () => {
    const appContext = useContext(RickMortyContext)
    const { info, fetchPage } = appContext
  return (
    <div>
      <Pagination
        className={classes.pages}
        color='primary'
        size='large'
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  )
}

export default Page
