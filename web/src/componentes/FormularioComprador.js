import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import '../css/Formulario.css'

function FormularioComprador(props)  {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    
  }

  const palabras = 
    intl(props.intl, ['Bienvenidos', 'Usuario','Contraseña','Ingreso'])

  return (
    <div className="containerFormulario">
        <h2>{palabras[0]}</h2>
        <h1>{palabras[0]}</h1>
        <input type="email" className="inputLogin" onChange={ (event) => setUserName(event.target.value)} placeholder={palabras[0]} />
        <br />
        <button className="inputSubmit" onClick={handleSubmit}>{palabras[0]}</button>
    </div>  
  )
}
export default injectIntl(FormularioComprador)


