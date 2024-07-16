import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

function DataTodosReducer() {
    const initialState = {
        loading: true,
        error: '',
        todos: {}
    }
    // Reducer pour recuperer beaucoup de données 
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    todos: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    todos: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    })
    return (
        <React.Fragment>
            {state.loading ? 'Loading ......' : state.todos.map((todo, index) => {
                
                return (
                    <div className='grille'>
                    <div key={index}>
                        <h2>titre: {todo.title}</h2>
                        <p>user id : {todo.userId}</p>
                        <p>Statut : {todo.completed ? 'Completed' : 'Non completed'}</p>
                        <hr/>
                    </div>
                    </div>
                )
            }
            
            )}
        </React.Fragment>

    )
}

export default DataTodosReducer