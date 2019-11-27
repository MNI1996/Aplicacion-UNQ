import React, { useState, useEffect } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import { post } from '../services/ServiceMenus'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'

import '../css/Formulario.css'
import Mapa from './mapa'

function FormularioComprador(props)  {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  const firebase = useFirebaseApp()

  const handleSubmit = async () => {
    firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      post('http://localhost:6009/Menu/main', idToken )
      })
      .catch(error =>  console.log(error) )
  }

  const palabras = 
    intl(props.intl, ['Bienvenidos', 'Usuario','Contraseña','Ingreso'])

  return (
    <div className="containerFormulario">
        <h2>{palabras[0]}</h2>
        <h1>{palabras[0]}</h1>
        <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={palabras[0]} />
        <br />
        <button className="inputSubmit" onClick={handleSubmit}>{palabras[0]}</button>
    </div> 
  )
}
export default injectIntl(FormularioComprador)


