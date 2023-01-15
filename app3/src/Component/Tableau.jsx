import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/Tableau.css'
import carte from'../Images/carte.png'
import Reservation from './Reservation'



const Tableau= () => {
  const [Reserve, setReserve] = useState(false)
   
  return (
    <div className='contenu'>
      <div className='gauche'>
        <div className='texte'>
            <h2>Parkings</h2>
            <p>Trier par: Nombre de place disponible</p>
        </div>
        <div className='divtable'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='parking'>Parkings</th>
                        <th className='quartier'>Quartiers</th>
                        <th className='nbdispo'>Nombre de places disponibles</th>
                        <th className='nbmax'>Nombre de places maximales</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                    <tr>
                        <td className='parking'>Parking1</td>
                        <td className='quartier'>Quartier1</td>
                        <td className='nbdispo'>20</td>
                        <td className='nbmax'>50</td>
                    </tr>

                </tbody>
            </table>
        </div>
      </div>
      <div className='droite'>
        <div className='img'>
            <img src={carte} alt="" />
        </div>
        <div className='heure'>
          <p>Heure d'ouverture: XXhXX</p>
          <p>Heure fermeture: XXhXX</p>
          <p>Tarif par heure: #### FCFA </p>
        </div>
        <div className='bouton'>
            <Link to='/carte' className='voir'>Voir sur la carte</Link>
          {Reserve && <Reservation reser={()=>{setReserve(false)}} />}
          <button onClick={ ()=>setReserve(true)} className='reso'> Réserver </button>

        </div>

      </div>
    </div>
  )
}

export default Tableau
