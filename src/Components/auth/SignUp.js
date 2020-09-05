import React, { Component } from 'react';
import signupimg from '../../Images/signup-image.jpg';
import {signUp} from '../../Store/Actions/authActions'
import {connect} from 'react-redux'
import '../../css/authstyles.css';
import {NavLink} from 'react-router-dom';   
class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        rePassword: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password === this.state.rePassword)
            console.log('match found');
            this.props.signUp(this.state)
    }


    
    render() { 
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-sm top col-md col-lg col-xl ">
                        
                            <h2 style = {{fontFamily:'Montserrat',paddingRight: '2em',marginTop:'2em'}}>Sign Up</h2>
                            <form onSubmit = {this.handleSubmit} className="register-form">
                                <div className="form-group">
                                         <label for="First Name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                         <input type="text" name="firstName" id="name" placeholder="First Name" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                     <label for="Last Name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                     <input type="text" name="lastName" id="name" placeholder="Last Name"onChange={this.handleChange}/>
                                 </div>
                                 <div className="form-group">
                                     <label for="email"><i className="zmdi zmdi-email"></i></label>
                                     <input type="email" name="email" id="email" placeholder="Your Email" onChange={this.handleChange}/>
                                 </div>
                                 <div className="form-group">
                                     <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                     <input type="password" name="password" id="pass" placeholder="Password" onChange={this.handleChange}/>
                                 </div>
                                 <div className="form-group">
                                     <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                     <input type="password" name="rePassword" id="re_pass" placeholder="Repeat your password" onChange={this.handleChange}/>
                                 </div>
                                 
                                <div className="form-group form-button">
                                     <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                 </div>
                             <NavLink to ='/signin' className="signup-image-link">I am already member</NavLink>

                            </form>
                        </div>
                        
                        <div className="signup-image col-sm col-md col-lg col-xl ">
                                <img  className="img-fluid"src={signupimg} alt="sign up"/>
                            
                        </div>
                    </div>

                    
                </div>
            


        );
    }
}
const mapStateToProps = (state) => {
    return {
           auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            signUp : (newUser) => dispatch(signUp(newUser))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (SignUp);