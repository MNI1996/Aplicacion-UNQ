import React, { Component } from "react";

import HeaderBar from './HeaderBar'
import Mapa from './mapa'
import { injectIntl } from "react-intl";

class Home extends Component{
    
    render(){
        const intl = this.props.intl
        return(
            <div>
                <HeaderBar />
                <Mapa />
            </div>
    )}

}

Home = injectIntl(Home)

export default Home