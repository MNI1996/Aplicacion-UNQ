import React, { useState } from "react";
import { injectIntl, IntlShape } from 'react-intl'

class Lenguaje extends React.Component{
  
  render(){
    const lenguaje = navigator.language
    const intl = this.props.intl
    const Saludos = intl.formatMessage({
      id: 'Saludos',
      defaultMessage: 'eh ta mal'
    })
    return(
      <div className= "App">
        <h1>{Saludos}</h1>
        <h1>{lenguaje}</h1>
      </div>
    )
  }
}

Lenguaje = injectIntl(Lenguaje)

export default Lenguaje