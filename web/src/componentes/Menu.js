import React from 'react'
import '../css/Home.css'


function Menu(props){

        const { menu } = props  
        return(
            <div className= 'container'>
                <div className='row'>
                    <img src={props.menu.url}></img>
                </div>
                <div className='row'>
                    <h1> {props.menu} </h1>
                    <h2>{props.menu.precio}</h2>
                    <p>{props.menu.descripcion}</p>
                </div>                
            </div>
        )
    }


export default Menu