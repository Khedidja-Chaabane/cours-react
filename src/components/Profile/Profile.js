import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom' 
import axios from 'axios';

function Profile() {
    const { id } = useParams();  // Extraire l'ID des paramètres d'URL
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {   
       
        axios.get(`http://localhost:5000/user/${id}`)  // Utiliser l'ID dans la requête
                    .then(response => {
                setLoading(false);
                console.log(response.data);
                setData(response.data);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
                setData({});
                setError('Une erreur est survenue');
            })
    }, [id]) // Ajouter `id` comme dépendance pour que l'effet se déclenche lorsqu'il change

  return (
    <div>
       <Link to="http://localhost:5000/logout">Déconnexion</Link>
<h3>{loading ? 'Loading ......' :`Bonjour ${data.username} , Voici votre profil`}</h3>
<p>{loading ? 'Loading ......' :`Email: ${data.email}`}</p>
<p>{loading ? 'Loading ......' :`Pseudo: ${data.username}`}</p>
{error ? error : null }
</div>
  )
}

export default Profile