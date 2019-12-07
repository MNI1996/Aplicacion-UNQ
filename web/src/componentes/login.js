import React from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { logueo } from '../services/ServiceAuth0'

import '../css/Login.css'

function LogIn (props)  {
  
  const {setClientData, setProviderData} = props

  
  const firebase = useFirebaseApp()
  const logInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await logueo(firebase, provider).then(response => setDatas(response)).catch(firebase.auth().signOut())
  } 

  const setDatas = (response) => {
    setClientData(response.datosComprador)
    setProviderData(response.datosProvider)
    return response
  }

  const palabras = 
    intl(props.intl, ['Bienvenidos', 'Google'])

  return (
    <div className="containerLogin">
      <div className="login">
          <h2>{palabras[0]}</h2>
          <br/>
          <button className="inputSubmit" onClick={logInGoogle}>{palabras[1]}</button>
          <br />
      </div>
    </div>  
  )
}
export default injectIntl(LogIn)