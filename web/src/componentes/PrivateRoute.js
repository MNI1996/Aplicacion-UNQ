import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import 'firebase/auth'
import { useUser } from 'reactfire'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useUser()
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  )
}


export default PrivateRoute