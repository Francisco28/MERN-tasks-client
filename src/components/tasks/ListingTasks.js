import React, { Fragment, useContext } from 'react';
import Task from '../tasks/Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';


const ListingTasks = () => {

    //Extract projects of initial state
    const projectsContext = useContext(projectContext);
    //extract the current project
    const { project, deleteProject } = projectsContext;

    //get the tasks of the project
    const tasksContext = useContext(taskContext);
    const { tasksproject } = tasksContext;

    
    //if there is not project selected
    if(!project) return <h2>Select a project</h2>

    //Array destructuring for extract the current project
    const [currentProject] = project;



    return ( 
        <Fragment>
            <h2>Project: {currentProject.name}</h2>

            <ul className="listado-tareas">
                { tasksproject.length === 0 
                    ? (<li className="tarea"><p>There is not tasks</p></li>) 
                    :  
                    <TransitionGroup>
                        {tasksproject.map(task => (
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Task 
                                    task={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>

            <button 
                type="button"
                className="btn btn-delete"
                onClick={ () => deleteProject(currentProject._id) }
            >Delete Project &times;</button>

        </Fragment>
     );
}
 
export default ListingTasks;