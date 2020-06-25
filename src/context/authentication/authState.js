import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
    REGISTER_SUCCESSFUL,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    //the functions
    const registerUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data);
            console.log(response.data);

            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: response.data
            })

            // Get the user
            userAuthenticated();
        } catch (error) {
            //console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
    }

    //return the authenticated user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            //TODO: function to send the token for headers
            tokenAuth(token);
        } 

        try {
            const response = await clientAxios.get('/api/auth');
            //console.log(response);
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // When the user Log In
    const logIn = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data);
            
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });    
            
            // get the User
            userAuthenticated();
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                logIn,
                userAuthenticated
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;