import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';


import { 
    TASKS_PROJECT
 } from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose Platform', status: true, proyectId: 1 },
            { name: 'Choose Colors', status: false, proyectId: 2 },
            { name: 'Choose Platforms of pay', status: false, proyectId: 3 },
            { name: 'Choose Hosting', status: true, proyectId: 4 },
            { name: 'Choose Platform', status: true, proyectId: 1 },
            { name: 'Choose Colors', status: false, proyectId: 2 },
            { name: 'Choose Platforms of pay', status: false, proyectId: 3 },
            { name: 'Choose Platform', status: true, proyectId: 4 },
            { name: 'Choose Colors', status: false, proyectId: 1 },
            { name: 'Choose Platforms of pay', status: false, proyectId: 2 },
            { name: 'Choose Platform', status: true, proyectId: 3 },
            { name: 'Choose Colors', status: false, proyectId: 4 },
            { name: 'Choose Platforms of pay', status: false, proyectId: 3 },
        ]
    }

    //create dispatch and state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    //create the functions

    //get the tasks of a project
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;