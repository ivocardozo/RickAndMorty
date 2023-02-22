import React, { useRef } from 'react'

const NewTodo = (props) => {
    const textRef = useRef('')
    const submitHandler = (event) => {
        event.preventDefault()

        const enteredInputText = textRef.current.value
        if(enteredInputText.trim() === 0) {
            return
        }
        props.onAddTodo(enteredInputText)
    }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input 
        type='text'
        id='text'
        ref={textRef}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
