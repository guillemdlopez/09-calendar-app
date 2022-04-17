import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../../firebase/firebase-config';
import { errorMessage } from '../../helpers/user-messages';
import background from '../../images/background-login.svg';

import "./login.css";


const SignUpScreen = () => {
    const initForm = {
        "name": "",
        "email": "",
        "password": "",
        "passwordRepeat": ""
    }
    const dispatch = useDispatch();
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

        if (password !== passwordRepeat) {
            errorMessage("Wrong password", "Both passwords must be exactly the same");
            return
        }
        dispatch(createUser(name, email, password));
    }

  return (
    <div className="container login-container">
        <img src={background} width={"100%"} height={"100%"} className="background-img"  alt="Background signup"/>
        <div className='row justify-content-between'>
            <div className="col-md-5 login__greeting">
            <h1>Calendlify</h1>
            <p>Organize your present and future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum.</p>
            </div>
            <div className="col-md-5 login-form-2">
                <h3>Sign up</h3>
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

                    <Link to="/login" className="small signup-link mt-3 text-right">Haven't got any account? <strong>Sign up</strong></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpScreen