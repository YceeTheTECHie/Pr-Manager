import React from 'react';
import { Link, NavLink} from 'react-router-dom'
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';
import hamburger from '../../Images/hamburger.png'
import { connect } from 'react-redux'
const Navbar = (props) => {
	const {auth,profile} = props;
	return (
	<header>
	<div className="container-fluid">
		<figure  className="brand"><NavLink to = "/">PR Manager</NavLink></figure>
        <nav className="menu">
            <input type="checkbox" id="menuToggle"/>
            <label for="menuToggle" className="menu-icon"></label> 
		<ul>{auth.uid ? <SignedinLinks profile = {profile}/> : <SignedOutLinks/> }</ul>
			
			</nav>
	</div>
	</header>
    );
}
 
const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}
export default connect(mapStateToProps) (Navbar);
