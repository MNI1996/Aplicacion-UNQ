import React , { Component } from 'react'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'


import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { logueo } from '../services/ServiceBack'

import { withRouter } from 'react-router-dom'
import { useUser } from 'reactfire'

import * as ROUTES from '../constant/routes'

import '../css/Login.css'

function LogIn (props)  {

  const palabras = intl()
  const firebase = useFirebaseApp()
  const user = useUser()
  const provider = new firebase.auth.GoogleAuthProvider()

  return (
    <LogInBody palabras={palabras} firebase={firebase} provider={provider} user={user} /> 
  )}

class LogInBodyBase extends Component{

  constructor(props){
    super(props)
    this.history = props.history
    this.palabras = props.palabras
    this.firebase = props.firebase
    this.provider = props.provider
    this.user = props.user
  }

  UNSAFE_componentWillMount(){ if(!!this.user)  this.history.push(ROUTES.HOME) }

  logInGoogle = () => { logueo(this.firebase,this.provider).then( result => this.history.push(ROUTES.HOME)) } 

  render(){
    return (
    <div className="containerLogin">
      <div className="login">
          <h2>{ this.palabras['Bienvenidos'] }</h2>
          <br/>
          <button className="inputSubmit" onClick={this.logInGoogle}>{this.palabras['Google']}</button>
          <br />
      </div>
    </div>)
  }
}

const LogInBody = injectIntl(withRouter(LogInBodyBase))

export default LogIn

export { LogInBody }