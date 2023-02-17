import { useContext } from "react";
import { RickMortyContext } from "./context";


function App() {
  const dataContext = useContext(RickMortyContext)
  const { data } = dataContext
  return (
    <div>
      {data.map(item=> (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default App;
