import React from 'react'
import Person from './Person'
function NameList() {
    // const names = ['Kadija', 'Sara' , 'Elyas', 'Fred']; // création d'un tableau de noms ARRAY
    // on déclare une variable intermediaire
    // const listeDesNoms = names.map(name=><h2>{name}</h2>)

//   return (
    // afficher les noms dans des balises h2 selon leur index dans le tableau
    // <div>
{/* // <h2>{names[0]}</h2>
// <h2>{names[1]}</h2>
// <h2>{names[2]}</h2> */}

   {/* utiliser une boucle pour afficher les noms  */}
{/* {
    names.map(name=><h2>{name}</h2>)
} */}


{/* par variable intermediaire */}
    // <div>{listeDesNoms}</div>
{/* </div>
  ) */}


  // déclaration d'un tableau d'objets
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  //premiere methode pour afficher les données
// const personsList = persons.map(person=><h4>Hi ! I am {person.name} . I'm {person.age} years old , and i like {person.skill}</h4>)

//deuxieme methode pour afficher les données
const personsList = persons.map(person => <Person key={person.id} person = {person} />)
return (
    <div>{personsList}</div>
);
}

export default NameList