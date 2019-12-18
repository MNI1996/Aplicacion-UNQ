import React, { useState, useEffect, Component } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import { post } from '../services/Service'
import { setProviderData } from '../services/ServiceBack'

import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'

import { withRouter } from 'react-router-dom'


import '../css/Formulario.css'

class FormularioProveedorBody extends Component{


  constructor(props){
    super(props)
    this.providerData = props.providerData
    this.palabras = props.palabras
    this.firebase = props.firebase
    this.history= props.history
  }

  state = {
    userName: '',
    password: '',
    logo: '',
    numero: ''
  }

  data = {}

  handleSubmit = async () => { setProviderData(this.firebase, this.data ) }

  
  render(){return( 
    !!this.providerData ?
    <div className="containerFormulario">
      <h2>{this.palabras['Bienvenidos']}</h2>
      <h1>{this.palabras['Usuario']}</h1>
      <input type="email" className="inputLogin" onChange={ (event) => this.setState({userName:event.target.value})} placeholder={this.palabras['Usuario']} />
      <h1>{this.palabras['Contraseña']}</h1>
      <input type="password" className="inputLogin" onChange={(event) => this.setState({password: event.target.value})} placeholder={this.palabras['Contraseña']} />
      <h1>{this.palabras['Logo']}</h1>
      <input type="logo" className="inputLogin" onChange={(event) => this.setState({logo: event.target.value})} placeholder={this.palabras['Logo']} />
      <h1>{this.palabras['Numero']}</h1>
      <input type="numero" className="inputLogin" onChange={(event) => this.setState({numero: event.target.value})} placeholder={this.palabras['Numero']} />
      <br />
      <button className="inputSubmit" onClick={this.handleSubmit}>{this.palabras['Ingreso']}</button>
    </div>  : <div></div>
  ) }
}

export default FormularioProveedorBody
