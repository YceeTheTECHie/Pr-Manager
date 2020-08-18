import React from 'react';
import {connect} from 'react-redux'
import {signOut} from '../../Store/Actions/authActions'
import { NavLink } from 'react-router-dom'
const SignedinLinks = (props) => {
    const signOut = props;
    return (
        <ul class="menu">     
            <li><NavLink to='/'>Create Project</NavLink></li>
            <li><a href = "#" onClick = {props.signOut}>Sign Out</a></li>
            <li><NavLink to='/'>BG</NavLink></li>
        </ul>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
    signOut : () => {dispatch(signOut())}
    }
}

export default connect(null, mapDispatchToProps) (SignedinLinks) ;

                   {/* <Link to='/'className="brand-logo">Mgt-App</Link> */}
