const initialState = {
    authError : null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN ERROR' :
           console.log("login error"); 
           return {
                
                ...state,
                authError: 'login failed'
            }
        case 'LOGIN_SUCCESS':
            
           console.log("login success");
            return {
                ...state,
                authError: null
            }
        
        case 'SIGN_OUT_SUCCESS':
            console.log("sign out success");
            return state

            case 'SIGNUP_SUCCESS':
            
           console.log("signup success");
            return {
            ...state,
                authError: null
            }
            case 'SIGNUP_ERROR':
                console.log("signup ERROR");
                 return {
                     ...state,
                     authError: action.err.message
                 }
             
        default :
        return state
        }
}
export default authReducer
