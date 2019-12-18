import React, { useState, useEffect, Component } from 'react'
import intl from './i18n-Palaras'

import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { setDireccion, verifyLogIn } from '../services/ServiceBack'

import * as ROUTES from '../constant/routes'

import Autocomplete from 'react-autocomplete'

import { onSearch, onSearchgeoCode } from '../services/ServiceUbicacion'

import '../css/Formulario.css'


function matchDireccionToTerm(direccion, value) {
  const datosDireccion = value.split(' ')
  return datosDireccion.every(datoDireccion => direccion.label.toLowerCase().includes(datoDireccion.toLowerCase()))}
  
  function direccionTojson(datosDireccion){
    return { 'pais': datosDireccion.Address.Country,
    'provincia': datosDireccion.Address.State,
    'localidad': datosDireccion.Address.City,
    'calle': datosDireccion.Address.Street,
    'numero': datosDireccion.Address.HouseNumber,
    'Label': datosDireccion.Address.label,}}
    
    function jsonToDireccion(datosDireccion){
      return datosDireccion.datosComprador.pais +
      datosDireccion.datosComprador.provincia +
      datosDireccion.datosComprador.localidad +
      datosDireccion.datosComprador.calle +
      datosDireccion.datosComprador.numero }

const style = { background:'#ecf0f1', border: '#ccc 1px solid', 
'borderBottom': '#ccc 2px solid', padding: '2%', width:'250px',
color:'#AAAAAA', margin:'2% 0% 5% 2%', font:'1em', 'borderRadius':'4px' }



class FormularioCompradorClass extends Component {

  constructor(props){
    super(props)
    this.dataComprador = props.dataComprador
    this.palabras = props.palabras
    this.history = props.history
    this.firebase = props.firebase
  }

  state = {
    value: '',
    suggestions: [],
    data: {},
    ubicacion: null
  }

  UNSAFE_componentWillUpdate(newProps){
    console.log(newProps.dataComprador)
    // this.setState({value:  })
  }

  verify = async () => { onSearchgeoCode(this.state.value).then(async response =>  
    {if(response.Response.View[0].Result[0].MatchLevel == 'houseNumber')
    {this.setState({ubicacion: response.Response.View[0].Result[0].Location})
    await setDireccion(this.firebase, direccionTojson(this.state.ubicacion))}})
    .catch(this.setState({ubicacion: null}))}

  handleSubmit = () => { this.history.push(ROUTES.MENUS) }

  onChange = (data) => {
    this.setState({value: data})
    data.length >= 5 ? 
    onSearch(this.state.value).then(response => this.setState({suggestions: response.suggestions})):
    this.setState({suggestions: []})
  }

  onSuggestionsClearRequested = () => {}

  render(){
    const { ubicacion,suggestions } = this.state
    return(
      <div className="containerFormulario">
        <h2>{this.palabras['Bienvenidos']}</h2>
        <h1>{this.palabras['Bienvenidos']}</h1>
        <Autocomplete 
          wrapperStyle={ style }  items = { suggestions }
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1 }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}>
              {item.label}
            </div>}
          value={this.state.value}  onChange={e => this.onChange( e.target.value )}
          onSelect={value => this.onChange( value )}
          />
        <button className="inputSubmit" onClick={this.verify}>{this.palabras['Bienvenidos']}</button>
        <button className="inputSubmit" disabled={!ubicacion} onClick={this.handleSubmit}>{this.palabras['Bienvenidos']}</button>
      </div>)
  }
}

export default FormularioCompradorClass