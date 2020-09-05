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
                <article>
                    <h1> {project.id} </h1>
                    <h1> {project.title} </h1>
                <h3>{project.content}</h3>
                <span>{project.authorLastName}</span>
                <span>{project.authorFirstName}</span>
             
        </article>
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
    ])
) 
(ProjectDetails);