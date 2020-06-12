import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';


import { 
    TASKS_PROJECT
 } from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose Platform', status: true, projectId: 1 },
            { name: 'Choose Colors', status: false, projectId: 2 },
            { name: 'Choose Platforms of pay', status: false, projectId: 3 },
            { name: 'Choose Hosting', status: true, projectId: 4 },
            { name: 'Choose Platform', status: true, projectId: 1 },
            { name: 'Choose Colors', status: false, projectId: 2 },
            { name: 'Choose Platforms of pay', status: false, projectId: 3 },
            { name: 'Choose Platform', status: true, projectId: 4 },
            { name: 'Choose Colors', status: false, projectId: 1 },
            { name: 'Choose Platforms of pay', status: false, projectId: 2 },
            { name: 'Choose Platform', status: true, projectId: 3 },
            { name: 'Choose Colors', status: false, projectId: 4 },
            { name: 'Choose Platforms of pay', status: false, projectId: 3 },
        ],
        tasksproject: null
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

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                getTasks
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;