import React, { useState, useContext } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import { post } from '../services/Service'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { Link } from 'react-router-dom'

import { UserContext } from './UserContext'


import '../css/Formulario.css'

function FormularioProveedor(props)  {

  const { setProviderData, providerData } = useContext(UserContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [logo, setIcon]         = useState('')
  const [numero, setNum]        = useState('')
  
  const firebase = useFirebaseApp()

  const handleSubmit = async () => {
    firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      post('http://localhost:6009/Provider', idToken )
      
      })
      .catch(error =>  console.log(error) )
  }

  const palabras =intl()

  return (
    <div className="containerFormulario">
      <h2>{palabras['Bienvenidos']}</h2>
      <h1>{palabras['Usuario']}</h1>
      <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={palabras['Usuario']} />
      <h1>{palabras['Contraseña']}</h1>
      <input type="password" className="inputLogin" onChange={(event) => setPassword(event.target.value)} placeholder={palabras['Contraseña']} />
      <h1>{palabras['Logo']}</h1>
      <input type="logo" className="inputLogin" onChange={(event) => setIcon(event.target.value)} placeholder={palabras['Logo']} />
      <h1>{palabras['Numero']}</h1>
      <input type="numero" className="inputLogin" onChange={(event) => setNum(event.target.value)} placeholder={palabras['Numero']} />
      <br />
      <button className="inputSubmit" onClick={handleSubmit}>{palabras['Ingreso']}</button>
      {/* <Link className="link" to={`/ProvProfile`}>Registrarse</Link> */}
    </div>  
  )

}

 
export default injectIntl(FormularioProveedor)