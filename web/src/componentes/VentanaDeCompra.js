import React, { Fragment, useState, useEffect, useContext, Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './Menu.js'
import HeaderBar from './HeaderBar.js'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import debounce from 'debounce'

import '../css/Home.css'

function MenusEnLista(props)   {
    
  const [ dataComprador, setDataComprador ] = useState(null)
  const [ busqueda, setBusqueda ] = useState('')
  const [ menus, setMenus ]  = useState(['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr'])
  const [ menusFiltrados, setMenusFiltrados ] = useState([])

  useEffect(() => {
    setMenusFiltrados(menus)
    // getRestos()
    //     .then(response => this.setState({ restos: response, restosFiltrados: response }))
    //     .catch(error => console.log(error));
  },[])  

  
  const showAllMenus = () => {
    if (menusFiltrados) {
      return menusFiltrados.map(menu => (<Menu key={menu} menu={menu} />))}
    return ( <div className="containerError">
        <p>No se encontró un restaurant con ese nombre</p></div>)} 

  const handleChangeSearch = (event) => {
      debounce(setMenusFiltrados(menus.filter(menu => menu.includes(event.target.value)))
        ,200)
      // getResto({ name: name }).then(resto => this.setState({ restosFiltrados: resto }))
      //const newRestos = this.state.restos.filter( resto => resto.name.toLowerCase().includes(event.target.value.toLowerCase()));
      //this.setState({ restosFiltrados: [newRestos]});
    }

  const palabras = intl()
  
  return ( <>
    <HeaderBar />
        <input type="text" className="inputsearch" name="busqueda" onChange={event => handleChangeSearch(event)} placeholder={palabras[busqueda]} />
          <ul className="listMenu">
            { showAllMenus() }
          </ul> </>)
} 


export default (injectIntl(MenusEnLista))
