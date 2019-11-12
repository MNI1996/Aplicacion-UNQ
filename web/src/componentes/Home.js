import React, { Fragment } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom'
import MenusEnLista from './listaMenus'
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
            <Fragment>
                <HeaderBar />
                <MenusEnLista/>
            </Fragment>
    )}
    
}

Home = injectIntl(Home)

export default Home