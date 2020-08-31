import React from 'react';
import '../../css/projectsstyles.css'

const ProjectSummary = ({project}) => {
    console.log(project.title)
    return (
        
        <div className="card">
                   <h2> {project.content} </h2>
                    <div className="container">
                        <h2> {project.title} </h2>
                        <h2> created by </h2>
                        <p>Last seen by</p> 
                   </div>
        </div>
    );
}
 
export default ProjectSummary;

