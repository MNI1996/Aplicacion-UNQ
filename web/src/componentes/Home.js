import React, { Fragment, useEffect, useState, Component } from 'react'
import { useFirebaseApp } from 'reactfire'
import { withRouter } from 'react-router-dom'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'


import { verifyLogIn } from '../services/ServiceBack'

import * as ROUTES from '../constant/routes'

import FormularioComprador, { FormularioCompradorClass }  from './FormularioComprador'
import FormularioProveedor from './FormularioProveedor'

function Home(props){
    
  const firebase = useFirebaseApp()
  const palabras = intl()
  
  return(<HomeBody firebase={firebase} palabras={palabras} />)
}

class HomeBodyBase extends Component{
  
  constructor(props){
    super(props)
    this.history = props.history
    this.firebase = props.firebase
    this.datosUsusario = {}
    this.palabras = props.palabras
  }
  
  UNSAFE_componentWillMount(){ verifyLogIn(this.firebase).then(response => 
    {this.datosUsusario = response;console.log(response)})
    .catch(response => this.handleLogError(this.firebase,response))}

  handleLogError = (firebase, error) => {
    firebase.auth().signOut()
    this.history.push(ROUTES.LANDING)}
    
  render(){
    return(
      <div>
        <FormularioProveedor providerData={{data: this.datosUsusario.datosProvider}} history={this.history} /> 
        <FormularioCompradorClass dataComprador={{data: this.datosUsusario.datosComprador}} firebase={this.firebase} history={this.history} palabras={this.palabras} />
      </div>)}
}

const HomeBody = injectIntl(withRouter(HomeBodyBase))


export default Home

export { HomeBody }