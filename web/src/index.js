import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { IntlProvider } from 'react-intl'

import firebaseConfig from './Firebase-Config.js'
import { FirebaseAppProvider } from 'reactfire'

import mensajesEn from './Translaciones/en.json'
import mensajesEs from './Translaciones/es.json'

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
ReactDOM.render(
                <IntlProvider locale={navegadorLengusje} messages={lenguaje[navegadorLengusje]}>
                    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
                        <App />
                    </FirebaseAppProvider>
                </IntlProvider>
                , document.getElementById('root'))


serviceWorker.unregister()
