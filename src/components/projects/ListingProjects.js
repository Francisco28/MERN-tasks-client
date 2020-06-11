import React from 'react';
import Project from './Project';

const ListingProjects = () => {


    const projects = [
        {name: 'Virtual Store'},
        {name: 'Intranet'},
        {name: 'Design of Web site'}
    ];

    return ( 

        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project 
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ListingProjects;