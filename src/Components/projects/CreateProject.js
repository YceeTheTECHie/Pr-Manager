import React, { Component } from 'react';
import sideimg from '../../Images/work6.svg';
import {createProject} from '../../Store/Actions/projectActions';
import {connect} from 'react-redux';
class CreateProject extends Component {
    state = {
      title : '',
      content : ''
    }

    handleChange = e => {
      this.setState({
         [e.target.name] : e.target.value
      
      })
     
    }

    submitForm = e => {
      e.preventDefault();
      this.props.createProject(this.state)
    }
    render() { 
        return (        
          <div className="container">
              <div className="row">
                    <div className="col-md-6">
                          <img src={sideimg} alt="sideimg" />     
                    </div>
                  <div className="col-md-6">
                    <div className="form-all">
                      <h2>Create Project</h2>
                      <br/>
                        <form onSubmit = {this.submitForm} className= "form">
                      <div className="form-group">
                      <label htmlFor="title"> Title :</label>
                      <br/>
                      <input
                        name ="title"
                        type="text" 
                        className="form-control"
                        onChange = {this.handleChange}
                       /> 
                  
                       <br/>
                    </div>
                      <div className="form-group">
                      
                          <label htmlFor="content">Content:</label>
                          <textarea 
                              name="content" 
                              type="text" 
                              className="form-control"
                              onChange = {this.handleChange}
                          />
                          <br/>
                    </div>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                          Create
                        </button>
                    </div>
                  </form>
                </div>
                  </div>
                </div>  
                </div>
            );
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
  createProject: (project) => dispatch(createProject(project))
  }
}
 
 
export default connect(null, mapDispatchToProps)(CreateProject);