export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase}) => {
        //async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            createdAt: new Date()
        }).then(() => { dispatch({
            type: 'CREATE_PROJECT',
            project: project
        })}).catch((err) => { dispatch({type :'CREATE_PROJECT_ERROR',err});
            })
          
        }
     
    
};