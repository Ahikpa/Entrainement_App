import React from 'react'
import { useState } from 'react'
import "../Css/Style.css"
import img1 from '../Images/Parking.png'
import Connect from './Connect'
import Inscription from './Inscription'
import Reservation from './Reservation'

function Presentation() {
const [Open, setOpen] = useState(false)
const [Connexion, setConnexion] = useState(false)
const [Reserve, setReserve] = useState(false)

  return (
    <div className='corps'>
        <div className='corps1'>
            <img src={img1} alt="" />
            <div className='reserver'>
                {Reserve && <Reservation reser= {()=>setReserve(false)} />}
                <button onClick={ ()=>setReserve(true) } className='btn-reserver'>Réserver</button>
            </div>
        </div>
        <div className='corps2'>

            <h1>Bienvenue sur ParkingTracer</h1>
            <p>ParkingTracer est une solution informatique développé par l'équipe KATCHAN-X dont le but est d'optimiser les stationnements dans les parkings de la commune du Plateau (Abidjan, Côte d'ivoire). </p>
            <p>Sur ce site, vous avez la possibilité de réserver une place dans l'un des parkings de la commune depuis chez vous !</p>
            <p>Vous pouvez également consulter la carte du plateau ainsi que l'emplacement de tout les parkings du Plateau.</p>

            <div className='button'>
               {Open && <Inscription modal={() => setOpen(false)}/>} 
                <button onClick={() => setOpen(true)} className='btn-inscri'>S'inscrire</button>
                {Connexion && <Connect mode={() => setConnexion(false)}/>}
                <button onClick={() => setConnexion(true)} className='btn-connect'>Se connecter</button>
            </div>

        </div>
      
    </div>
  )
}

export default Presentation
