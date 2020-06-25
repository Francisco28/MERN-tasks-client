import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';


const ListingProjects = () => {

    //Extract projects of initial state
    const projectsContext = useContext(projectContext);
    
    //extract the projects
    const { projects, getProjects } = projectsContext;

    //get projects when load the component
    useEffect(() => {
        getProjects();
        //eslint-disable-next-line
    }, []);

    //review if projects has content
    if(projects.length === 0) return <p>There is not projects, start creating one!</p>;



    return ( 

        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListingProjects;