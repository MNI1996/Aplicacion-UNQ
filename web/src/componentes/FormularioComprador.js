import React, { useState, useEffect } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'
import { useHistory } from 'react-router-dom'

import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { setDireccion, verifyLogIn } from '../services/ServiceBack'

import Autocomplete from 'react-autocomplete'
import { onSearch, onSearchgeoCode } from '../services/ServiceUbicacion'

import '../css/Formulario.css'

function FormularioComprador(props)  {
  const style = { background:'#ecf0f1', border: '#ccc 1px solid', 
    'borderBottom': '#ccc 2px solid', padding: '2%', width:'250px',
    color:'#AAAAAA', margin:'2% 0% 5% 2%', font:'1em', 'borderRadius':'4px' }

  const [ dataComprador, setDataComprador ] = useState(null)
  const [ searchUbicacion, setsearchUbicacion ] = useState('')
  const [ ubicaciones, setUbicaciones ] = useState([])
  const [ ubicacion, setUbicacion ] = useState(null)
  const history = useHistory()
  const palabras = intl()
  const firebase = useFirebaseApp()


  useEffect( () => verifyLogIn(firebase).then(response => setCompradorData(response))
    .catch(error => history.push('/')) ,[])

  const setCompradorData = ( response ) => {
    setDataComprador({datosComprador: response.datosComprador})
    // if(!!dataComprador.calle)  setUbicacion(jsonToDireccion(dataComprador)) 
  }
    
  const verify = async () => { onSearchgeoCode(searchUbicacion).then(response =>  
    {if(response.Response.View[0].Result[0].MatchLevel == 'houseNumber')
    setUbicacion(response.Response.View[0].Result[0].Location)}).catch()}
    
  const handleSubmit = async () => {
    setDireccion(firebase, direccionTojson(ubicacion)).then(response => goto(response.clientData)).catch()}

  const goto = (dataCliente) => {
    history.push('/Menus')}

  const busqueda = data => { setsearchUbicacion(data)
    data.length >= 5 ? 
    onSearch(searchUbicacion).then(response => setUbicaciones(response.suggestions)):
    setUbicaciones([])}


  return ( !!dataComprador ? 
    <div className="containerFormulario">
        <h2>{palabras['Bienvenidos']}</h2>
        <h1>{palabras['Bienvenidos']}</h1>
        <Autocomplete
          wrapperStyle={style}
          getItemValue={ (item) => item.label }
          items= { ubicaciones }
          renderItem={(item, isHighlighted) => 
            <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>}
          value={ searchUbicacion }
          shouldItemRender={ matchDireccionToTerm }
          onChange={(event) => busqueda(event.target.value)}
          onSelect={(value) => busqueda(value)} />
        <br/>
        <button className="inputSubmit" onClick={verify}>{palabras['Bienvenidos']}</button>
        <button className="inputSubmit" disabled={!ubicacion} onClick={handleSubmit}>{palabras['Bienvenidos']}</button>
    </div> : <div></div> )} 

export default injectIntl(FormularioComprador)

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