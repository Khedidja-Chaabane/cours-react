import React from 'react'
import './todo.css'
function Todo({todo}) {
    let theme = todo.completed == true ? 'green': 'red';
  return (
    <div className='theme'>
        Todo
        </div>
  )
}

export default Todo