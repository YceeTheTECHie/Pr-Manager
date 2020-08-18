import React, { Component } from 'react';
import signupimg from '../../Images/signup-image.jpg';
import '../../css/authstyles.css'
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
    }
    render() { 
        return (
          
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
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
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                            </form>
                            <NavLink to ='/signin' className="signup-image-link">I am already member</NavLink>

                        </div>
                        <div className="signup-image">
                            <img src={signupimg} alt="sign up"/>
                        </div>
                    </div>
                </div>

            </section>
    
        );
    }
}
 
export default SignUp;