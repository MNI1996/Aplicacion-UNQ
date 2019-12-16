import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'


import { FirebaseAppProvider } from 'reactfire'

import { IntlProvider } from 'react-intl'
import mensajesEn from './Translaciones/en.json'
import mensajesEs from './Translaciones/es.json'

import './index.css'

const lenguaje = {
    'en': mensajesEn ,
    'es': mensajesEs ,
}

const navegadorLengusje = navigator.language.split(/[-_]/)[0]

//menu con loing y registrar
//registrar usuarios cliente
//login -> provedores y cliente
//menu de busqueda
//pagina de compra
//menu de provedor
//crear menu
ReactDOM.render(<IntlProvider locale={navegadorLengusje} messages={lenguaje[navegadorLengusje]}>
                    <FirebaseAppProvider firebaseConfig={JSON.parse(process.env.REACT_APP_FIREBASE)} >
                        <BrowserRouter>
                                <App /> 
                        </BrowserRouter>
                    </FirebaseAppProvider>
                </IntlProvider>
                , document.getElementById('root'))


serviceWorker.unregister()
