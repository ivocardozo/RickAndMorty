import React, { useState } from 'react'

const RickMortyContext = React.createContext()

const mockData = [
    {
        name: 'Rick',
        id: '1'
    },
    {
        name: 'Morty',
        id: '2'
    },
]

const RickMortyProvider = (props) => {
    const [data, setData] = useState(mockData)

    return (
    <RickMortyContext.Provider
        value={{
            data
        }}
    >
      {props.children}
    </RickMortyContext.Provider>
  )
}

export { RickMortyProvider, RickMortyContext }
