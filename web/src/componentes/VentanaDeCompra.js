import React, { Fragment, useState, useEffect, useContext, Suspense, Component } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './Menu.js'
import HeaderBar from './HeaderBar.js'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import ReactPaginate from 'react-paginate'

import '../css/Home.css'

function MenusEnLista(props)   {

  // useEffect(() => {
  //   setMenusFiltrados(menus)
    // getRestos()
    //     .then(response => this.setState({ restos: response, restosFiltrados: response }))
    //     .catch(error => console.log(error));
  // },[])  

  
  // const showAllMenus = () => {
  //   if (menusFiltrados) {
  //     return menusFiltrados.map(menu => (<Menu key={menu} menu={menu} />))}
  //   return ( <div className="containerError">
  //       <p>No se encontró un restaurant con ese nombre</p></div>)} 

  // const handleChangeSearch = (event) => {
  //     debounce(setMenusFiltrados(menus.filter(menu => menu.includes(event.target.value)))
  //       ,200)
      // getResto({ name: name }).then(resto => this.setState({ restosFiltrados: resto }))
      //const newRestos = this.state.restos.filter( resto => resto.name.toLowerCase().includes(event.target.value.toLowerCase()));
      //this.setState({ restosFiltrados: [newRestos]});
    // }

  const palabras = intl()
  
  return ( <MenusEnListaBody palabras={palabras} /> )
} 

class MenusEnListaBodyBase extends Component{
  constructor(props){
    super(props)
    this.palabras = props.palabras
    this.menusFiltrados = []
  }

  showAllMenus = () => {
    if (this.menusFiltrados) {
      return this.menusFiltrados.map(menu => (<Menu key={menu} menu={menu} />))}
    return ( <div className="containerError">
        <p>No se encontró un restaurant con ese nombre</p></div>)}

  handleChangeSearch = () => {}
  

  render(){
    return (<>
      <input type="text" className="inputsearch" name="busqueda" onChange={event => 
        this.handleChangeSearch(event)} placeholder={this.palabras['busqueda']} />
      <MenusBody data={[]} />
      <ReactPaginate pageCount={4} pageRangeDisplayed={4} marginPagesDisplayed={2} />
      </>
      )}
}

export class MenusBody extends Component {

  render() {
    let MenusEnLista = this.props.data.map(function(comment, index) {
      return <div key={index}>{comment.comment}
      <div className='row'>
          <img src={props.menu.url}></img>
      </div>
      <div className='row'>
        <h1> {props.menu} </h1>
        <h2>{props.menu.precio}</h2>
        <p>{props.menu.descripcion}</p>
      </div>
      </div>
    })

    return (
      <div className= 'container'>
        <div id="project-comments" className="commentList">
          <ul>{MenusEnLista}</ul>
        </div>
      </div>
    )
  }
}
const MenusEnListaBody = injectIntl(withRouter(MenusEnListaBodyBase))


export default MenusEnLista

export { MenusEnListaBody }