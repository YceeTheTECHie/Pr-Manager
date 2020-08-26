import React from 'react';
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';
import { connect } from 'react-redux'
const Navbar = (props) => {
	const {auth} = props;
	return (
	<header>
		<figure className="brand">PR Manager</figure>
        <nav className="menu">
            <input type="checkbox" id="menuToggle"/>
            <label for="menuToggle" className=	"menu-icon"><i className="fa fa-bars"></i></label>
			<ul>{auth.id ? <SignedinLinks/> :<SignedOutLinks/> }</ul>
			
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


