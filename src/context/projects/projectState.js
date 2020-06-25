import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types';

import clientAxios from '../../config/axios';


const ProjectState = props => {
    
    const initialState = {
        projects : [],
        form : false,
        errorform: false,
        project: null
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
    const getProjects = async () => {
        try {
            const result = await clientAxios.get('/api/projects');
            
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
            });
        } catch (error) {
            console.log(error);
        }
    }

    //add new project
    const addProject = async project => {

        try {
            const result = await clientAxios.post('/api/projects', project);
            console.log(result);
            
            //insert the project in the state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            });
            
        } catch (error) {
            console.log(error);
        }

    }

    //validate the form for mistakes
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //select the project that the user press clic
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    //delete a project
    const deleteProject = async projectId => {
        try {
            await clientAxios.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;