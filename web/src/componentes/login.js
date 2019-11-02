import React, { useState } from "react";
import { injectIntl, IntlShape } from 'react-intl'
import { Link } from 'react-router-dom'
import '../css/Login.css'
import HeaderBar from "./HeaderBar";

class LogIn extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',

    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    /*  signIn({ name: this.state.userName, password: this.state.password })
        .then(userId => {
            this.props.history.push({
                pathname: '/home',
                state: { username: userId },
            })
            return userId
        }).then((userId) => {
            setUser({ userId, ...this.state })
        }

        )
        .catch((error) => {
            this.setState({ error: "Usuario o Contraseña Invalido" })
            throw (this.state.error);
        }); */
    this.props.history.push({
      pathname: '/home',
    })
  }


  render() {
    const intl = this.props.intl
    const Bienvenidos = intl.formatMessage({
      id: 'Bienvenidos',
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
    const Ingreso = intl.formatMessage({
      id: 'Ingreso',
      defaultMessage: 'eh ta mal'
    })
    const Registrar = intl.formatMessage({
      id: 'Register',
      defaultMessage: 'eh ta mal'
    })
    return (
      <div className="containerLogin">
        <HeaderBar/>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h2>{Bienvenidos}</h2>
            <h1>{Usuario}</h1>
            <input type="text" className="inputLogin" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder={Usuario} />
            <h1>{Contraseña}</h1>
            <input type="password" className="inputLogin" name="password" value={this.state.password} onChange={this.handleChange} placeholder={Contraseña} />
            <br />
            <input className="inputSubmit" type="submit" value={Ingreso}></input>
            <br />
            <Link className="link" to={'/Registrarse'}>{Registrar}</Link>
          </form>
        </div>
      </div>  
    );
  }
   

}

LogIn = injectIntl(LogIn)

export default LogIn