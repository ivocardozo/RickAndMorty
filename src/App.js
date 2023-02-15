import logo from './logo.svg';
import './App.css';


import Container from "@material-ui/core/Container";
import CharactersList from "./components/CharacterList";

function App() {
  return (
    <div>
       <Container maxWidth="md">
        <CharactersList />
      </Container>
    </div>
  );
}

export default App;
