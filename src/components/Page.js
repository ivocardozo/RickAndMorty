import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'
import classes from './Page.module.css'

const Page = () => {
  const pageContext = useContext(RickMortyContext)
  const { info, fetchPage } = pageContext

  return (
      <Pagination
        className={classes.pages}
        size='large'
        color='primary'
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
  )
}

export default Page
