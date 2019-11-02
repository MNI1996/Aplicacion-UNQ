import React from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom'

import HeaderBar from './HeaderBar'
import Mapa from './mapa'

class Home extends React.Component{
    
    render(){
        const intl = this.props.intl
        const Viandas = intl.formatMessage({
            id: 'Viandas',
            defaultMessage: 'eh ta mal'
            })
        return(
            <div>
                <HeaderBar />
                <h1> aca hay un h1 {Viandas}</h1>
                <Mapa />
            </div>
    )}
    
}
//<Mapa />

Home = injectIntl(Home)

export default Home