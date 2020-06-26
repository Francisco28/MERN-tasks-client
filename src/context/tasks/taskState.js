import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';


import { 
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
 } from '../../types';

 import clientAxios from '../../config/axios';

const TaskState = props => {

    const initialState = {
        tasksproject: [],
        errortask: false,
        taskselected: null
    }

    //create dispatch and state
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //create the functions

    //get the tasks of a project
    const getTasks = async project => {
        try {
            const result = await clientAxios.get('/api/tasks', { params: { project } });
            console.log(result);
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            });
        } catch (error) {
            console.log(error);
        }
    }

    //add a task to project selected
    const addTask = async task => {
        console.log(task);
        try {
            const result = await clientAxios.post('/api/tasks', task);
            console.log(result);
            dispatch({
                type: ADD_TASK,
                payload: task
            });
        } catch (error) {
            console.log(error);
        }
    }

    //validate and show an error if is necessary
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    //validate task for id
    const deleteTask = async (id, project) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, { params: { project } });
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Extract the current task for edition
    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    //Edit or modify a task
    const updateTask = async task => {
        
        try {
            const result = await clientAxios.put(`/api/tasks/${task._id}`, task);
            console.log(result);

            dispatch({
                type: UPDATE_TASK,
                payload: result.data.task
            });
        } catch (error) {
            console.log(error);
        }
    }

    
    //clean task - delete the task selected
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                taskselected: state.taskselected,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                saveCurrentTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;