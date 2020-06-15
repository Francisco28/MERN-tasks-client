import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Task = ({task}) => {

    //Extract pif a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //tasks - get the function of task context
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks } = tasksContext;
    

    //extract the project
    const [ currentProject ] = project; 

    //function that execute when the user press click in button of delete task
    const removeTask = id => {
        deleteTask(id);
        getTasks(currentProject.id);
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
                        >Completed</button>
                    )
                 :
                    (
                        <button 
                            type="button"
                            className="incompleto"
                        >Incomplete</button>
                    )
                
                 }
            </div>

            <div className="acciones">
                 <button
                    type="button"
                    className="btn btn-primario"
                 >Edit</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => removeTask(task.id)}
                 >Delete</button> 
            </div>
        </li>
     );
}
 
export default Task;