import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import { post } from '../services/ServiceMenus'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { Link } from 'react-router-dom'

import '../css/Formulario.css'

function FormularioProveedor(props)  {

  const { setProviderData, providerData } = props
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [logo, setIcon]         = useState('')
  const [numero, setNum]        = useState('')
  
  const firebase = useFirebaseApp()

  const handleSubmit = async () => {
    firebase.auth().currentUser.getIdToken(true).then( function(idToken) {
      post('http://localhost:6009/Menu/main', idToken )
      
      })
      .catch(error =>  console.log(error) )
  }

  const palabras = 
    intl(props.intl, ['Bienvenidos', 'Usuario','Contraseña','Logo','Numero','Ingreso'])

  return (
    <div className="containerFormulario">
      <h2>{palabras[0]}</h2>
      <h1>{palabras[1]}</h1>
      <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={palabras[1]} />
      <h1>{palabras[2]}</h1>
      <input type="password" className="inputLogin" onChange={(event) => setPassword(event.target.value)} placeholder={palabras[2]} />
      <h1>{palabras[3]}</h1>
      <input type="logo" className="inputLogin" onChange={(event) => setIcon(event.target.value)} placeholder={palabras[3]} />
      <h1>{palabras[4]}</h1>
      <input type="numero" className="inputLogin" onChange={(event) => setNum(event.target.value)} placeholder={palabras[4]} />
      <br />
      <button className="inputSubmit" onClick={handleSubmit}>{palabras[5]}</button>
      <Link className="link" to={`/ProvProfile`}>Registrarse</Link>
    </div>  
  )

}

 
export default injectIntl(FormularioProveedor)