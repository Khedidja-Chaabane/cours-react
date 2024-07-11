import React from 'react'

function Person({person}) {
  return (
    <div>
        <h4>Hi ! I am {person.name} . I'm {person.age} years old , and i like {person.skill}</h4>
    </div>
  )
}

export default Person