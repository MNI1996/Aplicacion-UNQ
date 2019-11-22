import React, { Fragment } from 'react'
import UserLoged from './UserLoged'
import HeaderBar from './HeaderBar'
import { useFirebaseApp, useUser } from 'reactfire'

import Login from './login'


function Home(props){

    const firebase = useFirebaseApp()

    const user = useUser()
    
    return(
        <Fragment>
            <HeaderBar />
            { !user ? <Login/> 
            : <UserLoged/> }
        </Fragment>
    )
    
}

export default Home