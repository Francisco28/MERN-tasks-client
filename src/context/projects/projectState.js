import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types';




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

    //add new project
    const addProject = project => {
        project.id = uuidv4();

        //insert the project in the state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })

    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;