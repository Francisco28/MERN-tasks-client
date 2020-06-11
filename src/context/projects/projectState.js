import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';


const ProjectState = props => {
    
    const initialState = {
        form : false
    }

    //Dispatch to exect the accions
    const [ state, dispatch ] = useReducer(projectReducer, initialState);

    //series of functions to exect the CRUD

    return (
        <projectContext.Provider
            value={{
                form: state.form
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;