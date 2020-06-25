import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Project = ({project}) => {

    //get the state of projects
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    
    //get the function of context 'task'
    const tasksContext = useContext(taskContext);
    const { getTasks } = tasksContext;


    //function to add the current project
    const selectProject = id => {
        currentProject(id); //fijar a current project
        getTasks(id); //filtrar las tareas cuando se de click
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project._id) }
            >{project.name}</button>
        </li>
     );
}
 
export default Project;