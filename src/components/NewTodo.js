import React, { useRef } from 'react'

const NewTodo = () => {
    const textRef = useRef('')
    const submitHandler = (event) => {
        event.preventDefault()

        const enteredInputText = textRef.current.value
        if(enteredInputText.trim() === 0) {
            return
        }
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
