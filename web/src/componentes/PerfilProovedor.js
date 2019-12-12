import React, { Fragment, useState, useEffect } from 'react'
import Menu from './Menu.js'
import HeaderBar from './HeaderBar.js'
import intl from './i18n-Palaras'
import {injectIntl} from 'react-intl'


function ProviderP(props){

return(<Fragment>
  <HeaderBar /> 
      {MenusEnLista(props)}
      {OrdenesEnLista(props)}
      </Fragment>)

}

function MenusEnLista(props)   {

  const palabras = intl(props.intl, ['Busqueda'])
  const Busqueda = palabras[0]
    
    const  {busqueda, setBusqueda} = useState('')
    const  {menus, setMenus} = useState(['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr'])
    const  {menusFiltrados, setMenusFiltrados} = useState([])
  
    //useEffect(() => {
    //  setMenusFiltrados(menus)
      // getRestos()
      //     .then(response => this.setState({ restos: response, restosFiltrados: response }))
      //     .catch(error => console.log(error));
   // })
  
   const menusFiltrados1= ['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr']
    const showAllMenus = () => {
      if (menusFiltrados1.length == 0) {
        return (
          <div className="containerError">
            <p>No se encontró un restaurant con ese nombre</p>
          </div>
        )}
      return menusFiltrados1.map(menu => (<Menu key={menu} menu={menu} />))
    } 
  
    const handleChangeSearch = (event) => {
        setMenusFiltrados(menus.filter(menu => menu.includes(event.target.value)))
  
        // getResto({ name: name }).then(resto => this.setState({ restosFiltrados: resto }))
        //const newRestos = this.state.restos.filter( resto => resto.name.toLowerCase().includes(event.target.value.toLowerCase()));
        //this.setState({ restosFiltrados: [newRestos]});
  
    }

    return (<div>
      <input type="text" className="inputsearch" name="busqueda" onChange={event => handleChangeSearch(event)} placeholder={Busqueda} />
        <ul className="listMenu">
          { showAllMenus() }   
        </ul></div>
   )
       
  }

  
  function OrdenesEnLista(props)   {

    const palabras = intl(props.intl, ['Busqueda'])
    const Busqueda = palabras[0]
      
      const  {busqueda, setBusqueda} = useState('')
      const  {ordenes, setOrdenes} = useState(['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr'])
      const  {ordenesFiltrados, setOrdenesFiltrados} = useState([])
    
      //useEffect(() => {
      //  setMenusFiltrados(menus)
        // getRestos()
        //     .then(response => this.setState({ restos: response, restosFiltrados: response }))
        //     .catch(error => console.log(error));
     // })
    
     const ordenesFiltrados1= ['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr']
      const showAllOrdenes = () => {
        if (ordenesFiltrados1.length == 0) {
          return (
            <div className="containerError">
              <p>No se encontró un restaurant con ese nombre</p>
            </div>
          )}
        return ordenesFiltrados1.map(menu => (<Menu key={menu} menu={menu} />))
      } 
    
      const handleChangeSearch = (event) => {
        setOrdenesFiltrados(ordenes.filter(menu => menu.includes(event.target.value)))
    
          // getResto({ name: name }).then(resto => this.setState({ restosFiltrados: resto }))
          //const newRestos = this.state.restos.filter( resto => resto.name.toLowerCase().includes(event.target.value.toLowerCase()));
          //this.setState({ restosFiltrados: [newRestos]});
    
      }
  
      return (<div>
        <input type="text" className="inputsearch" name="busqueda" onChange={event => handleChangeSearch(event)} placeholder={Busqueda} />
          <ul className="listMenu">
            { showAllOrdenes() }   
          </ul></div>)
         
    }

export default injectIntl(ProviderP)
