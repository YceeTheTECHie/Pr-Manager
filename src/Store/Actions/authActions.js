export const signin = (Credentials) => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password
        ).then (() => { dispatch({type : 'LOGIN_SUCCESS'})
            }).catch((err) => {dispatch({type:'LOGIN ERROR',err})})

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {dispatch({type : 'SIGN_OUT_SUCCESS'})})
    }
}