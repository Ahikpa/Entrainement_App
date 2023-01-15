import React from 'react'
import '../Css/Propos.css'
import logo1 from '../Images/logo.svg'

function Propos() {
  return (
    <div className='pare'>
        <div className='pare1'>
            <div className='titre'>
                <p>A propos</p>
            </div>
            <div className='logo'>
                <img src={logo1} alt="" />
            </div>

        </div>
        <div className='parent2'>
            <p>KATCHAN-X est une équipe de jeune entrepreneurs créant des solutions innovantes dans le domaine des nouvelles technologies.  </p>
            <p>L'équipe KATCHAN-X est composé de 05 étudiants tous issues de L'Ecole Supérieure Africaine des TICs (ESATIC).</p>
            <p>Le projet ParkingTracer est le tout premier réalisé par l'équipe KATCHAN-X.</p>
        </div>
    </div>
  )
}

export default Propos
