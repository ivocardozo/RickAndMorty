import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'

const Page = () => {
  const dataContext = useContext(RickMortyContext)
  const {info, fetchPage} = dataContext
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
