import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../../Images/logo2.svg"
import "../../Css/Admin.css"

function Sidebar() {
  return (
    <div className='centrale'>
        <nav>
        <div className='parent'>
            <div className='enfant1'>
                <img src={logo2} alt="" />
            </div>
            <div className='enfant2'>
                <div className='recherche'>
                    <input type="Search" className='input' />
                    <button className='recher'>Recherche</button>
                </div>
                <div>
                    <button className='deco'>Se deconnecter</button>
                </div>
            </div>
        </div>
        
        <div className='menu2'>
          
            <div>
                <Link className='item' to="/park">Parking</Link>
            </div>
            <div>
                <Link className='item' to="/client">Clients</Link>
            </div>
            <div>
                <Link className='item' to="/reservation"> Reservation</Link>
            </div>
            
        </div>
        </nav>
    </div>
  )
}

export default Sidebar
