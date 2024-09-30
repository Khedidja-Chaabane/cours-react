import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import './cars.css'

function DataFetchCars() {
    // Initial state pour le state initial du composant
    const initialState = {         
        loading: true,
        error: '',
        cars: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH SUCCESS':
                return {
                    loading: false,
                    cars: action.payload,
                    error: ''
                }

            case 'FETCH ERROR':
                return {
                    loading: false,
                    cars: {},
                    error: 'Something went wrong'
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState) 
    // dispatch pour effectuer des actions sur le state     
    useEffect(() => {
        axios.get('http://localhost:5000/allcars')
            .then((response) => {
                dispatch({ type: 'FETCH SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH ERROR' })
            });

    }, []);
  return (
    <React.Fragment>
<h1>Nos voitures</h1>
    {state.loading? 'Chargement...' : state.cars.map((car, index) =>{
        return (
            <div key={index}>
                <img src={car.image} alt={car.marque} className='car-img'/>
                <h2>Marque : {car.marque} </h2>
                <h4>Modele : {car.modele}</h4>
                <p>Description: <br/>{car.description} </p>
                <hr/>
                </div>
               
        )
        
    })}
            </React.Fragment>

  )
}

export default DataFetchCars