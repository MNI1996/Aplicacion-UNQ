import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import FormularioComprador from './FormularioComprador'
import FormularioProveedor from './FormularioProveedor'


function UserLoged(props){

    const [ comprador , setComprador ] = useState([])
    const [ proveedor , setproveedor ] = useState([])
    

    return(
        <Fragment>
            <FormularioProveedor/>
            {/* { provedor ? : } */}

            {/* { comprador ? : } */}
            <FormularioComprador />
        </Fragment>
    )
    
}

export default UserLoged