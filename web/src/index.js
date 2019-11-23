import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { IntlProvider } from 'react-intl'
import { FirebaseAppProvider } from 'reactfire'
import mensajesEn from './Translaciones/en.json'
import mensajesEs from './Translaciones/es.json'

const lenguaje = {
    'en': mensajesEn ,
    'es': mensajesEs ,
}

const navegadorLengusje = navigator.language.split(/[-_]/)[0]

console.log(process.env.REACT_APP_FIREBASE)
//menu con loing y registrar
//registrar usuarios cliente
//login -> provedores y cliente
//menu de busqueda
//pagina de compra
//menu de provedor
//crear menu
ReactDOM.render(
                <IntlProvider locale={navegadorLengusje} messages={lenguaje[navegadorLengusje]}>
                    <FirebaseAppProvider firebaseConfig={process.env.REACT_APP_FIREBASE} >
                        <App />
                    </FirebaseAppProvider>
                </IntlProvider>
                , document.getElementById('root'))


serviceWorker.unregister()
