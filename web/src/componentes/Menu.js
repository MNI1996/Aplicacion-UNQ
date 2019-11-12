import React from 'react'
import '../css/Home.css'


function Menu(props){

        const { menu } = props  
        return(
            <div className= 'menu'>
                <h1> {props.menu} </h1>
            </div>
        )
    }


export default Menu