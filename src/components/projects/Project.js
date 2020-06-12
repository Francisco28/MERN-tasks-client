import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';


const Project = ({project}) => {

    //get the state of projects
    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => currentProject(project.id) }
            >{project.name}</button>
        </li>
     );
}
 
export default Project;