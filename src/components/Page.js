import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'

const Page = () => {
    const appContext = useContext(RickMortyContext)
    const { info, fetchPage } = appContext
  return (
    <div>
      <Pagination
        count={info.pages}
        onChange={(event, page) => fetchPage(page)}
      />
    </div>
  )
}

export default Page
