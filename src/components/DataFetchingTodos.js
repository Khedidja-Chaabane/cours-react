import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        {loading ? 'Loading .....' : todos.map((todo, index) => {
            return (
                <div key={index}>
                    <h2>titre: {todo.title}</h2>
                    <p>user id : {todo.userId}</p>
                    <p>{todo.copleted ? 'Completed' : 'Non completed'}</p>
                    <hr />
                </div>
            )
        })}
    </React.Fragment>
  )
}

export default DataFetchingTodos