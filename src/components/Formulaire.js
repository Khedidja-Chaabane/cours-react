import React from 'react'
import './formulaire.css'

function Formulaire() {
    function handleUsernameChange(event) {
        console.log(event.target.value);
    };
    //fonction fléchée 
    const handleTopicChange = (event) => {
        if (event.target.value == 'Diana') {
            //application du style pour la personne Diana en ajoutant une class spécifique
            event.target.className = 'diana';
        }
    }
    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" onChange={handleUsernameChange} />
                <label>Comment</label>
                <input type="text" />
                <label>Topic</label>
                <input type="text" onChange={handleTopicChange} />

                <input type="submit" />


            </form>
        </div>
    )
}

export default Formulaire