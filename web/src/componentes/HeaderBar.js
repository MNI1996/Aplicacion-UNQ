import React from 'react'
import { Link } from 'react-router-dom' 

import intl from './i18n-Palaras'
import { injectIntl } from 'react-intl'

import { useFirebaseApp, useUser } from 'reactfire'

import '../css/Header.css'

function HeaderBar(props){
    
    const firebase = useFirebaseApp()

    const user = useUser()

    const logOut = async () => {
        firebase.auth().signOut()
      }
    const palabras = intl()
    return(
        <div className="header">
            <Link className="logo" to={'/'}>{palabras['Viandas']}</Link>
            <div className="header-right">
                { user ?
                <><img className="imagen" src={user.photoURL} />
                <button className="header-logOut" onClick={ logOut }>{ palabras['LogOut'] }</button>
                </>: 'mandioca' }
            </div>
        </div>
    )
}


export default injectIntl(HeaderBar)