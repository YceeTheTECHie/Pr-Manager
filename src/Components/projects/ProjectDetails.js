import React from 'react';
import {Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
const ProjectDetails = (props) => {
    const id = props.match.params.id
    const {auth} = this.props;
    // if (!auth.id) return <Redirect to="/signin"/>
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
//     const mapStateToProps = (state) => {
//         return {
//         auth:state.firebase.auth
//     }
// }


 
export default ProjectDetails;