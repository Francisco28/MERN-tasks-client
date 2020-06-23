import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

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



    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;