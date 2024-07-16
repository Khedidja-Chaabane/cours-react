import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

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
    <div>
       
        {state.loading ? 'loading........' : state.contacts.map((contact , index)=>{
        
        
console.log(contact)
       
        
        
    })}
    </div>
  )
}

export default DataFetchContact