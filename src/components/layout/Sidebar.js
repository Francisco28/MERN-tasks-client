import React from 'react';
import NewProject from '../projects/NewProject';
import ListingProjects from '../projects/ListingProjects';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject />

            <div className="proyectos">
                <h2>Your Projects</h2>

                <ListingProjects />
            </div>
        </aside>
     );
}
 
export default Sidebar;