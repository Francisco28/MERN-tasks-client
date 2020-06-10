import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State for login
    const [ user, saveUser ] = useState({
        email: '',
        password: ''
    });

    //extract of user
    const { email, password } = user; 

    //function that will execute every the user write
    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        
        //validar que no haya campos vacios

        //pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log in</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log in"
                        />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    Get Account
                </Link>
            </div>
        </div>
     );
}
 
export default Login;