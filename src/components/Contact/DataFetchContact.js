import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function DataFetchContact() {
    const initialState = {         // Initial state pour le state initial du composant
        loading: true,
        error: '',
        contacts: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    contacts: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    contacts: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)    // dispatch pour effectuer des actions sur le state  

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    }, []);

    return (
        <React.Fragment>
            <h1>Liste des contacts</h1>
            {state.loading ? 'Chargement...' : state.contacts.map((contact, index) => {
                return (
                    <div key={index}>
                        <Link to={`/contact/${contact._id}`}>
                        <h2>Nom et prénom : {contact.nom} {contact.prenom}</h2>
                        </Link>

                        <Link to={`/contact/${contact._id}`}>
                        <h6>ID Contact : {contact._id}</h6>
                        </Link>
                       
                        
                        <h4>Adresse mail : {contact.email}</h4>
                        <p>Message : <br />{contact.message} </p>
                        <hr />
                    </div>

                )

            })}
        </React.Fragment>

    )
}

export default DataFetchContact