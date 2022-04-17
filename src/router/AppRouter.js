import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { login } from "../actions/auth";
import Layout from "../components/Layout/Layout";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(login(uid, displayName, email))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [isLoggedIn, dispatch, setIsLoggedIn])

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            component={AuthRouter}
            path="/auth"
            isLoggedIn={isLoggedIn}
          />

          <PrivateRoute 
            exact
            isLoggedIn={isLoggedIn}
            path="/"
            component={Layout}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
