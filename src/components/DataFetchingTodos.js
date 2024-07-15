import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Todo from './Todo' // Importation du composant Todo depuis un fichier local
import './todo.css' // Importation du fichier CSS pour les styles du composant Todo


function DataFetchingTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                setLoading(false);
                setTodos(response.data);
                setError('');
                console.log(response.data);
            })
            .catch((error) => {
                setLoading(false);
                setTodos({});
                setError(error);
            });
    }, []);

    return (
        <React.Fragment>
            {/* Fragment React utilisé pour grouper plusieurs éléments sans ajouter de nœud supplémentaire au DOM */}
            {/* // Si le chargement est terminé, mapper sur les todos pour afficher chaque todo */}
            {loading ? 'Loading .....' : todos.map((todo, index) => {
                //premiere methode
                // let theme = todo.completed ? 'green' : 'red'; // Définition de la variable "theme" pour appliquer la classe CSS basée sur l'état "completed" ou non

                return (
                    //deuxieme methode
                    // Retourner le composant Todo pour chaque todo
                    <Todo key={index} todo = {todo}/> // Utilisation du composant Todo avec une prop todo// Le composant Todo est utilisé pour afficher les détails de chaque todo. 

                    //premiere methode : suite
                    // <div key={index} className={theme}>
                    //     <h2>titre: {todo.title}</h2>
                    //     <p>user id : {todo.userId}</p>
                    //     <p>Statut : {todo.completed ? 'Completed' : 'Non completed'}</p>
                    //     <hr />
                    // </div>
                )
            })}
        </React.Fragment>
    )
}

export default DataFetchingTodos