import React from 'react'
import '../Css/Contact.css'

function Contact() {
  return (
    <div className='contact'>

        <div className='contact1'>
            <div className='info1'>
                <label htmlFor="nom">Nom</label>
                <input type="text" name='nom'  />
            </div>
            <div className='info1'>
                <label htmlFor="prenoms">Prenoms</label>
                <input type="text" name='prenom' />
            </div>
            <div className='info1'>
                <label htmlFor="email">E mail</label>
                <input type="email" />
            </div>
            <div className='message'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="50" rows="10"></textarea>

            </div>

        </div>
        <div className='contact2'>
            <div className='info1'>
                <label htmlFor="prenoms">Nom d'utilisateur</label>
                <input type="text" />
            </div>
            <div className='info1'>
                <label htmlFor="categorie">Motif</label>
                    <select name="" id="">
                        <option value="1"></option>
                        <option value="1">Suppression de compte</option>
                        <option value="2">Demande de remboursement</option>
                        <option value="3">Commentaire</option>
                        <option value="4">Autre</option>
                    </select>
            </div>
            <div className='envoyer'>
                <button className='envoi'>Envoyer</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
