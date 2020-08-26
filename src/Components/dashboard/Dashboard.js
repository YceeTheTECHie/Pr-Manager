import  React, {Component}   from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class Dashboard extends Component {
    state = {  }
    render() { 
        
        const {projects, auth} = this.props;
        if (!auth.id) return <Redirect to='/signup'/>
        return (
            <div>  
                <main className="grid">
                    <ProjectList projects={projects}/>     
                    {/* <Notifications/>   */}
              </main>      
                        </div>
        );
    }
}
const mapStateToProps = (state) => {
return {
    projects: state.project.projects,
    auth: state.firebase.auth 
}    
}

export default connect(mapStateToProps)(Dashboard);
