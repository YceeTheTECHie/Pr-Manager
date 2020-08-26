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
        case 'LOGIN_SUCCESS' :
            
           console.log("login success");
            return {
                ...state,
                authError: null
            }
        
        case 'SIGN_OUT_SUCCESS':
            console.log("sign out success");
            return state
        default :
        return state
        }
}
export default authReducer
