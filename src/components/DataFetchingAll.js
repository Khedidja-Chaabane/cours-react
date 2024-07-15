import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchingAll() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [allPosts, setAllPosts] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                setLoading(false);
                setAllPosts(response.data);
                setError('');
                console.log(response.data);
            })
            .catch((error) => {
                setLoading(false);
                setAllPosts({});
                setError(error);
            });
    }, [])
    return (
        <React.Fragment>
            {loading ? 'Loading .....' : allPosts.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })}
        </React.Fragment>

    )
}

export default DataFetchingAll