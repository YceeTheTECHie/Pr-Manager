import  React, {Component}   from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import '../../css/loader.css'
import {compose} from 'redux'
class Dashboard extends Component {
    render() { 
        
        const {projects, auth,time} = this.props;
        console.log(time);
        if (!auth.uid) return <Redirect to='/signup'/>
        if (projects){
             return (
          <React.Fragment>  
                
                    <ProjectList projects={projects}/>     
                    {/* <Notifications/>   */}
              
            </React.Fragment>
        );
        }
        else{
            return (
                <div className="load-4">
                  
                </div>
                
            );
        }
       
    }
}
const mapStateToProps = (state) => {
return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
}   
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy : ['createdAt', 'desc']} 
    ])
)(Dashboard);
