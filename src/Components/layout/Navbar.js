import React from 'react';
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';
import { connect } from 'react-redux'
const Navbar = () => {

		const handleClick = () => {
			console.log("working");
		}

	return (
	<section class="fluid-container">
			<nav class=" navbar navbar-expand-lg navbar-white bg-white" id="ftco-navbar">
	    <div class="container d-flex align-items-center ">
	    	<a class="navbar-brand logotext" href="index.html"><span class="fluid-container">Pr Manager</span></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="spans"></span><span class="spans">Menu</span>
	      </button>
		  <div class=" collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	        	<li class="nav-item active"><a href="index.html" class="nav-link pl-0">Home</a></li>
	        	<li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
	        	<li class="nav-item"><a href="teacher.html" class="nav-link">Events</a></li>
	        	<li class="nav-item"><a href="courses.html" class="nav-link">Gallery</a></li>
	        	<li class="nav-item"><a href="pricing.html" class="nav-link">News</a></li>
	        	
	        </ul>
	      </div>
	    </div>
	  </nav>
	</section>
    );
}
 
const mapStateToProps = (state) => {
	console.log(state);
	return {

	}
}
export default connect(mapStateToProps) (Navbar);


