import React, { Fragment } from 'react'
import { injectIntl } from 'react-intl'
import Menu from './Menu.js'
import HeaderBar from './HeaderBar.js'
import '../css/Home.css'

class MenusEnLista extends React.Component   {

  constructor(props) {
    super(props)
    this.state = {
        busqueda: '',
        menus: ['1', 'pomberito', '3', '4', '5','ssssssssssssss','rrrrrrrrrrrrrr'],
        menusFiltrados:[],
    } 
   }

   UNSAFE_componentWillMount() {
    this.setState( { menusFiltrados: this.state.menus } )
    // getRestos()
    //     .then(response => this.setState({ restos: response, restosFiltrados: response }))
    //     .catch(error => console.log(error));
  }

  showAllMenus() {
    if (this.state.menusFiltrados.length == 0) {
        return (
            <div className="containerError">
                <p>No se encontró un restaurant con ese nombre</p>
            </div>
        )}
    return this.state.menusFiltrados.map(menu => (
            <Menu key={menu} menu={menu} />))
  }

  handleChangeSearch(event) {
      this.setState({menusFiltrados: this.state.menus.filter(
        menu => menu.includes(event.target.value))})

      // getResto({ name: name }).then(resto => this.setState({ restosFiltrados: resto }))
      //const newRestos = this.state.restos.filter( resto => resto.name.toLowerCase().includes(event.target.value.toLowerCase()));
      //this.setState({ restosFiltrados: [newRestos]});

  }

  render(){
    const intl = this.props.intl
    const Busqueda = intl.formatMessage({
        id: 'Busqueda',
        defaultMessage: 'eh ta mal'
        })
    return(
      <Fragment>
        <HeaderBar />
        <input type="text" className="inputsearch" name="busqueda" onChange={event => this.handleChangeSearch(event)} placeholder={Busqueda} />
          <ul className="listMenu">
            { this.showAllMenus() }   
          </ul>
      </Fragment>
    )}
} 

// eslint-disable-next-line no-class-assign
export default injectIntl(MenusEnLista)
