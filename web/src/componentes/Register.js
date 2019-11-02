import React from "react";
import { injectIntl } from "react-intl";

import HeaderBar from './HeaderBar'

class Register extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                password: '',
                adress:'',
                long: '',
                lat:''
                    };
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        // signUp(this.state).then(user=>this.props.history.push({ pathname: '/login',
        //                                                     }))
        
    }

    render(){

        const {loginIn} = this.props
        const {name, password, adress, lat, long} = this.state
        
        const intl = this.props.intl
        const Registrar = intl.formatMessage({
        id: 'Register',
        defaultMessage: 'eh ta mal'
        })
        const Usuario = intl.formatMessage({
        id: 'Usuario',
        defaultMessage: 'eh ta mal'
        })
        const Contraseña = intl.formatMessage({
        id: 'Contraseña',
        defaultMessage: 'eh ta mal'
        })
        return(
            <div>
                <HeaderBar />
                <h1>{Registrar}</h1>
                <h1>{Usuario}</h1>
                <input type="text" className="inputLogin" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder={Usuario} />                     
                <h1>{Contraseña}</h1>
                <input type="password" className = "inputLogin" name ="password" value={this.state.password} onChange={this.handleChange} placeholder="Contraseña"/>          
                <h1>{Usuario}</h1>
                <input type="text" name ="adress"  className="inputLogin" value={this.state.adress} onChange={this.handleChange}placeholder="Direccion"/> 
                <h1>{Usuario}</h1>
                <input type="text"  name ="lat" className="inputLogin" value={this.state.latitud} onChange={this.handleChange} placeholder="Latitud"/>
                <h1>{Usuario}</h1>
                <input type="text"  name ="long" className="inputLogin" value={this.state.longitud} onChange={this.handleChange} placeholder="Longitud"/>
                <br/>
                <input className="inputSubmit" type="submit" value ="Ingresar" ></input>
                </div>  
    )}

}

Register = injectIntl(Register)

export default Register