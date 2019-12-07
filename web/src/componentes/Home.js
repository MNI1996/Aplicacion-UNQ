import React, { Fragment, useState } from 'react'
import UserLoged from './UserLoged'
import HeaderBar from './HeaderBar'
import { useFirebaseApp, useUser } from 'reactfire'

import Login from './login'


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