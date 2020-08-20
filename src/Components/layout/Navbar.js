import React from 'react';
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';
import { connect } from 'react-redux'
const Navbar = () => {

	return (
	<header>
		<figure class="brand">PR Manager</figure>
        <nav class="menu">
            <input type="checkbox" id="menuToggle"/>
            <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
			<ul><SignedinLinks/><SignedOutLinks/></ul>
			
			</nav>
	</header>
    );
}
 
const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.firebase.auth
	}
}
export default connect(mapStateToProps) (Navbar);


