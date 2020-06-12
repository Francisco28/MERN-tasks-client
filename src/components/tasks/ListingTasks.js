import React, { Fragment, useContext } from 'react';
import Task from '../tasks/Task';
import projectContext from '../../context/projects/projectContext';


const ListingTasks = () => {

    //Extract projects of initial state
    const projectsContext = useContext(projectContext);
    //extract the current project
    const { project, deleteProject } = projectsContext;

    
    //if there is not project selected
    if(!project) return <h2>Select a project</h2>

    //Array destructuring for extract the current project
    const [currentProject] = project;


    const tasksProject = [];

    return ( 
        <Fragment>
            <h2>Project: {currentProject.name}</h2>

            <ul className="listado-tareas">
                { tasksProject.length === 0 
                    ? (<li className="tarea"><p>There is not tasks</p></li>) 
                    :  tasksProject.map(task => (
                        <Task 
                            task={task}
                        />
                    ))
                }
            </ul>

            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={ () => deleteProject(currentProject.id) }
            >Delete Project &times;</button>

        </Fragment>
     );
}
 
export default ListingTasks;