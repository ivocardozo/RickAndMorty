import logo from './logo.svg';
import './App.css';


import Container from "@material-ui/core/Container";
import CharactersList from "./components/CharacterList";
import Search from "./components/Search";
import Page from "./components/Page"

function App() {
  return (
    <div>
       <Container maxWidth="md">
        <Page />
        <Search />
        <CharactersList />
      </Container>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
