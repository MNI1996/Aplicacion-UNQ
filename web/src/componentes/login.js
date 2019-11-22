import React from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'

import '../css/Login.css'

function LogIn (props)  {

  const firebase = useFirebaseApp()
  const logInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  const palabras = 
    intl(props.intl, ['Bienvenidos', 'Google'])

  return (
    <div className="containerLogin">
      <div className="login">
          <h2>{palabras[0]}</h2>
          <br />
          <button className="inputSubmit" onClick={logInGoogle}>{palabras[1]}</button>
          <br />
      </div>
    </div>  
  )
}
export default injectIntl(LogIn)

{/* <h1>{Usuario}</h1>
          <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={Usuario} />
          <h1>{Contraseña}</h1>
          <input type="password" className="inputLogin" onChange={(event) => setPassword(event.target.value)} placeholder={Contraseña} />
          <br />
          <button className="inputSubmit" onClick={handleSubmit}>{Ingreso}</button>
          <br />
          <Link className="link" to={'/Registrarse'}>{Registrar}</Link>
           */}