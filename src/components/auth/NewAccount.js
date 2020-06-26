import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext  from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {

    //extract the values of context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //extract authContext
    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

    //en caso de que el usuario se haya auenticado, registrado o sea un registro duplicado
    useEffect(() => {
        if(authenticated) {
            props.history.push('/projects');
        }

        if(message) {
            showAlert(message.msg, message.category);
        }
        //eslint-disable-next-line
    }, [message, authenticated, props.history]);

    //State for login
    const [ user, saveUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    //extract of user
    const { name, email, password, confirm } = user; 

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
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || email.trim() === '') {
            showAlert('All the fields are required', 'alerta-error');
            return;
        }

        //password minium of 6 caracters
        if(password.length < 6) {
            showAlert('The password must be at least 6 characters', 'alerta-error');
            return;
        }

        //the 2 passwords must be equals
        if(password !== confirm) {
            showAlert('The password are not equals', 'alerta-error');
            return;
        }

        //pasarlo al action
        registerUser({
            name,
            email,
            password
        });
    }

    return ( 
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Get an account</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Return to Log in
                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount;