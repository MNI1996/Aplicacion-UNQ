import React, { Fragment, useEffect, useState } from 'react'
import { useFirebaseApp } from 'reactfire'
import { withRouter } from 'react-router-dom'

import HeaderBar from './HeaderBar'
import UserLoged from './UserLoged'

import { useHistory } from 'react-router-dom'
import { verifyLogIn } from '../services/ServiceBack'

import FormularioComprador from './FormularioComprador'
import FormularioProveedor from './FormularioProveedor'

function Home(props){
    
  const [ providerData, setProviderData ] = useState(null)
  const [ dataComprador, setDataComprador ] = useState(null)
  const firebase = useFirebaseApp()
  const history = useHistory()

  useEffect( () => verifyLogIn(firebase).then(response => setData(response))
  .catch(error => history.push('/')) ,[])

  const setData = ( datos ) => {
    setProviderData({datosComprador: datos.datosComprador})
    setDataComprador({datosComprador: datos.datosProvider})
  }
  
  return(
    <Fragment>
      <HeaderBar />
      <FormularioProveedor providerData={providerData} setProviderData={setProviderData} /> 
      <FormularioComprador dataComprador={dataComprador} setDataComprador={setDataComprador} />
    </Fragment>
  )
    
}

export default (Home)