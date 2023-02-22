import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const { items } = props
  return (
    <ul>
        {items.map(itemObject => (
            <TodoItem key={itemObject.id} text={itemObject.text}/>
        ))}
    </ul>
  )
}

export default Todos
