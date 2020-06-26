import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Task = ({task}) => {

    //Extract pif a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //tasks - get the function of task context
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, updateTask, saveCurrentTask } = tasksContext;
    

    //extract the project
    const [ currentProject ] = project; 

    //function that execute when the user press click in button of delete task
    const removeTask = id => {
        deleteTask(id, currentProject._id);
        getTasks(currentProject.id);
    }

    //function that modify the status of the tasks
    const changeStatus = task => {
        if(task.status) {
            task.status = false;
        } else {
            task.status = true;
        }
        updateTask(task);
    }

    //add a current task when the user want to edit
    const selectTask = task => {
        saveCurrentTask(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                 { task.status
                 ?
                    (
                        <button 
                            type="button"
                            className="completo"
                            onClick={ () => changeStatus(task)}
                        >Completed</button>
                    )
                 :
                    (
                        <button 
                            type="button"
                            className="incompleto"
                            onClick={ () => changeStatus(task)}
                        >Incomplete</button>
                    )
                
                 }
            </div>

            <div className="acciones">
                 <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTask(task)}
                 >Edit</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => removeTask(task._id)}
                 >Delete</button> 
            </div>
        </li>
     );
}
 
export default Task;