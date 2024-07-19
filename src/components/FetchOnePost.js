import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from './Button.style';

function FetchOnePost() {
    const params = useParams();
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState('');
    const [post , setPost] = useState  ({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/post/${params.id}`)
        .then(response => {
            setLoading(false);
            setPost(response.data);
            setError('');
        })
        .catch((error)=>{
            setLoading(false);
            setError('Error');
            setPost({});
        })
    }, [])

  return (
    <div>
         {loading ? '.... Loading' :<h2>Titre : {post.titre} </h2>}
         {loading ? '.... Loading' :<h4>Auteur : {post.auteur}</h4>}
         {loading ? '.... Loading' : <h3>Description:  {post.description}</h3>}
         {loading ? '.... Loading' : <p>Message : <br/>{post.message} </p>}
         <Button>hello</Button>
               
               
    </div>
  )
}

export default FetchOnePost