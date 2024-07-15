import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FilmFetch() {
    //le chargement de la donnée
    const [loading, setLoading] = useState(true);// Active le chargement
    const [error, setError] = useState('');
    const [moovie, setMoovie] = useState({});

    useEffect(() => { // demande de permission de sortir de réact pour aller chercher les données
        //requete à l'api
        axios.get('https://www.omdbapi.com/?t=jab+we+met&apikey=79036820')  // axios permet de chercher des données
            .then(response => {
                setLoading(false);
                console.log(response.data);
                setMoovie(response.data);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                setMoovie({});
                setError('Une erreur est survenue');
            })
    }, []);// Dépendance vide, donc cet effet ne se déclenche qu'une seule fois au chargement initial

    return (
        <div>
            <h1>Un de mes films préférés</h1>
            {loading ? 'Loading ......' : <h2>Titre: {moovie.Title}</h2>}
            <img src={loading ? 'Loading ......' : moovie.Poster} alt="Poster du film" />
            <h3>Année de sortie: {loading ? 'Loading ......' : moovie.Year}</h3>
            <h3>BoxOffice: {loading ? 'Loading ......' : moovie.BoxOffice}</h3>
            {error ? error : null}


        </div>
    )
}

export default FilmFetch