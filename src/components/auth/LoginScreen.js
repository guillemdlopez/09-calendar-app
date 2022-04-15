import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../firebase/firebase-config";
import { errorMessage } from "../../helpers/user-messages";
import "./login.css";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const initForm = {
    "name": "",
    "email": "",
    "password": "",
    "passwordRepeat": ""
  }

  const [formValues, setFormValues] = useState(initForm);

  const { name, email, password, passwordRepeat } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleUserCreate = (e) => {
    e.preventDefault();
    console.log(password, passwordRepeat) 

    if (password !== passwordRepeat) {
      errorMessage("Wrong password", "Both passwords must be exactly the same")
      return
    }

    dispatch(createUser(name, email, password))
  }
  return (
    <div className="container login-container">
      <div className="row mb-5">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form className="login-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form className="signup-form" onSubmit={handleUserCreate}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
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
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm the password"
                name="passwordRepeat"
                value={passwordRepeat}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
