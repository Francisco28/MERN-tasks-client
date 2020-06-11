import React, { Fragment, useState, useContext } from "react";
import projectContext from '../../context/projects/projectContext';


const NewProject = () => {

    //get the state of form 
    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;

    //State for Project
    const [ project, saveProject ] = useState({
        name: ''
    });

    //extract name of project
    const { name } = project;

    //read the contents of input
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        });
    }

    //when the user press submit input
    const onSubmitProject = e => {
        e.preventDefault();
        
        //validate the project

        //add to state

        //restart the form

    }

  return (
    <Fragment>
        <button 
            type="button" 
            className="btn btn-block btn-primario"
            onClick={ () => showForm() }
        >New Project</button>

        {
            form 
            ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProject}
                    >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Name of Project"
                                name="name"
                                value={name}
                                onChange={onChangeProject}
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Add Project"
                            />

                    </form>
                ) 
            : null

        }
    </Fragment>
  );
};

export default NewProject;
