import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    //le chargement de la donnée
    const [loading, setLoading] = useState(true); //importer useState
    //le state pour stocker les données
    //Error
    const [error, setError] = useState('');
    // Les données
    const [donnees, setDonnees] = useState({});

    useEffect(() => {   //importer useEffect
        // fetching data
        //insérer le lien de l'api 
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false);
                console.log(response.data);
                setDonnees(response.data);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
                setDonnees({});
                setError('Une erreur est survenue');
            })
    }, [])
    //, [] indique que useEffect ne se lancera qu'une fois au démarrage
    return (
        <div>
                    {/* //afficher les données lors du chargement */}

            <h1>{loading ? 'Loading ......' : donnees.title}</h1>
            <p>{loading ? 'Loading ......' : donnees.body}</p>
            {/* afficher un message d'erreur si y a eu un erreur lors de la récupération de la donnée */}
            {error ? error : null }
        </div>
    )
}

export default DataFetchingOne