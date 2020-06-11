import React, { Fragment } from 'react';
import Task from '../tasks/Task';

const ListingTasks = () => {


    const tasksProject = [
        { name: 'Choose Platform', status: true },
        { name: 'Choose Colors', status: false },
        { name: 'Choose Platforms of pay', status: false },
        { name: 'Choose Hosting', status: true }
    ];

    return ( 
        <Fragment>
            <h2>Project: Virtual Store</h2>

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
        </Fragment>
     );
}
 
export default ListingTasks;