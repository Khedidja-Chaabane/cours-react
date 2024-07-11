import React from 'react';   //importer le composant React

// function Greet(props){           // création d'un composant par fonction
//     console.log(props);
//     return (
//         <div>
//                     <h1>Hello World! I'm learning about React</h1>

//              <h1>Hello {props.name} vous avez {props.age} !</h1>
//             {props.children}
//         </div>
//        )
// }
//autre façon de faire

function Greet ({name , age , children}){
    return(
        <div>
            <h1>Hello {name} vous avez {age} !</h1>
            {children}
        </div>
    )
}

export default Greet;     // Exporter la fonction Greet pour qu'elle puisse être utilisée dans d'autres composants