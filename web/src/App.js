import React from 'react';
import HeaderBar from './HeaderBar.js';
import Favicon from './Favicon.js';
import Mapa from './mapa'
import './App.css';

function App() {
  return (
    <div>
        <head  className="App">
          <Favicon />
        </head>
        <body>
          <HeaderBar />
          <Mapa />
        </body>  
    </div>
  );
}

export default App;
