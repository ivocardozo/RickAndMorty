import { createContext, useState } from 'react'

const mockData = [
    {
        name: "Rick",
        id: '1'
    },
    {
        name: "Morty",
        id: '2'
    }
]

const RickMortyContext = createContext()

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
