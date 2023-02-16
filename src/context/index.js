import React, { useState, useContext, useEffect } from 'react'

//creact context
const url = 'https://rickandmortyapi.com/api/character'
const RickMortyContext = React.createContext()

//create provider
const RickMortyProvider = (props) => {
    //Initialize data
    const [data, setData] = useState([])
    const [info, setInfo] = useState([])

    //Initialize loading
    const [isLoading, setIsLoading] = useState(true)

    //Calll api for promise and set Data
    useEffect(() => {
        fetchData(url)
    }, [])

    const fetchData = async(url) => {
        let query = `${url}`
        const res = await fetch(query)
        res
            .json()
            .then(res => {
                setData(res.results)
                setInfo(res.info)
            })
            .catch(error => setIsLoading(true))
    }

    return (
        <RickMortyContext.Provider
            value={{
                data,
                isLoading, 
                info
            }}
        >
            {props.children}
        </RickMortyContext.Provider>
    )
}

export { RickMortyProvider, RickMortyContext }
