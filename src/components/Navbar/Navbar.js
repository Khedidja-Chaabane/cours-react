import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to="/">Acceuil</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/services">Services</Link>
        <Link to="/profile/max">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/inscription">Inscription</Link>
        <Link to="http://localhost:5000/logout">Déconnexion</Link>



        </div>
  )
}

export default Navbar