import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';


const FormTask = () => {

    //Extract pif a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //if there is not project selected
    if(!project) return null;
    
    //Array destructuring for extract the current project
    const [currentProject] = project;


    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name..."
                        name="name"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;