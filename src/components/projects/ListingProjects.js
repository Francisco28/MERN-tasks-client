import React, { useContext } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';


const ListingProjects = () => {

    //Extract projects of initial state
    const projectsContext = useContext(projectContext);
    
    //extract the projects
    const { projects } = projectsContext;

    //review if projects has content
    if(projects.length === 0) return null;

    return ( 

        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ListingProjects;