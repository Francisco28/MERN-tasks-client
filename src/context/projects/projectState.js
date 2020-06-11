import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT } from '../../types';

const ProjectState = props => {
    
    const initialState = {
        projects : [
            { id: 1, name: 'Virtual Store'},
            { id: 2, name: 'Intranet'},
            { id: 3, name: 'Design of Web site'},
            { id: 4, name: 'MERN'}
        ],
        form : false
    }

    //Dispatch to exect the accions
    const [ state, dispatch ] = useReducer(projectReducer, initialState);

    //series of functions to exect the CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }


    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;