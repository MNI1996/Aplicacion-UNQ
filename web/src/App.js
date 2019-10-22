import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css';


import LogIn from './componentes/login'
import Home from './componentes/Home'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={LogIn}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Lenguaje" component={LogIn}/>
          </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
