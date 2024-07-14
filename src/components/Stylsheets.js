import React from 'react'
import './myStyle.css'
function Stylsheets(props) {
    let couleur = props.primary ? "primary" : "";
  return (
    // <div><h1 className='primary'>Stylsheets</h1></div>
    <div><h1 className={couleur}>Stylsheets</h1></div>
  )
}

export default Stylsheets