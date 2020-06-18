import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const FormTask = () => {

    //Extract pif a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //tasks
    const tasksContext = useContext(taskContext);
    const { taskselected, errortask, addTask, validateTask, getTasks, updateTask, cleanTask } = tasksContext;

    //useEffect: vienen a reemplazar los componentes del ciclo de vida y cuando algo cambia en el state, en el proyecto, recarga esa parte del componente
    //Effect that detect if there is a task selected
    useEffect( () => {
        if(taskselected !== null) {
            saveTask(taskselected)
        } else {
            saveTask({
                name: ''
            })
        }
    }, [taskselected]);

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
        if(name.trim() === '') {
            validateTask();
            return; //para que detenga la ejecucion
        }

        //review if is edition or new task
        if(taskselected === null) {
            //add the new task to "state of tasks"
            task.projectId = currentProject.id;
            task.status = false;
            addTask(task);
        } else {
            //update task existent
            updateTask(task);

            //delete task selected of state
            cleanTask();
        }


       
        //get and filter the tasks of current project
        getTasks(currentProject.id);

        //restart the form
        saveTask({
            name: ''
        })
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
                        value={taskselected ? 'Edit Task' : 'Add Task' }
                    />
                </div>
            </form>

            { errortask ? <p className="mensaje error">The task name is required</p>  : null }
        </div>
     );
}
 
export default FormTask;