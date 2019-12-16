import React , { useEffect } from 'react'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import Lenguaje from './Lenguaje'

import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { logueo } from '../services/ServiceBack'

import { useHistory, withRouter } from 'react-router-dom'
import { useUser } from 'reactfire'


import '../css/Login.css'
import HeaderBar from './HeaderBar'

function LogIn (props)  {
  
  const history = useHistory()
  const user = useUser()
  const firebase = useFirebaseApp()
  const palabras = intl()
  
  useEffect( () => user ? history.push('/Home') : '' )
  
  const logInGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await logueo(firebase, provider).then(response => setDatas(response)).catch()} 

  const setDatas = (response) => {
    history.push('/Home')
  }

  return (<>
    <HeaderBar/>
      <div className="containerLogin">
        <div className="login">
            <h2>{ palabras['Bienvenidos'] }</h2>
            <br/>
            <button className="inputSubmit" onClick={logInGoogle}>{palabras['Google']}</button>
            <br />
        </div>
      </div></>
      )}

export default (injectIntl(LogIn))