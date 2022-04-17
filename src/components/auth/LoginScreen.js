import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginWithEmailPassword, loginWithGoogle } from "../../firebase/firebase-config";
import "./login.css";
import google from '../../images/google-logo.png';
import background from '../../images/background-login.svg';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const LoginScreen = () => {
  const dispatch = useDispatch();
  const initForm = {
    "email": "",
    "password": ""
  }

  const [formValues, setFormValues] = useState(initForm);

  const { email, password } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  }

  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(email, password));
  }

  return (
    <div className="container login-container">
      <img src={background} width={"100%"} height={"100%"} className="background-img" alt="Background login"/>

      <div className="row justify-content-between">
        <div className="col-md-5 login__greeting">
          <h1>Calendlify</h1>
          <p>Organize your present and future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum.</p>
        </div>
        <div className="col-md-5 login-form-1">
          <h2>Sign in</h2>
          <form className="login-form" onSubmit={handleUserLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <p className="text-center">OR</p>

            <div className="btn__google" onClick={handleGoogleLogin}>
              <div className="btn__google-logo">
                <img src={google} width={"30"} alt="Google logo" />
              </div>
              <div className="btn__google-txt">
                <p>Sign in with Google</p>
              </div>
            </div>
            <Link to="/auth/signup" className="small signup-link mt-3 text-right">Haven't got any account? <strong>Sign up</strong></Link>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginScreen;
