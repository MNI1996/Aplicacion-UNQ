import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'

import Lenguaje from './componentes/Lenguaje'
import Home from './componentes/Home'
import LogIn from './componentes/login'
import Register from './componentes/Register'

function App() {
  return (
    <Suspense fallback={Lenguaje}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <div><Home {...props} /> </div>}/>
          <Route exact path="/Registrarse" render={props => <div><Register {...props} /> </div>}/>
          <Route exact path="/Lenguaje" component={Lenguaje}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )}

export default App
