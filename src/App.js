import { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

// const todos = [
//   {
//     item: 'Learn React',
//     id: '1'
//   },
//   {
//     item: 'Learn Redux',
//     id: '2'
//   }
// ]

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      id: new Date().toISOString(),
      text: text
    }
    setTodos(prevState => prevState.concat(newTodo))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
