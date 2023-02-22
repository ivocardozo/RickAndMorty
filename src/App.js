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

  const removeTodoHandler = (todoId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
