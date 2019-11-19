import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import HeaderBar from './HeaderBar'

import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

import '../css/Login.css'

function LogIn (props)  {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const firebase = useFirebaseApp()
  
  const user = useUser()
  
  const handleSubmit = async () => {
    props.history.push({
      pathname: '/home',
    })
  }
  const logInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  const intl = props.intl 
  const Bienvenidos = intl.formatMessage({
    id: 'Bienvenidos',
    defaultMessage: 'eh ta mal'
  })
  const Usuario = intl.formatMessage({
    id: 'Usuario',
    defaultMessage: 'eh ta mal'
  })
  const Contraseña = intl.formatMessage({
    id: 'Contraseña',
    defaultMessage: 'eh ta mal'
  })
  const Ingreso = intl.formatMessage({
    id: 'Ingreso',
    defaultMessage: 'eh ta mal'
  })
  const Registrar = intl.formatMessage({
    id: 'Register',
    defaultMessage: 'eh ta mal'
  })
  const Google = intl.formatMessage({
    id: 'Google',
    defaultMessage: 'Google'
  })
  return (
    <div className="containerLogin">
      <div className="login">
          <h2>{Bienvenidos}</h2>
          <h1>{Usuario}</h1>
          <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={Usuario} />
          <h1>{Contraseña}</h1>
          <input type="password" className="inputLogin" onChange={(event) => setPassword(event.target.value)} placeholder={Contraseña} />
          <br />
          <button className="inputSubmit" onClick={handleSubmit}>{Ingreso}</button>
          <br />
          <Link className="link" to={'/Registrarse'}>{Registrar}</Link>
          <br />
          <button className="inputSubmit" onClick={logInGoogle}>{Google}</button>
          <br />
      </div>
    </div>  
  )
}
export default injectIntl(LogIn)