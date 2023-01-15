import React from 'react'
import { Link } from 'react-router-dom'
import "../../Css/Admin.css"

function Park() {
  return (
    <div>
      <div className="category_liste">
        <table className='tabl'>
            <thead>
                <tr>
                    <th className='park'>Parking</th>
                    <th className='park'>Quartiers</th>
                    <th className='park'>Nombres de places disponibles</th>
                    <th className='park'>Nombre de places maximales</th>
                    <th colSpan="2"  className='park'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Parking du palais de justice</td>
                    <td>Quartier</td>
                    <td>5</td>
                    <td>30</td>
                    <td>
                       <div className="modifier_btn">
                            <Link to="" className='modifier_cat'>Modifier</Link>
                       </div>
                    </td>
                                               
                    <td>
                        <button className='suppression'>Supprimer</button>
                    </td>

                </tr>
                <tr>
                    <td>Parking du palais de justice</td>
                    <td>Quartier</td>
                    <td>5</td>
                    <td>30</td>
                    <td>
                       <div className="modifier_btn">
                            <Link to="" className='modifier_cat'>Modifier</Link>
                       </div>
                    </td>
                                               
                    <td>
                        <button className='suppression'>Supprimer</button>
                    </td>

                </tr>
                <tr>
                    <td>Parking du palais de justice</td>
                    <td>Quartier</td>
                    <td>5</td>
                    <td>30</td>
                    <td>
                       <div className="modifier_btn">
                            <Link to="" className='modifier_cat'>Modifier</Link>
                       </div>
                    </td>
                                               
                    <td>
                        <button className='suppression'>Supprimer</button>
                    </td>

                </tr>
                <tr>
                    <td>Parking du palais de justice</td>
                    <td>Quartier</td>
                    <td>5</td>
                    <td>30</td>
                    <td>
                       <div className="modifier_btn">
                            <Link to="" className='modifier_cat'>Modifier</Link>
                       </div>
                    </td>
                                               
                    <td>
                        <button className='suppression'>Supprimer</button>
                    </td>

                </tr>
                <tr>
                    <td>Parking du palais de justice</td>
                    <td>Quartier</td>
                    <td>5</td>
                    <td>30</td>
                    <td>
                       <div className="modifier_btn">
                            <Link to="" className='modifier_cat'>Modifier</Link>
                       </div>
                    </td>
                                               
                    <td>
                        <button className='suppression'>Supprimer</button>
                    </td>

                </tr>
            </tbody>

        </table>
      </div>
    </div>
  )
}

export default Park
