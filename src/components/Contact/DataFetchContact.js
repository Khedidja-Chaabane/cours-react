import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/fr'
moment().locale('fr')

function DataFetchContact() {
    const initialState = {         // Initial state pour le state initial du composant
        loading: true,
        error: '',
        contacts: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                console.log("Success!");
                
                return {
                    loading: false,
                    contacts: action.payload,
                    error: ''
                }

            case 'FETCH_ERROR':
                console.log("Failed!");
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
                console.log(response.data);
                
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch((error) => {
                console.log(error);

                dispatch({ type: 'FETCH_ERROR' })
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
                        <p>Date d'envoi : {moment(contact.date_contact).format('L')}</p>
                        <hr />
                    </div>

                )

            })}
        </React.Fragment>

    )
}

export default DataFetchContact