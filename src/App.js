import React, { useContext } from "react";
import { RickMortyContext } from "./context";
function App() {
  const appContext = useContext(RickMortyContext)
  const { data } = appContext
  return (
    <div>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
