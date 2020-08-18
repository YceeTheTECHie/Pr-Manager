import React from 'react';
import ProjectSummary from './ProjectSummary';
const ProjectList = ({projects}) => {

    return ( 
   <React.Fragment>
        {projects && projects.map(project => {
            return (
                 <ProjectSummary project={project} key ={project.id}/>
                 )
        
        })}           
    </React.Fragment>
     )

    } 
export default ProjectList;

