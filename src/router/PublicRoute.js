import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
      <Route {...rest} component={(props) => 
          !isLoggedIn ? <Component {...props}/> : <Redirect to="/" />
      }/>
  )
}

export default PublicRoute