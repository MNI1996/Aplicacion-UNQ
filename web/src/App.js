import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css';


import Lenguaje from './componentes/Lenguaje'
import Home from './componentes/Home'
import LogIn from './componentes/login'
import Register from './componentes/Register'

class App extends Component {
  render(){
      return (
        <BrowserRouter>
          <Suspense fallback={Lenguaje}>
            <Switch>
              <Route exact path="/" render={props => <div><LogIn {...props} /> </div>}/>
              <Route exact path="/Home"  render={props => <div><Home {...props} /> </div>}/>
              <Route exact path="/Registrarse" render={props => <div><Register {...props} /> </div>}/>
              <Route exact path="/Lenguaje" component={Lenguaje}/>
            </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
