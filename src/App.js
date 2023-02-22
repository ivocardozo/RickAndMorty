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
  const addTodoHandler = (text) => {
    console.log('inside add todo handler')
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
