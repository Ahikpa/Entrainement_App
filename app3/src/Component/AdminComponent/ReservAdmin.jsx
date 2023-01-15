import React from 'react'
import "../../Css/Admin.css"

function ReservAdmin() {
  return (
    <div>
      <div>
        <div className='category_liste'>
            <table className='tabl'>
                <thead>
                    <tr>
                        <th className='case'>Nom</th>
                        <th className='case'>Matricule vehicule</th>
                        <th className='case'>Heure arriver</th>
                        <th className='case'>Heure depart</th>
                        <th className='case'>Prix (FCFA)</th>
                        <th colSpan='2' className='case' >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sylla</td>
                        <td>1235555akcc</td>
                        <td>12h</td>
                        <td>14h</td>
                        <td>1000</td>
                        <td>
                            <button className='annule'>Annuler</button>
                        </td>
                        <td>
                            <button className='confirmation'>Confirmer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sylla</td>
                        <td>1235555akcc</td>
                        <td>12h</td>
                        <td>14h</td>
                        <td>1000</td>
                        <td>
                            <button className='annule'>Annuler</button>
                        </td>
                        <td>
                            <button className='confirmation'>Confirmer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sylla</td>
                        <td>1235555akcc</td>
                        <td>12h</td>
                        <td>14h</td>
                        <td>1000</td>
                        <td>
                            <button className='annule'>Annuler</button>
                        </td>
                        <td>
                            <button className='confirmation'>Confirmer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sylla</td>
                        <td>1235555akcc</td>
                        <td>12h</td>
                        <td>14h</td>
                        <td>1000</td>
                        <td>
                            <button className='annule'>Annuler</button>
                        </td>
                        <td>
                            <button className='confirmation'>Confirmer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sylla</td>
                        <td>1235555akcc</td>
                        <td>12h</td>
                        <td>14h</td>
                        <td>1000</td>
                        <td>
                            <button className='annule'>Annuler</button>
                        </td>
                        <td>
                            <button className='confirmation'>Confirmer</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
    </div>
  )
}

export default ReservAdmin
