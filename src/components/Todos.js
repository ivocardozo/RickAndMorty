import React from 'react'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todos = (props) => {
    const { items } = props
  return (
    <ul className={classes.todos}>
        {items.map(itemObject => (
            <TodoItem 
              key={itemObject.id} 
              text={itemObject.text}
              onRemoveTodo={props.onRemoveTodo.bind(null, itemObject.id)}
            />
        ))}
    </ul>
  )
}

export default Todos
