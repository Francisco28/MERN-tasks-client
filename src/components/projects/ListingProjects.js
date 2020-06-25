import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';


const ListingProjects = () => {

    //Extract projects of initial state
    const projectsContext = useContext(projectContext);
    //extract the projects
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } =  alertContext;

    //get projects when load the component
    useEffect(() => {

        //if there is an error
        if(message) {
            showAlert(message.msg, message.category);
        }

        getProjects();
        //eslint-disable-next-line
    }, [message]);

    //review if projects has content
    if(projects.length === 0) return <p>There is not projects, start creating one!</p>;



    return ( 

        <ul className="listado-proyectos">

            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>)  : null }

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