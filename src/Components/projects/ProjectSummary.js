import React from 'react';
import '../../css/projectsstyles.css'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    console.log(project.authorlastName);
    return (
        
        <div class="container">
        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              {/* <p class="card-text">{project.content}</p> */}
              <p class="card-text"><small class="text-muted">created by {project.authorFirstName} {project.authorLastName}</small><small class="text-muted">Last Seen {moment(project.createdAt.toTime).hours()}</small></p>
              {/* <p class="card--text"><small class="text-muted">poster last seen {}</small></p> */}
            </div>
          </div>
        </div>
        </div>
    );
}
 
export default ProjectSummary;

