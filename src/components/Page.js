import React, { useContext } from 'react'
import { Pagination } from '@material-ui/lab'
import { RickMortyContext } from '../context'

const Page = () => {
    const appContext = useContext(RickMortyContext)
    const { info } = appContext
  return (
    <div>
      <Pagination
        count={info.pages}
      />
    </div>
  )
}

export default Page
