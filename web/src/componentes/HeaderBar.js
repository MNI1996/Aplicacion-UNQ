import React from 'react'
import { Link } from 'react-router-dom' 
import { injectIntl } from 'react-intl'
import { useFirebaseApp, useUser } from 'reactfire'

import '../css/Header.css'

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
        defaultMessage: 'eh ta mal'
    })
    return(
        <div className="header">
            <Link className="logo" to={'/'}>{Viandas}</Link>
            <div className="header-right">
                { user ?
                <>
                <img className="imagen" src={user.photoURL} />
                <button className="header-logOut" onClick={logOut}>{ LogOut }</button>
                </>
                : 'mandioca' }
            </div>
        </div>
    )
}


export default injectIntl(HeaderBar)