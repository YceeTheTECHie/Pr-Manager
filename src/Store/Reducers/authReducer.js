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
        default :
        return state
        }
}
export default authReducer
