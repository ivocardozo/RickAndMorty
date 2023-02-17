import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'
import classes from './Page.module.css'

const Page = () => {
  const dataContext = useContext(RickMortyContext)
  const {info, fetchPage} = dataContext
  return (
    <div>
      <Pagination
        color='primary'
        size='large'
        className={classes.pages}
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  )
}


export default Page
