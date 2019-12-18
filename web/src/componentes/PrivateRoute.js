import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from '../constant/routes'

import 'firebase/auth'
import { useUser } from 'reactfire'


const PrivateRoute = ({ component: Component, path, ...rest }) => {
  
  const currentUser = useUser()
  return (
    <Route exact path={path} {...rest} render={ props => currentUser ? 
      (<Component {...props} />) : 
      (<Redirect to={ROUTES.LANDING}/> )
    }/>)

}


export default PrivateRoute