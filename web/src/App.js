import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch, BrowserRouter, Router } from 'react-router-dom'
import './css/App.css'

import HeaderBar from './componentes/HeaderBar'
import PrivateRoute from './componentes/PrivateRoute'
import LogIn from './componentes/login'
import Home from './componentes/Home'
import ProviderP from './componentes/PerfilProovedor'
import VenatanaDeCompra from './componentes/VentanaDeCompra'

import * as ROUTES from './constant/routes'

const App = () => {
    return ( 
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        <div>
          <HeaderBar/>
          <hr />
          <Route exact path={ROUTES.LANDING} component={props => <div><LogIn {...props} /> </div>}/>
          <PrivateRoute path={ROUTES.HOME} component={props => <div><Home {...props} /> </div>}/>
          <PrivateRoute path={ROUTES.PROVPROFILE} component={props => <div> <ProviderP {...props}/> </div>}/>
          <PrivateRoute path={ROUTES.MENUS} component={props => <div><VenatanaDeCompra {...props} /> </div>}/>
          <PrivateRoute path={ROUTES.CREARMENU} component={props => <div><VenatanaDeCompra {...props} /> </div>}/>
          <Redirect to={ROUTES.LANDING}/>
        </div>
      </BrowserRouter>
    </Suspense>
  )}

export default (App)
