import React, { useContext } from 'react'
import { RickMortyContext } from '../context'
import { Pagination } from '@material-ui/lab'

const Page = () => {
    const appContext = useContext(RickMortyContext)
  return (
    <div>
      <Pagination
        count={20}
      />
    </div>
  )
}

export default Page
