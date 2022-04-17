import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest} component={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }/>
  )
}

export default PrivateRoute