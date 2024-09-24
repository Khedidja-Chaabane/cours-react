import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewPost() {
    const [titre, setTitre] = useState("");
    const [auteur, setAuteur] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleTitreChange = (event) => {
        setTitre(event.target.value);
    };
    const handleAuteurChange = (event) => {
        setAuteur(event.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(file && titre && auteur){
            const formData = new FormData;
            formData.append('image', file);
            formData.append('titre', titre);
            formData.append('auteur', auteur);
            axios.post('http://localhost:5000/newPost', formData)
            .then((response) => {
                console.log(response.data);
                return navigate('/blog');
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input type='text' onChange={handleTitreChange}/>
        <label>Auteur</label>
        <input type='text' onChange={handleAuteurChange}/>
        <label> Image du blog</label>        
        <input type='file' onChange={handleFileChange}/>
        <input type='submit' value="Upload blog" />
    </form>
  )
}

export default NewPost