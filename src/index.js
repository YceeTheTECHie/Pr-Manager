import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import '../src/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import 'materialize-css/dist/css/materialize.min.css';  
import {createStore, applyMiddleware, compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import rootReducer from '../src/Store/Reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance  } from 'redux-firestore'
import { reactReduxFirebase,getFirebase,  ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'


const rrfConfig = {}

const Store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase ,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady : true})
    ) 
   
);



 
Store.firebaseAuthIsReady.then(() => {
ReactDOM.render(<Provider store ={Store}><App /></Provider>,document.getElementById('root'));
serviceWorker.register(); 
}).catch((err)=>{console.log("this is",err)})
