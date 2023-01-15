import React from 'react'
import '../Css/Formulaire.css'
import login from '../Images/Login.png'
import { useState } from 'react'
import Inscription from './Inscription'

const Connect = ({mode}) => {
    const [Open, setOpen] = useState(false)
  return (
    <div className='modal'>
        <div className='madal_content'>
            <div className='connect_img'>
                <div className='close'>
                    <button onClick={mode}><i class="fa-solid fa-xmark"  width='15' height= '15' ></i></button>
                </div>
                <div className='imag'>
                    <img src={login} alt="" />
                </div>
            </div>
            <div className='connexion'>
                <div className='phrase'>
                    <h3>CONNEXION</h3>
                </div>
                <div className='nom'>
                    <label htmlFor="non_utilisateur">Nom d'utilisateur</label>
                    <input type="text" name="nom utilisateur"/>
                </div>
                <div className='passwd'>
                    <label htmlFor="motdpass">Mot de passe</label>
                    <input type="password" name="motdpass"/>
                </div>

                <div className='mere'>
                <div className='deja_inscri'>
                    <h4>Mot de passe oublié ?</h4>
                    {Open && <Inscription modal={()=>setOpen(false) }/>}
                    <h4 onClick={()=>setOpen(true) }>S'inscrire</h4>
                </div>
                <div className='enreg'>
                    <button className='btn-connect' >Se connecter</button>
                </div>

            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Connect
