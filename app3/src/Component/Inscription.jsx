import React from 'react'
import '../Css/Formulaire.css'
import note from '../Images/Notebook.png'
import { useState } from 'react'
import Connect from './Connect'

const Inscription = ({modal}) => {
  const [Connexion, setConnexion] = useState(false)

  return (
    <div className='modal' >
        <div className='madal_content'>
          <div className='close_img'>
            <div className='close'>
              <button onClick={modal}><i class="fa-solid fa-xmark"  width='15' height= '15' ></i></button>
            </div>
            <div className='img_inscri'>
              <img src={note} alt="" />
            </div>
          </div>
            
          <div className='information'>
            <div className='phrase'>
              <h3>INSCRIPTION</h3>
            </div>
            <div className='utilisateur'>
              <label htmlFor="non_utilisateur">Nom d'utilisateur</label>
              <input type="text" name="nom utilisateur"/>
            </div>

            <div className='deux_champ'>
              <div className='premiere'>
                 <label htmlFor="nom">Nom</label>
                <input type="text" name='nom'  />
              </div>
              <div className='deuxieme'>
                <label htmlFor="prenoms">Prenoms</label>
                <input type="text" name='prenom' />
              </div>
            </div>

            <div className='deux_champ'>
              <div className='premiere'>
                 <label htmlFor="email">Adresse e-mail</label>
                <input type='email' name='email'  />
              </div>
              <div className='deuxieme'>
                <label htmlFor="numero">Numero de téléphone</label>
                <input type="text" name='numero' />
              </div>
            </div>

            <div className='deux_champ'>
              <div className='premiere'>
                 <label htmlFor="matriculev">Matricule de la voiture</label>
                <input type='text' name='matrivulev'  />
              </div>
              <div className='deuxieme'>
                <label htmlFor="modele">Modèle et/ou couleur</label>
                <input type="text" name='modele' />
              </div>
            </div>

            <div className='deux_champ'>
              <div className='premiere'>
                <label htmlFor="motdpass">Mot de passe</label>
                <input type='password' name="modpass"/>
              </div>
              <div className='deuxieme'>
                <label htmlFor="cmotdpass">Confirmer mot de passe</label>
                <input type='password' name="cmodpass"/>
              </div>
            </div>




            <div className='mere'>
              <div className='deja_inscri'>
                <h4>Vous avez déja un compte</h4>
                  {Connexion && <Connect mode={() => setConnexion(false)}/>}
                <h4 onClick={() => setConnexion(true)}>Se connecter</h4>
              </div>
              <div className='enreg'>
                <button className='b-enregistrer'>Enregister</button>
              </div>

            </div>
              
          </div>

        </div>
    </div>
  )
}

export default Inscription
