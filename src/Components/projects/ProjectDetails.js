import React from 'react';
import {Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import '../../css/loader.css'
import {compose} from 'redux'
const ProjectDetails = (props) => {
    console.log(props)
    const {project,auth} = props;
    if (!auth.uid) return <Redirect to="/signin"/>
    if (project){
        return (
    <React.Fragment>    
        <div  class="container"><br/>
        <div class="card-deck">
          <div class="card">
              <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.content}</p>
              <p class="card-text"><small class="text-muted">created by {project.authorFirstName} {project.authorLastName}</small> <small class="text-muted">poster last seen {}</small></p>
            </div>
          </div>
        </div>
        </div> 
            
    </React.Fragment>
        )
    }
    else{
        return (
            <div class="fancy-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="dot"></div>
          </div>           
        );
    }
    
}
    const mapStateToProps = (state, ownProps) => {
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null;
        return {
        auth:state.firebase.auth,
        project: project
        }
}


 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ]))(ProjectDetails)
