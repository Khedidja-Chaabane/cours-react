import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div>
<nav>
<Link to="/admin/dashboard">Dashboard</Link>
<Link to="/admin/gestionPost">Gestion des Posts</Link>

    </nav>
    <Outlet/>
    </div>
    
  )
}

export default Admin