import React, { useState } from 'react';
import axios from 'axios';

function NewContact() {

    // const [newContact , setNewContact] = useState({
    //     nom: "" ,
    //     prenom: "",
    //     email: "",
    //     message: ""
    // });
    // const [responseText, setResponseText] = useState('');
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewContact({
    //         ...newContact,
    //         [name]: value
    //     });
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:5000/nouveauContact', newContact)
    //         .then((response) => {
    //             setResponseText(response.data.text);
    //         })
    //         .catch((error) => {
    //             console.error('There was an error!', error);
    //             setResponseText('There was an error submitting the form');
    //         });
    // };
    return (
        <React.Fragment>
            <div>


                <h1>New Contact</h1>
                {/* <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom">Nom:</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={newContact.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="prenom">Prenom:</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={newContact.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={newContact.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={newContact.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseText && <p>{responseText}</p>}
        </div> */}
                <form action="http://localhost:5000/nouveauContact" method="post">
                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" />
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" />
                    <label for="email">Adresse mail :</label>
                    <input type="text" id="email" name="email" />
                    <label for="date_contact">Date :</label>
                    <input type="date" id="date_contact" name="date_contact " />
                    <label for="message">Message :</label>
                    <textarea name="message" id="message"></textarea>
                    <input type="submit" />
                </form>
            </div>


        </React.Fragment>

    )
}

export default NewContact