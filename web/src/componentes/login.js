import React from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { logueo } from '../services/ServiceAuth0'

import '../css/Login.css'

function LogIn (props)  {
  
  const { setClientData, setProviderData } = props

  
  const firebase = useFirebaseApp()
  const logInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await logueo(firebase, provider).then(response => setDatas(response))
  } 

  const setDatas = (response) => {
    setClientData(response.datosComprador)
    setProviderData(response.datosProvider)
    return response
  }

  const palabras = intl()

  return (
    <div className="containerLogin">
      <div className="login">
          <h2>{palabras['Bienvenidos']}</h2>
          <br/>
          <button className="inputSubmit" onClick={logInGoogle}>{palabras['Google']}</button>
          <br />
      </div>
    </div>  
  )
}
export default injectIntl(LogIn)