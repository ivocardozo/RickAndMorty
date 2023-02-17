import React from 'react'

const Todos = (props) => {
    const { items } = props
  return (
    <ul>
        {items.map(itemObject => (
            <li key={itemObject.id}>{itemObject.item}</li>
        ))}
    </ul>
  )
}

export default Todos
