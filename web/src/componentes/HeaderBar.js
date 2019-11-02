import React from 'react'
import { Link } from 'react-router-dom' 
import { injectIntl } from 'react-intl'

class HeaderBar extends React.Component{
    
    render(){
        const intl = this.props.intl
        const Viandas = intl.formatMessage({
        id: 'Viandas',
        defaultMessage: 'eh ta mal'
        })
        return(
            <div className="header">
            <Link className="logo" to={'/'}>{Viandas}</Link>
            <div className="header-right"></div>
        </div>
        )
    }
}

HeaderBar = injectIntl(HeaderBar)

export default HeaderBar;