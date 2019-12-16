import React, { Fragment, useContext } from 'react'

import FormularioComprador from './FormularioComprador'
import FormularioProveedor from './FormularioProveedor'

import { UserContext } from './UserContext'

function UserLoged(props){

    return(
        <Fragment >            
            { <FormularioProveedor /> }
            { <FormularioComprador /> }
        </Fragment>
    )
    
}

export default UserLoged