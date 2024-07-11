import React from 'react';   // importer le composant React

function Heros(props){
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.surnom}</h1>
            {props.children}

        </div>
    )
}
export default Heros;