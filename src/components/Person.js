import React from 'react'
import './person.css'
function Person({person}) {
  let theme = person.name == 'Diana'? 'dianaStyle': 'silverStyle';
  
  return (
    <div>
        <h2 className={theme}>Hi ! I am {person.name} . I'm {person.age} years old , and i like {person.skill}</h2>
    </div>
  )
}

export default Person