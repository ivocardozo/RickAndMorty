import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

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
    <div>
      <NewTodo />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
