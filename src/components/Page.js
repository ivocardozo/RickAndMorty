import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { RickMortyContext } from '../context'

const Page = () => {
    const appContext = useContext(RickMortyContext)
    const { info, fetchPage } = appContext
  return (

    <div>
      <Pagination
        color="primary"
        size="large"
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  )
}

export default Page
