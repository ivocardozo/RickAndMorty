import React, { useContext } from 'react'
import { Pagination } from '@material-ui/lab'
import { RickMortyContext } from '../context'

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
