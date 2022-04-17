import React from 'react'

import { Redirect, Route, Switch } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import SignUpScreen from '../components/auth/SignUpScreen';

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/signup" component={SignUpScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter