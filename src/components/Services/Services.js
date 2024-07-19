import React from 'react'
import { Link, Outlet } from 'react-router-dom' // react hooks entre {}
import { ServiceContainer } from './Container.style'

function Services() {
  return (
    <ServiceContainer>
    <div>
      <nav>
        <Link to="/services/developpement">Service Developpement</Link>
        <Link to="/services/marketing">Service Marketing</Link>
      </nav>
      <Outlet/>   
      {/* il permet d'afficher les routes protégées développement et marketing */}

      <h1>Service Container</h1>
    </div>
    </ServiceContainer>
  )
}

export default Services