import React from 'react'
import "../Css/Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../Images/logo2.svg"

function Navbar() {
  return (
      <nav>
        <div className='nav'>
            <div className='nav1'>
                <img src={logo} alt="" />
            </div>
            <div className='nav2'>
                <div className='anime'><Link className='items' to="/">Accueil</Link></div>
                <div className='anime'><Link className='items' to="/carte">Carte</Link></div>
                <div className='anime'><Link className='items' to="/parkings">Parkings</Link></div>
                <div className='anime'><Link className='items' to="/apropos">A propos</Link></div>
                <div className='anime'><Link className='items' to="/contacter">Contacter</Link></div>
 

            </div>
        </div>
      </nav>
  )
}

export default Navbar
