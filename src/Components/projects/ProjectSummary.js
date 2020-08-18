import React from 'react';
const ProjectSummary = ({project}) => {
    console.log(project.title)
    return (
        
        <div className="text">
                   <h2> {project.title} </h2>
        </div>
    );
}
 
export default ProjectSummary;

