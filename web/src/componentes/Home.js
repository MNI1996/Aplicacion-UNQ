import React, { Fragment, useState } from 'react'
import { useFirebaseApp, useUser } from 'reactfire'

import HeaderBar from './HeaderBar'
import Login from './login'
import UserLoged from './UserLoged'


function Home(props){
    const [clientData, setClientData] = useState(null)
    const [providerData, setProviderData] = useState(null)

    const firebase = useFirebaseApp()

    const user = useUser()
    
    return(
        <Fragment>
            <HeaderBar />
            { !user ?
            <Login
                setClientData={setClientData}
                setProviderData={setProviderData} /> 
            : <UserLoged
            setClientData={setClientData}
            clientData={clientData}
            setProviderData={setProviderData}
            providerData={providerData} /> }
        </Fragment>
    )
    
}

export default Home