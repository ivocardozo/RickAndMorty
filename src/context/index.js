import React, { useState, useContext, useEffect } from 'react'

// create context
const url = 'https://rickandmortyapi.com/api/character'
const RickMortyContext = React.createContext()

//create provider
const RickMortyProvider = (props) => {
  // Initialize data
  const [data, setData] = useState([])
  const [info, setInfo] = useState([])

  //initialize loading
  const [isLoading, setIsLoading] = useState(true)

  //Call api for promise and set Data
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

  const fetchPage = page => {
    let query = `${url}/?page=${page}`
    console.log(query)
    fetchData(query)
  }

  return (
    <RickMortyContext.Provider
      value={{
        info,
        data,
        fetchPage,
        isLoading
      }}
    >
      {props.children}
    </RickMortyContext.Provider>
  )
}

export { RickMortyProvider, RickMortyContext}
