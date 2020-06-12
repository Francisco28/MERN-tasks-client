import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const FormTask = () => {

    //Extract pif a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    
    const tasksContext = useContext(taskContext);
    const { addTask } = tasksContext;

    //State of Form
    const [ task, saveTask ] = useState({
        name: ''
    });

    //destructuring - extract the project name
    const { name } = task; 

    //if there is not project selected
    if(!project) return null;
    
    //Array destructuring for extract the current project
    const [currentProject] = project;

    
    //read the Form values
    const hanldeChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        
        //validate

        //pass the validation

        //add the new task to "state of tasks"
        task.projectId = currentProject.id;
        task.status = false;
        addTask(task);

        //restart the form
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name..."
                        name="name"
                        value={name}
                        onChange={hanldeChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;