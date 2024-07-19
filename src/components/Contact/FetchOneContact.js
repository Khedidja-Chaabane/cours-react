import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UpdateContact from './UpdateContact';


function FetchOneContact() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contact, setContact] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/contact/${params.id}`)
            .then(response => {
                setLoading(false);
                setContact(response.data);
                setError('');
            })
            .catch((error) => {
                setLoading(false);
                setError('Error');
                setContact({});
            })
    }, [])

    return (
        <div>
            {loading ? '.... Loading' : <h3>{contact.nom}</h3>}
            {loading ? '.... Loading' : <h3>{contact.prenom}</h3>}
            {loading ? '.... Loading' : <h3>{contact.email}</h3>}
            {loading ? '.... Loading' : <p>{contact.message}</p>}

            <h3>Mettre à jour</h3>
        {/* importer le composant updatecontact et lui passer l'objet en props */}
            <UpdateContact contact={contact}/> 

           

        </div>
    )
}

export default FetchOneContact