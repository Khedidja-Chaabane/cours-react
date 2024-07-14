import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FilmUserChoice() {
    //le chargement de la donnée
    const [loading, setLoading] = useState(true);// État // Active le chargement
    const [error, setError] = useState(''); //pour gérer les erreurs
    const [moovie, setMoovie] = useState({});// État pour stocker les détails du film
    const [userChoice, setUserChoice] = useState('');// État pour le choix de l'utilisateur (titre du film)

    useEffect(() => {
        //requete à l'api qui se déclenche à chaque changement de userChoice
        axios.get(`https://www.omdbapi.com/?t=${userChoice}&apikey=79036820`)
            .then(response => {
                setLoading(false); // Désactive le chargement une fois la réponse reçue
                console.log(response.data);
                setMoovie(response.data); // Met à jour les détails du film avec la réponse
                setError(''); // Réinitialise l'éventuelle erreur
            })
            .catch(error => {
                setLoading(false);// Désactive le chargement en cas d'erreur
                console.log(error);
                setMoovie({});// Réinitialise les détails du film
                setError('Une erreur est survenue'); // Définit un message d'erreur
            });
    }, [userChoice]); // Dépendance de l'effet useEffect, se déclenche à chaque changement de userChoice

    // Fonction appelée à chaque changement dans l'input, met à jour userChoice avec la valeur de l'input
    const handleInputChange = (event) => {
        setUserChoice(event.target.value);
    }
    return (

        <div>
            <h1>Recherchez un film</h1>
            {/* // Valeur de l'input liée à userChoice et Gestion du changement dans l'input*/}
            <input type="text" placeholder="Titre du film ..." value={userChoice} onChange={handleInputChange} />
            <button type="submit">Valider</button>

            {/* Affichage */}
            <h2>Titre: {loading ? 'Loading ......' : moovie.Title}</h2>
            <img src={loading ? 'Loading ......' : moovie.Poster} alt="Poster du film" />
            <h3>Année de sortie: {loading ? 'Loading ......' : moovie.Year}</h3>
            <h3>BoxOffice: {loading ? 'Loading ......' : moovie.BoxOffice}</h3>
            {error ? error : null}
        </div>
    )
}

export default FilmUserChoice