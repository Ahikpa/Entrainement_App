import React from 'react'
import '../Css/Formulaire.css'
import pana from '../Images/pana.png'


const Reservation=({reser})=> {
  return (
    <div className='modal'>
        <div className='content'>
            <div className='div-mere'>
                <div className='close'>
                    <button onClick={reser}><i class="fa-solid fa-xmark"  width='15' height= '15' ></i></button>
                </div>
                <div className='pana'>
                    <img className='date' src={pana} alt="" />
                </div>

            </div>
            <div className='horaire'>
                <div className='phrase'>
                    <h3>RESERVATION</h3>
                </div>
                <div className='lol'>
                    <h4>Si l'heure de depart que vous indiquez ci-dessous n'est pas respecté des frais supplemantaire seront ajouter</h4>
                    <h4> +1h = 1000fr frais supplementaire</h4>
                    <div className='nom'>
                        <label htmlFor="h_arriver">Heure s'arriver</label>
                        <input type="datetime-local" name="h_arriver"/>
                    </div>
                    <div className='nom'>
                        <label htmlFor="h_depart">Heure de depart</label>
                        <input type="datetime-local" name="h_depart"/>
                    </div>
                    <div className='nom'>
                        <label htmlFor="categorie">Moyen de payement</label>
                        <select name="" id="">
                            <option value="1"></option>
                            <option value="1">Orange</option>
                            <option value="2">MTN</option>
                            <option value="3">Moov</option>
                            <option value="4">Wave</option>
                            <option value="5">Espèce</option>
                        </select>
                    </div>
                    <div className='conf'>
                        <button  >Réserver</button>
                    </div>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Reservation
