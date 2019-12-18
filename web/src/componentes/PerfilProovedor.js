import React, { Fragment, useState, useEffect, Component } from 'react'
import Menu from './Menu.js'
import { withRouter } from 'react-router-dom' 

import * as ROUTES from '../constant/routes'

import intl from './i18n-Palaras'
import {injectIntl} from 'react-intl'


function ProviderP(props){

  const palabras = intl()
  

return( <>
  <MenusEnListaBody palabras={palabras} />
  <OrdenesEnListaBody palabras={palabras}/>
  </>)

}


class MenusEnListaBodyBase extends Component  {

  constructor(props){
    super(props)
    this.palabras = props.palabras
    this.history = props.history
  }

    state = { busqueda: '',
     menus:'', 
     menusFiltrados:''
    }
   
  
  menusFiltrados1= ['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr']
  showAllMenus = () => {
    if (this.menusFiltrados1.length == 0) {
      return (
        <div className="containerError">
          <p>No se encontró un restaurant con ese nombre</p>
        </div>
      )}
    return  this.menusFiltrados1.map(menu => (<Menu key={menu} menu={menu} />))
    } 
  
    handleChangeSearch = (event) => {
        this.setState({menusFiltrados:(this.state.menus.filter(menu => menu.includes(event.target.value)))})  
    }

    irACrear=()=>{ this.history.push(ROUTES.CREARMENU) }    
    
    render(){return (<div>
      <div>
        <button className="inputSubmit" onClick={this.irACrear}>{this.palabras['Crear']} </button> </div>
      <div>
        <input type="text" className="inputsearch" name="busqueda" onChange={event => 
          this.handleChangeSearch(event)} placeholder={this.palabras['Busqueda']} />
        <ul className="listMenu">
          { this.showAllMenus()}
        </ul>
      </div>
    </div>
   )//.map(menu => <li> {menu}</li>)  esto iria en showAllMenus()
    }   
  }

  
class OrdenesEnListaBodyBase extends Component  {

  constructor(props){
    super(props)
    this.palabras = props.palabras
    this.history = props.history
  }

  state = { busqueda: '',
    ordenes:'', 
    ordenesFiltrados:''
  }
    
  ordenesFiltrados1= ['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr']
  showAllOrdenes = () => {
    if (this.ordenesFiltrados1.length == 0) {
      return (
        <div className="containerError">
          <p>No se encontró un restaurant con ese nombre</p>
        </div>
      )}
    return this.ordenesFiltrados1.map(menu => (<Menu key={menu} menu={menu} />))
  } 
  
  handleChangeSearch = (event) => {
  this.setState({OrdenesFiltrados: (this.state.ordenes.filter(menu => menu.includes(event.target.value)))})
  }

  render(){return (<div>
    <input type="text" className="inputsearch" name="busqueda" onChange={event => 
      this.handleChangeSearch(event)} placeholder={this.palabras['Busqueda']} />
      <ul className="listMenu">
        { this.showAllOrdenes() }   
      </ul></div>)}
  }


const OrdenesEnListaBody = injectIntl(withRouter(OrdenesEnListaBodyBase))
const MenusEnListaBody = injectIntl(withRouter(MenusEnListaBodyBase))

export default ProviderP

export { OrdenesEnListaBody, MenusEnListaBody }
