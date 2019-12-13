import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'

import Lenguaje from './componentes/Lenguaje'
import Home from './componentes/Home'
import ListaMenus from './componentes/VentanaDeCompra'
import ProviderP from './componentes/PerfilProovedor'
import PrivateRoute from './componentes/PrivateRoute'

function App() {
  return (
    <Suspense fallback={Lenguaje}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <div><Home {...props} /> </div>}/>
          <PrivateRoute  exact path="/ProvProfile" component={props => <div> <ProviderP {...props}/> </div>}/>
          <PrivateRoute exact path="/Menus" component={props => <div><ListaMenus {...props} /> </div>}/>
          <Route exact path="/Lenguaje" component={Lenguaje}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )}

export default App
