import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';


import { 
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK
 } from '../../types';

const TaskState = props => {

    const initialState = {
        tasks: [
            {id: 1, name: 'Choose Platform', status: true, projectId: 1 },
            {id: 2, name: 'Choose Colors', status: false, projectId: 2 },
            {id: 3, name: 'Choose Platforms of pay', status: false, projectId: 3 },
            {id: 4, name: 'Choose Hosting', status: true, projectId: 4 },
            {id: 5, name: 'Choose Platform', status: true, projectId: 1 },
            {id: 6, name: 'Choose Colors', status: false, projectId: 2 },
            {id: 7, name: 'Choose Platforms of pay', status: false, projectId: 3 },
            {id: 8, name: 'Choose Platform', status: true, projectId: 4 },
            {id: 9, name: 'Choose Colors', status: false, projectId: 1 },
            {id: 10, name: 'Choose Platforms of pay', status: false, projectId: 2 },
            {id: 11, name: 'Choose Platform', status: true, projectId: 3 },
            {id: 12, name: 'Choose Colors', status: false, projectId: 4 },
            {id: 13, name: 'Choose Platforms of pay', status: false, projectId: 3 },
        ],
        tasksproject: null,
        errortask: false
    }

    //create dispatch and state
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //create the functions

    //get the tasks of a project
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    //add a task to project selected
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    //validate and show an error if is necessary
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    //validate task for id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;