import React, { Fragment, useState, useEffect, useContext, Suspense, Component } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './Menu.js'
import HeaderBar from './HeaderBar.js'

import { injectIntl } from 'react-intl'
import intl from './i18n-Palaras'

import ReactPaginate from 'react-paginate'

import '../css/ventanaDeCompra.css'

function VenatanaDeCompra(props)   {
  
  const palabras = intl()
  
  return ( <VenatanaDeCompraBody palabras={palabras} /> )
} 

class VenatanaDeCompraBodyBase extends Component{
  constructor(props){
    super(props)
    this.palabras = props.palabras
    this.menusFiltrados = []
  }

  handleChangeSearch = () => {}
  

  render(){
    return (<>
      <input type="text" className="inputsearch" name="busqueda" onChange={event => 
        this.handleChangeSearch(event)} placeholder={this.palabras['busqueda']} />
      <MenusEnLista data={[]} />
      <ReactPaginate containerClassName='container' pageClassName='commentBox' 
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={17}//this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={9}//this.handlePageClick}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> 
      </>
      )}
}

export class MenusEnLista extends Component {

  render() {

    let MenusEnLista = (this.props.data ? this.props.data.map( (data) => {
      return <div key={data.index}>
        <div className='row'>
            <img src={data.url}></img>
        </div>
        <div className='row'>
          <h1>{data.menu}</h1>
          <h2>{data.precio}</h2>
          <p>{data.descripcion}</p>
        </div>
      </div>}): <div className="containerError"> 
    <p>No se encontró un restaurant con ese nombre</p></div> )

    return (
      <div className= 'container'>
        <div id="project-comments" className="commentList">
          <ul>{MenusEnLista}</ul>
        </div>
      </div>
    )
  }
}

const VenatanaDeCompraBody = injectIntl(withRouter(VenatanaDeCompraBodyBase))


export default VenatanaDeCompra


export { VenatanaDeCompraBody }