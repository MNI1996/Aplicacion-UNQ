import React, { Fragment } from 'react'
import { useFirebaseApp, useUser } from 'reactfire'
import { withRouter } from 'react-router-dom'

import HeaderBar from './HeaderBar'
import Login from './login'
import UserLoged from './UserLoged'

function Home(props){

    return(
        <Fragment>
            <HeaderBar />
            <UserLoged/>
        </Fragment>
    )
    
}

export default (Home)