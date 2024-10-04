import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PinkButton } from './Button.style'

function DataFetchPosts() {
    const initialState = {         // Initial state pour le state initial du composant
        loading: true,
        error: '',
        posts: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    posts: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    posts: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)    // dispatch pour effectuer des actions sur le state  

    useEffect(() => {
        axios.get('http://localhost:5000/blog')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    }, []);

  return (
    <React.Fragment>
<h1>Blog</h1>
<hr/>
    {state.loading? 'Chargement...' : state.posts.map((post, index) =>{
        return (
            <div key={index}>
                <Link to={`/post/${post._id}`}>
                <h2>Titre : {post.titre} </h2>
                </Link>
                
                <h4>Auteur : {post.auteur}</h4>
                <h3>Description:  {post.description}</h3>
                <p>Message : <br/>{post.message} </p>
                {post.imageName ? <img src={`http://localhost:5000/${post.imageName}`} width={300} /> : null }

                <PinkButton><Link to={`/post/${post._id}`}>Lire le post</Link></PinkButton>
                <hr/>
                </div>
               
        )
        
    })}
            </React.Fragment>

  )
}

export default DataFetchPosts