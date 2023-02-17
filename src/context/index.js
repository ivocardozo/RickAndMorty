import { createContext, useState, useEffect } from 'react'

const RickMortyContext = createContext()
const url = 'https://rickandmortyapi.com/api/character'
const RickMortyProvider = (props) => {
    useEffect(() => {
        fetchData(url)
    }, [])

    const [data, setData] = useState([])
    const [info, setInfo] = useState([])

    const fetchData = async (url) => {
        const res = await fetch(url)
        res
            .json()
            .then(res => {
                setData(res.results)
                setInfo(res.info)
            })
    }

    const fetchPage = page => {
        let query = `${url}/?page=${page}`
        fetchData(query)
    }

  return (
    <RickMortyContext.Provider
        value={{
            data,
            info,
            fetchPage
        }}
    >
      {props.children}
    </RickMortyContext.Provider>
  )
}

export { RickMortyProvider, RickMortyContext }
