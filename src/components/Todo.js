import React from 'react'
import './todo.css'
function Todo({ todo }) {
  let theme = todo.completed ? 'green' : 'red';  // Définition de la variable "theme" qui sera 'green' si todo.completed est vrai, sinon 'red'

  return (
   
      <div className={theme}> {/* Application de la classe CSS basée sur l'état "completed" du todo */}
        <h2>Titre : {todo.title}</h2>
        <p>User id : {todo.userId}</p>
        <p>Statut : {todo.completed ? 'Completed' : 'Non completed'}</p>
        <hr/>
      </div>
    

  )
}

export default Todo