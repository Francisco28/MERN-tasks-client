

import { 
    REGISTER_SUCCESSFUL,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ERROR:    
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        
           
            

        default: 
            return state;
    }
}