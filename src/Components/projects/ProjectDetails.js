import React from 'react';
const ProjectDetails = (props) => {
    const id = props.match.params.id

    return (
        <React.Fragment> 

                <article>
                    <h1>Project {id} </h1>
                <h3>Project  Seamlessly visualize quality</h3>
                <p>Project  Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <p>Project  Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <p>Project  Collaboratively administrate empowered markets via plug-and-play networks.</p>
             
        </article>
     
    <article>
                <h2>pROJECT </h2>
                <h3>Project   Seamlessly visualize quality</h3>
                <p> Project  Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                
    </article>
        </React.Fragment>
    );
}
 
export default ProjectDetails;