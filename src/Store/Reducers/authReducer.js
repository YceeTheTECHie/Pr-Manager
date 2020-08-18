const initialState = {
    authError : null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS' :
            return {
                ...state,
                authError: null
            }
        case 'LOGIN ERROR' :
            return {
                ...state,
                authError: 'login failed'
            }
        case 'SIGN_OUT_SUCCESS':
            console.log("sign out success");
            return state
        default :
        return state
        }
}
export default authReducer
