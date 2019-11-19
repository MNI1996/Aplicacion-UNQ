import React from 'react'
import { Link } from 'react-router-dom' 
import { injectIntl } from 'react-intl'
import { useFirebaseApp, useUser } from 'reactfire'

import '../css/App.css'

function HeaderBar(props){
    
    const firebase = useFirebaseApp()

    const user = useUser()

    const logOut = async () => {
        firebase.auth().signOut()
      }
    const intl = props.intl
    const Viandas = intl.formatMessage({
    id: 'Viandas',
    defaultMessage: 'eh ta mal'
    })
    const LogOut = intl.formatMessage({
        id: 'LogOut',
        defaultMessage: 'LogOut'
    })
    return(
        <div className="header">
            <Link className="logo" to={'/'}>{Viandas}</Link>
            <div className="header-right">
                { user ? 
                <button className="header-logOut" onClick={logOut}>{ LogOut }</button>
                : 'mandioca' }
            </div>
        </div>
    )
}


export default injectIntl(HeaderBar)