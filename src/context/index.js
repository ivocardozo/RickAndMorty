import { createContext, useState, useEffect } from 'react'

const RickMortyContext = createContext()
const url = 'https://rickandmortyapi.com/api/character'
const RickMortyProvider = (props) => {
    useEffect(() => {
        fetchData(url)
    }, [])

    const [data, setData] = useState([])
    const fetchData = async (url) => {
        const res = await fetch(url)
        res
            .json()
            .then(res => {
                setData(res.results)
            })
    }
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
