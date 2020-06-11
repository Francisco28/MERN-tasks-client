import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS } from '../../types';




const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Virtual Store'},
        { id: 2, name: 'Intranet'},
        { id: 3, name: 'Design of Web site'},
        { id: 4, name: 'MERN'}
    ];
    
    
    const initialState = {
        projects : [],
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

    //Get the projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }


    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;