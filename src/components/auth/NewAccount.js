import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import  AlertContext  from '../../context/alerts/alertContext';

const NewAccount = () => {

    //extract the values of context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

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
        }

        //password minium of 6 caracters

        //the 2 passwords must be equals

        //pasarlo al action
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