import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authentication/authContext';


const Bar = () => {

    //extract the information of authentication
    const authContext = useContext(AuthContext);
    const { user, userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, [])

    return ( 
        <header className="app-header">
            { user ? <p className="nombre-usuario">Hi! <span>{ user.name }</span></p> : null }


            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
     );
}
 
export default Bar;