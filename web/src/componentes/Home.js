import React, { Fragment } from 'react'
import MenusEnLista from './listaMenus'
import HeaderBar from './HeaderBar'
import { useFirebaseApp, useUser } from 'reactfire'

import Mapa from './mapa'
import Login from './login'


function Home(props){
    const firebase = useFirebaseApp()

    const user = useUser()
    
    return(
        <Fragment>
            <HeaderBar />
            { !user ? <Login/> 
            : <MenusEnLista/> }
        </Fragment>
    )
    
}

export default Home