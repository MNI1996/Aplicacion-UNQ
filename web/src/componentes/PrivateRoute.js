import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import 'firebase/auth'
import { useUser } from 'reactfire'


const PrivateRoute = ({ render: Component, path, ...rest }) => {
  const currentUser = useUser()
  return (
    <Route exact path={path} {...rest} render={ props => currentUser ? 
      (<Component {...props} />) : 
      (<Redirect to={'/'} {...props}/> )
    }/>)
}


export default PrivateRoute