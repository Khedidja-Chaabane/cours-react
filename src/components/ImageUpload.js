// Importation des modules React et axios
import React, { useState } from 'react'; // React est nécessaire pour créer le composant, et useState permet de gérer l'état du fichier sélectionné
import axios from 'axios'; // Axios est utilisé pour envoyer des requêtes HTTP, ici pour envoyer l'image au serveur

// Déclaration du composant ImageUpload
const ImageUpload = () => {
  
  // Initialisation de l'état 'selectedFile' pour stocker le fichier sélectionné par l'utilisateur
  const [selectedFile, setSelectedFile] = useState(null);

  // Fonction appelée lorsqu'un fichier est sélectionné
  const handleFileChange = (event) => {
    // On met à jour l'état 'selectedFile' avec le premier fichier sélectionné par l'utilisateur
    setSelectedFile(event.target.files[0]);
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    // Empêche le comportement par défaut de soumettre le formulaire et de recharger la page
    event.preventDefault();

    // On vérifie si un fichier a été sélectionné
    if (selectedFile) {
      // Création d'un objet FormData pour préparer le fichier à être envoyé au serveur
      const formData = new FormData();
      // Ajout du fichier sélectionné dans l'objet formData sous le nom 'image'
      formData.append('image', selectedFile);

      // Envoi d'une requête POST à l'URL du serveur (ici http://localhost:5000/upload)
      // Cette requête envoie le fichier sous forme de formData
      axios.post('http://localhost:5000/upload', formData)
        .then((response) => {
          // Si la requête réussit, on affiche la réponse du serveur dans la console
          console.log(response.data);
        })
        .catch((error) => {
          // Si une erreur survient lors de la requête, on l'affiche dans la console
          console.error(error);
        });
    }
  };

  // Le code retourné par le composant qui génère le formulaire d'upload
  return (
    <form onSubmit={handleSubmit}>
      {/* Input de type file pour permettre à l'utilisateur de sélectionner un fichier */}
      <input type="file" onChange={handleFileChange} />

      {/* Bouton pour soumettre le formulaire */}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ImageUpload;
