import React from 'react';
import '../../css/projectsstyles.css'

const ProjectSummary = ({project}) => {
    console.log(project.title)
    return (
        
        <div class="container"><br/>
        <div class="card-deck">
          <div class="card">
         
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.content}</p>
              <p class="card-text"><small class="text-muted">created by {}</small></p>
              <p class="card-text"><small class="text-muted">poster last seen {}</small></p>
            </div>
          </div>
        </div>
        </div>
    );
}
 
export default ProjectSummary;

