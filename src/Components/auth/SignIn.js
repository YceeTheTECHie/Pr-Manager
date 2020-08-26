import React, { Component } from 'react';
import signinimg from '../../Images/signin-image.jpg';
import { connect } from 'react-redux'
import {signIn }from '../../Store/Actions/authActions'
import '../../css/authstyles.css'
import {Redirect} from 'react-router-dom'
class SignIn extends Component {
    state = {
        email : '',
        password : ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.signin(this.state)
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    render() { 
        const {authError,auth} = this.props;
        if (auth.id) return <Redirect to="/"/>
        return (
            <section class="sign-in">
            <div class="container">

                <div class="signin-content">
                    <div className = "error">
                    {authError ? <h5>{authError}</h5>: null}
                    </div>
                    <div class="signin-image">
                    <img src={signinimg} alt="sing up"/>
                    <a href="#" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In </h2>
                        <form onSubmit = {this.handleSubmit} class="register-form">
                            <div class="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="email"  placeholder="Your Name" onChange = {this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" placeholder="Password"  onChange = {this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submits" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">

                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>

            
    
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth:state.firebase.auth
    }
}  

const mapDispatchToProps = (dispatch) => {
return {
    signin: (Credentials) => dispatch(signIn(Credentials))
}
}

export default connect (mapStateToProps,mapDispatchToProps) (SignIn);