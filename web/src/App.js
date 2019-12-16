import React, { Suspense, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './css/App.css'
import { UserContext } from './componentes/UserContext'

import PrivateRoute from './componentes/PrivateRoute'
import LogIn from './componentes/login'
import Home from './componentes/Home'
import ProviderP from './componentes/PerfilProovedor'
import ListaMenus from './componentes/VentanaDeCompra'
import Lenguaje from './componentes/Lenguaje'

function App(props) {

  return (
    <Suspense fallback={Lenguaje}>
        <Switch>
          <Route exact path="/" render={props => <div><LogIn {...props} /> </div>}/>
          <PrivateRoute path="/Home" render={props => <div><Home {...props} /> </div>}/>
          {/* <PrivateRoute path="/ProvProfile" render={props => <div> <ProviderP {...props}/> </div>}/> */}
          <PrivateRoute path="/ProvProfile" render={props => <div> <ProviderP {...props}/> </div>}/>
          <PrivateRoute path="/Menus" render={props => <div><ListaMenus {...props} /> </div>}/>
          <Route exact path="/Lenguaje" render={Lenguaje}/>
          <Redirect to="/"/>
        </Switch>
    </Suspense>
        
  )}

export default App
