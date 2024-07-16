import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './fetchingUsers.css'

function DataFetchingUsers() {
    const initialState = {         // Initial state pour le state initial du composant
        loading: true,
        error: '',
        users: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    users: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)    // dispatch pour effectuer des actions sur le state  

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=60')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data.results })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    }, []);

    return (
            <div className="grille">
            {state.loading ? 'Loading ......' :
                state.users.map((user, index) => {
                    return (
                        <div key={index} className="user-card">
                            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="user-img"/>
                            <h2>{user.name.title}. {user.name.last} {user.name.first}</h2>
                            <h3>Username: {user.login.username}</h3>
                            <h4>Mail: {user.email}</h4>
                            <p>Nationalité: {user.nat}</p>
                            <h5>Location: {user.location.city} , {user.location.country}</h5>
                           
                            
                        </div>
                    );
                })}
                 <p>  {state.error} ? {state.error}</p>
            </div>
    )
}

export default DataFetchingUsers