import  React, {Component}   from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
class Dashboard extends Component {
    state = {  }
    render() { 
        const {projects} = this.props;
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
    projects: state.project.projects 
}    
}

export default connect(mapStateToProps)(Dashboard);
