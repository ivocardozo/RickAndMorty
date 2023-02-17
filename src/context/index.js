import React, { useEffect, useState } from 'react'

const url = 'https://rickandmortyapi.com/api/character'
const RickMortyContext = React.createContext()

const RickMortyProvider = (props) => {
    useEffect(() => {
        fetchData(url)
    }, [])

    const [data, setData] = useState([])

    const fetchData = async (url) => {
        let query = `${url}`
        const res = await fetch(query)

        res 
            .json()
            .then(res => {
                setData(res.results)
            })
            .catch(error => {})
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
