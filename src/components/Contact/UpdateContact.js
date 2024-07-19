import React from 'react'
import { Button, PinkButton } from '../Button.style'

function UpdateContact({contact}) { // passer l'objet en props
  return (
    <div>
        <form action={`http://localhost:5000/updateContact/${contact._id}?_method=PUT`}method="post">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" defaultValue={contact.nom} />
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" defaultValue={contact.prenom} />
                <label for="email">Adresse mail :</label>
                <input type="text" id="email" name="email" defaultValue={contact.email} />
                <label for="message">Message :</label>
                <textarea name="message" id="message" defaultValue={contact.message}></textarea>
                <PinkButton>Mettre à jour</PinkButton>
            </form>
<form action={`http://localhost:5000/contact/deleteContact/${contact._id}?_method=DELETE`}method="post">
<Button>Supprimer</Button>
</form>
    </div>
  )
}

export default UpdateContact