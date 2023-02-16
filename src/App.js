import React, { useContext } from 'react'

import { RickMortyContext } from './context/index'

function App() {
  const appContext = useContext(RickMortyContext)
  const { data  } = appContext
  console.log("<<<<<<< data: ", data)

  return (
    <div>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
