import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { getFirebaseReducer } from 'react-redux-firebase'
import { getFirestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
        auth:authReducer,
        project:projectReducer,
        firebase: getFirebaseReducer,
        firestore: getFirestoreReducer
})

export default rootReducer  