import React from 'react';
import { NavLink } from 'react-router-dom'
const SignedinLinks = () => {
    return (
        <ul class="menu">     
            <li><NavLink to='/'>Create Project</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/'>BG</NavLink></li>
        </ul>
    );
}
 
export default SignedinLinks ;

                   {/* <Link to='/'className="brand-logo">Mgt-App</Link> */}
