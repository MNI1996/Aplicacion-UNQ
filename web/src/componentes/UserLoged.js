import React, { Fragment } from 'react'

import FormularioComprador from './FormularioComprador'
import FormularioProveedor from './FormularioProveedor'


function UserLoged(props){

    const { setClientData, clientData, setProviderData, providerData } = props
    
    return(
        <Fragment >            
            { providerData ?
                <div> POTOMA </div>:
                <FormularioProveedor 
                setProviderData={setProviderData}
                providerData={providerData} /> }
            { clientData ? 
                <div>YACOMO</div>:
                <FormularioComprador 
                setClientData={setClientData}
                clientData={clientData} /> }
        </Fragment>
    )
    
}

export default UserLoged