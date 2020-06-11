import React from 'react'


const Bar = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Francisco Javier</span></p>

            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
     );
}
 
export default Bar;