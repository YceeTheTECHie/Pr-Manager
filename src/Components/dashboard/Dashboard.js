import  React, {Component}   from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
class Dashboard extends Component {
    render() { 
        
        const {projects, auth} = this.props;
        if (!auth.uid) return <Redirect to='/signup'/>
        return (
          <React.Fragment>  
                
                    <ProjectList projects={projects}/>     
                    {/* <Notifications/>   */}
              
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth 
}    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'} 
    ])
)(Dashboard);
