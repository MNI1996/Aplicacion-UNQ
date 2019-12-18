import React , { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 

import intl from './i18n-Palaras'
import { injectIntl } from 'react-intl'

import { useFirebaseApp, useUser } from 'reactfire'

import '../css/Header.css'

import * as ROUTES from '../constant/routes'

function HeaderBar(props){
    
  const firebase = useFirebaseApp()
  const user = useUser()
  const palabras = intl()
  
  return(
    <HeaderBarBody user={user} firebase={firebase} palabras={palabras} />
  )
}

class HeaderBarBodyBase extends Component{
  
  constructor(props){
    super(props)
    this.palabras = props.palabras
    this.firebase = props.firebase 
    this.user = props.user
  }

  logOut = async () => {
    this.firebase.auth().signOut()
    }

  shouldComponentUpdate(nextProps) {
    return this.user !== nextProps.user
  }

  render(){ return(
      <div className="header">
        <Link className="logo" to={ROUTES.LANDING}>{this.palabras['Viandas']}</Link>
        <div className="header-right">
        { this.user ?
          <><img className="imagen" src={ this.user.photoURL } />
          <button className="header-logOut" onClick={ this.logOut }>{ this.palabras['LogOut'] }</button></>
          : <div></div>  }
        </div>
      </div>
    )
  }

}

const HeaderBarBody = injectIntl(withRouter(HeaderBarBodyBase))


export default HeaderBar

export { HeaderBarBody }