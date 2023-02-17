import Todos from "./components/Todos";

const todos = [
  {
    item: 'Learn React',
    id: '1'
  },
  {
    item: 'Learn Redux',
    id: '2'
  }
]

function App() {
  return (
    <Todos items={todos}/>
  );
}

export default App;
